---
title: "Task"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## Task

There is a whole bunch of different types of tasks and using task groups and detach tasks

- Basic Task with async/await

```swift
// MARK: -  VIEWMODEL
class TaskBootCampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
// MARK: -  INIT
// MARK: -  FUNCTION
func fetchImage() async {
do {
  guard let url = URL(string: "https://picsum.photos/1000") else { return }
  let (data, _) = try await URLSession.shared.data(from: url, delegate: nil)
  self.image = UIImage(data: data)
} catch  {
  print(error.localizedDescription)
}
}
}

// MARK: -  VIEW
struct TaskBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = TaskBootCampViewModel()
// MARK: -  BODY
var body: some View {
VStack(spacing: 40) {
if let image = vm.image {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
} //: VSTACK
.onAppear {
Task {
  await vm.fetchImage()
}
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/166629300-b3369619-4bc0-4f62-92c4-3aeb61bb3a66.png">

- Set up task priority

```swift
// MARK: -  VIEW
struct TaskBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = TaskBootCampViewModel()
// MARK: -  BODY
var body: some View {
VStack(spacing: 40) {
if let image = vm.image {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
if let image = vm.image2 {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
} //: VSTACK
.onAppear {

// The order of task priorities
  Task(priority: .high) {
    // Task.yield() just can wait and let other tasks go in front of it if there are other tasks
    await Task.yield()
    print("High: \(Thread.current) : \(Task.currentPriority)")
  }
  Task(priority: .userInitiated) {
    print("UserInitiated: \(Thread.current) : \(Task.currentPriority)")
  }
  Task(priority: .medium) {
    print("Medium: \(Thread.current) : \(Task.currentPriority)")
  }

  Task(priority: .low) {
    print("Low: \(Thread.current) : \(Task.currentPriority)")
  }
  Task(priority: .utility) {
    print("Utility: \(Thread.current) : \(Task.currentPriority)")
  }
  Task(priority: .background) {
    print("Background: \(Thread.current) : \(Task.currentPriority)")
  }
```

<img width="1175" alt="image" src="https://user-images.githubusercontent.com/28912774/166631442-d9745af3-4653-4106-aeff-f90cf20d8dc4.png">

- Add child Tasks

```swift
// child tasks will inherit all of the metadata from parent tasks
Task(priority: .userInitiated) {
  print("UserInitiated: \(Thread.current) : \(Task.currentPriority)")

  // detached has a different priority than the parent priority
  Task.detached {
    print("detached: \(Thread.current) : \(Task.currentPriority)")
  }
}
```

<img width="1168" alt="image" src="https://user-images.githubusercontent.com/28912774/166632745-eeed9b4a-84fa-403d-b3e0-1f3333d2d9fe.png">

- Cancel Tasks

There's one of the most important things about tasks because when you create so many tasks in your app. But, if you move away from the screen or does something else we also want the ability to cancel to save power wise and might want to cancel them if things move off screen

```swift
// MARK: -  HOMEVIEW
struct TaskBootCampHomeView: View {
var body: some View {
NavigationView {
  ZStack {
    NavigationLink("Click Me!!") {
      TaskBootCamp()
    }
  } //: ZSTACK
} //: NAVIGATION
}
}


// MARK: -  VIEW
struct TaskBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = TaskBootCampViewModel()
@State private var fetchImageTask: Task<(), Never>? = nil
// MARK: -  BODY
var body: some View {
VStack(spacing: 40) {
if let image = vm.image {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
if let image = vm.image2 {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
} //: VSTACK
.onDisappear(perform: {
// when display off then cancel tasks during process
fetchImageTask?.cancel()
})
.onAppear {
fetchImageTask = Task {
  print(Thread.current)
  print(Task.currentPriority)
  await vm.fetchImage()
}
}
}
}
```

<img width="1082" alt="image" src="https://user-images.githubusercontent.com/28912774/166635105-bcb7f0a6-fd6b-4791-bf61-77e8a8c7cd4c.png">

- Task modifier (iOS 15)

`.task { code }` : Adds an asynchronous task to perform when this view appears

```swift
// MARK: -  HOMEVIEW
struct TaskBootCampHomeView: View {
var body: some View {
NavigationView {
  ZStack {
    NavigationLink("Click Me!!") {
      TaskBootCamp()
    }
  } //: ZSTACK
} //: NAVIGATION
}
}


// MARK: -  VIEW
struct TaskBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = TaskBootCampViewModel()
@State private var fetchImageTask: Task<(), Never>? = nil
// MARK: -  BODY
var body: some View {
VStack(spacing: 40) {
if let image = vm.image {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
if let image = vm.image2 {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)
}
} //: VSTACK

// SwiftUI automatically cancels the task if the view disappears before the action completes
.task {
await vm.fetchImage()
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/166635777-b97fd276-26c8-4a7f-b87d-99820b78c765.gif">

- `Task.checkCancellation() throws`

If the task is cancelled this will throw an error

```swift
for x in array {
  // working loop right here if it was running this after each piece of work it would check if the task is canceled and then it would stop if the task was canceled and it would throw back an error our of this function. Obviously, not throwing so we have to deal with all of that if you have long running tasks and you are going to cancel them you might want to throw in an occasional check for the task actually being cancelled

  try Task.checkCancellation()

}
```

<!-- <p align="center">
  <img height="350"  alt="스크린샷" src="">
</p> -->

<!-- README 한 줄에 여러 screenshoot 놓기 예제 -->
<!-- <p>
   <img height="350" alt="스크린샷" src="">
   <img height="350" alt="스크린샷" src="">
   <img height="350" alt="스크린샷" src="">
</p> -->

---

<!-- 🔶 🔷 📌 🔑 👉 -->

## 🗃 Reference

SwiftUI Thinking - [https://youtu.be/fTtaEYo14jI](https://youtu.be/fTtaEYo14jI)
