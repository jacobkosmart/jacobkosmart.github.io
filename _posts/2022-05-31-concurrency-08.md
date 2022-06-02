---
title: "Actor"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

### 1.What is the problem that actor are solving?

In the actual apps a lof of times we are using background threads that use URL session fetch data from server. The important thing that as developers is background threads are all accessing the same class that you know class are not thread safe

So, if two or more threads access the same object in memory at the same time you can run into really bad problems in your app you can run into data races if not worse crashes

If you want to check thread safe to turn on Thread Sanitizer in edit Scheme

<img width="919" alt="image" src="https://user-images.githubusercontent.com/28912774/171088636-b926d53a-cd13-441c-8987-0ffc16701a68.png">

```swift
// MARK: - DATAMANAGER
class MyDataManager {
static let instance = MyDataManager()
private init() {}

var data: [String] = []

func getRandomData() -> String? {
self.data.append(UUID().uuidString)
print(Thread.current)
return data.randomElement()
}
}

// MARK: - HOME
struct HomeView: View {

let manager = MyDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.1, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
Color.gray.opacity(0.8).ignoresSafeArea()
Text(text)
  .font(.headline)
} //: ZSTACK
.onReceive(timer) { _ in
DispatchQueue.global(qos: .background).async {
  if let data = manager.getRandomData() {
    DispatchQueue.main.async {
      self.text = data
    }
  }
}
}
}
}

// MARK: - BROWSER
struct BrowserView: View {

let manager = MyDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.01, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
Color.yellow.opacity(0.8).ignoresSafeArea()

Text(text)
} //: ZSTACK
.onReceive(timer) { _ in
DispatchQueue.global(qos: .default).async {
  if let data = manager.getRandomData() {
    DispatchQueue.main.async {
      self.text = data
    }
  }
}
}
}
}

struct ActorBootCamp: View {
// MARK: -  PROPERTY
// MARK: -  BODY
var body: some View {
TabView {
HomeView()
  .tabItem {
    Label("Home", systemImage: "house.fill")
  }
BrowserView()
  .tabItem {
    Label("Browse", systemImage: "magnifyingglass")
  }
}
}
}
```

<img width="839" alt="image" src="https://user-images.githubusercontent.com/28912774/171089503-a371fe8d-81e1-4d58-b3b7-8c30b6471a95.png">

Above the picture, you can see same pointer (0x000107a4d9d0) and different thread 7 and 1 and the same piece of memory in the heap that we can call this problem as data race (multiple threads are accessing the same class (pointer))

This is probably one of the hardest things to debug

### 2.How was this problem solved prior to actors?

- To take the class and to make it thread safe

<img height="350" alt="스크린샷" src="">

```swift
// MARK: - DATAMANAGER
class MyDataManager {
static let instance = MyDataManager()
private init() {}

var data: [String] = []
private let lock = DispatchQueue(label: "com.MyApp.MyDataManager")

func getRandomData(completionHandler: @escaping (_ title: String?) -> ()) {
lock.async {
  self.data.append(UUID().uuidString)
  print(Thread.current)
  completionHandler(self.data.randomElement())
}
}
}

// MARK: - HOME
struct HomeView: View {

let manager = MyDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.1, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
Color.gray.opacity(0.8).ignoresSafeArea()
Text(text)
  .font(.headline)
} //: ZSTACK
.onReceive(timer) { _ in
DispatchQueue.global(qos: .background).async {
  manager.getRandomData { title in
    if let data = title {
      DispatchQueue.main.async {
        self.text = data
      }
    }
  }
}
}
}
}

// MARK: - BROWSER
struct BrowserView: View {

let manager = MyDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.01, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
Color.yellow.opacity(0.8).ignoresSafeArea()

Text(text)
} //: ZSTACK
.onReceive(timer) { _ in
DispatchQueue.global(qos: .default).async {
manager.getRandomData { title in
  if let data = title {
    DispatchQueue.main.async {
      self.text = data
    }
  }
}
}
}
}
}
```

That's pretty much the solution to making classes thread safe. It is purely put all of your functions into a dispatchQueue a lock or a queue and then they will be thread safe because this will basically when all the functions reach this line

### 3.Actors can solve the problem!

So more or less an actor is a class that automatically for the thread safe because we are in the asynchronous swift concurrency environment we no longer have to use completion handlers either

