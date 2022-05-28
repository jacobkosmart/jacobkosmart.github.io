---
title: "TaskGroup"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## TaskGroup

If we have a whole bunch of asynchronous functions that we need to run like maybe 10 or 20. async let isn't scalable how can we run a whole bunch a group of tasks at the same time concurrently.

Apple has actually given us something called a task group in which we can create a single group of tasks and run a whole bunch of tasks concurrently

- Fetch multiple images without Task Group

You could image in that if the fetch images went to 10 or 20 or more. This is not
very scalable

```swift
// MARK: -  DATA MANAGER
class TaskGroupBootCampDataManager {

func fetchImageWithAsyncLet() async throws -> [UIImage] {
  async let fetchIamge1 = fetchImage(urlString: "https://picsum.photos/300")
  async let fetchIamge2 = fetchImage(urlString: "https://picsum.photos/300")
  async let fetchIamge3 = fetchImage(urlString: "https://picsum.photos/300")
  async let fetchIamge4 = fetchImage(urlString: "https://picsum.photos/300")

  let (image1, image2, image3, image4) = await (try fetchIamge1, try fetchIamge2, try fetchIamge3, try fetchIamge4)
  return [image1, image2, image3, image4]
}

private func fetchImage(urlString: String) async throws -> UIImage {
  guard let url = URL(string: urlString)  else {
    throw URLError(.badURL)
  }
  do {
    let (data, _) = try await URLSession.shared.data(from: url, delegate: nil)
    if let image = UIImage(data: data) {
      return image
    } else {
      throw URLError(.badURL)
    }
  } catch  {
    throw error
  }
}
}

// MARK: -  VIEWMODEL
class TaskGroupBootCampViewModel: ObservableObject {
@Published var images: [UIImage] = []
let manager = TaskGroupBootCampDataManager()

func getImages() async {
if let images = try? await manager.fetchImageWithAsyncLet() {
self.images.append(contentsOf: images)
}
}
}

// MARK: -  VIEW
struct TaskGroupBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = TaskGroupBootCampViewModel()
let columns = [GridItem(.flexible()), GridItem(.flexible())]
// let url = URL(string: "https://picsum.photos/300")!
// MARK: -  BODY
var body: some View {
NavigationView {
ScrollView {
LazyVGrid(columns: columns) {
ForEach(vm.images, id: \.self) { image in
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(height: 150)
} //: LOOP
} //: GRID
} //: SCROLL
.navigationTitle("Task Group Practice")
.task {
await vm.getImages()
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/167993618-cb0302b0-3502-488d-9de4-dd929ebca085.gif">

There's got to be a better way to write and perform multiple concurrent asynchronous requests and the way we do that again is with the task group.

- Fetch multiple images with Task Group

```swift
// MARK: -  DATA MANAGER
class TaskGroupBootCampDataManager {

func fetchImageWithAsyncLet() async throws -> [UIImage] {
async let fetchIamge1 = fetchImage(urlString: "https://picsum.photos/300")
async let fetchIamge2 = fetchImage(urlString: "https://picsum.photos/300")
async let fetchIamge3 = fetchImage(urlString: "https://picsum.photos/300")
async let fetchIamge4 = fetchImage(urlString: "https://picsum.photos/300")

let (image1, image2, image3, image4) = await (try fetchIamge1, try fetchIamge2, try fetchIamge3, try fetchIamge4)
return [image1, image2, image3, image4]
}

func fetchImageWithTaskGroup() async throws -> [UIImage] {
let urlStrings = [
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
]

return try await withThrowingTaskGroup(of: UIImage?.self) { group in
  var images: [UIImage] = []
  images.reserveCapacity(urlStrings.count)

  for urlString in urlStrings {
    group.addTask {
      try? await self.fetchImage(urlString: urlString)
    }
  }
  for try await image in group {
    if let image = image {
      images.append(image)
    }
  }
  return images
}
}

func fetchImage(urlString: String) async throws -> UIImage {
guard let url = URL(string: urlString)  else {
  throw URLError(.badURL)
}
do {
  let (data, _) = try await URLSession.shared.data(from: url, delegate: nil)
  if let image = UIImage(data: data) {
    return image
  } else {
    throw URLError(.badURL)
  }
} catch  {
  throw error
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/167996493-ebb67190-e869-4521-a2f3-84e8e2da81d1.gif">

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

SwiftUI Thinking - [https://youtu.be/epBbbysk5cU](https://youtu.be/epBbbysk5cU)