```swift
// MARK: - DATAMANAGER
class MyDataManager {
static let instance = MyDataManager()
private init() {}

var data: [String] = []
private let lock = DispatchQueue(label: "com.MyApp.MyDataManager")

func getRandomData(completionHandler: @escaping (_ title: String?) -> ()) {
lock.async {
  self.data.append(UUID().uuidString)
  print(Thread.current)
  completionHandler(self.data.randomElement())
}
}
}

actor MyActorDataManager {
static let instance = MyActorDataManager()
private init() {}

var data: [String] = []

func getRandomData() -> String? {
  self.data.append(UUID().uuidString)
  print(Thread.current)
  return self.data.randomElement()
}
}

// MARK: - HOME
struct HomeView: View {

let manager = MyActorDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.1, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
  Color.gray.opacity(0.8).ignoresSafeArea()
  Text(text)
    .font(.headline)
} //: ZSTACK
.onReceive(timer) { _ in
  Task {
    if let data = await manager.getRandomData() {
      await MainActor.run(body: {
        self.text = data
      })
    }
  }//: TASK
}
}
}

// MARK: - BROWSER
struct BrowserView: View {

let manager = MyActorDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.01, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
  Color.yellow.opacity(0.8).ignoresSafeArea()

  Text(text)
} //: ZSTACK
.onReceive(timer) { _ in
  Task {
    if let data = await manager.getRandomData() {
      await MainActor.run(body: {
        self.text = data
      })
    }
  }//: TASK
}
}
}
```

### 4.nonisolated

So, every time we want to access something inside the actor we then need to await to get into that actor because all of the code inside the actor is isolated. It is isolated to that actor so then thread safe

Sometimes, where you have some code in your actor that actually does not need to be isolated to the actor

```swift
// MARK: - DATAMANAGER
class MyDataManager {
static let instance = MyDataManager()
private init() {}

var data: [String] = []
private let lock = DispatchQueue(label: "com.MyApp.MyDataManager")

func getRandomData(completionHandler: @escaping (_ title: String?) -> ()) {
  lock.async {
    self.data.append(UUID().uuidString)
    print(Thread.current)
    completionHandler(self.data.randomElement())
  }
}
}

actor MyActorDataManager {
static let instance = MyActorDataManager()
private init() {}

var data: [String] = []

nonisolated let myRandomText = "Someting new"

func getRandomData() -> String? {
  self.data.append(UUID().uuidString)
  print(Thread.current)
  return self.data.randomElement()
}

// this function is not really worried about thread safety because we know just going to get this returned new data back
// in the actor, but we don't want to get the data await -> add nonisolated
nonisolated func getSaveData() -> String {
  return "New Data"
}
}

// MARK: - HOME
struct HomeView: View {

let manager = MyActorDataManager.instance
@State private var text: String = ""
let timer = Timer.publish(every: 0.1, tolerance: nil, on: .main, in: .common, options: nil).autoconnect()

var body: some View {
ZStack {
  Color.gray.opacity(0.8).ignoresSafeArea()
  Text(text)
    .font(.headline)
} //: ZSTACK
.onAppear(perform: {
  let newString = manager.getSaveData()
  let newString2 = manager.myRandomText
  Task {
    await manager.data
  }
})
.onReceive(timer) { _ in
  Task {
    if let data = await manager.getRandomData() {
      await MainActor.run(body: {
        self.text = data
      })
    }
  }//: TASK
}
}
}
```

### 4.globalActor

Global Actor is basically actors that you can access the actor from outside of the actor so if you want to put other functions other classes, structs onto that actor you can do that using a global actor

```swift
// MARK: - Global Actor
@globalActor struct MyFirstGlobalActor {
static var shared = MyNewDatamanager()
}


// MARK: - DATAMANAGER
actor MyNewDatamanager {

func getDataFromDB() -> [String] {
return ["One", "Two", "Three", "Four"]
}
}

// MARK: - VIEWMODEL
class GlobalActorBootCampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var dataArray: [String] = []
let manager = MyFirstGlobalActor.shared
// MARK: -  INIT
// MARK: -  FUNCTION
@MyFirstGlobalActor
func getData()  {

// Heavy Complex Methods
// synchronization is performed through the shared actor instance to ensure
// mutually-exclusive access to the declaration.
  Task {
    let data = await manager.getDataFromDB()
    self.dataArray = data
  }
}
}

// MARK: - VIEW
struct GlobalActorBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = GlobalActorBootCampViewModel()
// MARK: -  BODY
var body: some View {
ScrollView {
  VStack {
    ForEach(vm.dataArray, id: \.self) {
      Text($0)
        .font(.headline)
    }
  } //: VSTACK
} //: SCROLL
.task {
  await vm.getData()
}
}
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

SwiftUI Thinking - [https://youtu.be/UUdi137FySk](https://youtu.be/UUdi137FySk)
