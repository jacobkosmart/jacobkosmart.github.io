---
title: "Async, Await"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## Async and Await

For the example to do delay task compare with `DispatchQueue.main.asyncAfter` and `Async & Await`

`DispatchQueue.main.asyncAfter`

```swift
// MARK: -  VIEWMODEL
class AsyncAwaitBootcampViewModel: ObservableObject {
	// MARK: -  PROPERTY
	@Published var dataArray: [String] = []
	// MARK: -  INIT
	// MARK: -  FUNCTION
	func addTilte1() {
		// main thread
		DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
			self.dataArray.append("Title1: \(Thread.current)")
		}
	}

	func addTilte2() {
		// global thread
		DispatchQueue.global().asyncAfter(deadline: .now() + 2.0) {
			let title = "Title2: \(Thread.current)"
			DispatchQueue.main.async {
				self.dataArray.append(title)

				// main thread
				let title3 = "Title3: \(Thread.current)"
				self.dataArray.append(title3)
			}
		}
	}

// MARK: -  VIEW
struct AsyncAwaitBootCamp: View {
	@StateObject private var vm = AsyncAwaitBootcampViewModel()
	// MARK: -  PROPERTY
	// MARK: -  BODY
	var body: some View {
		List {
			ForEach(vm.dataArray, id: \.self) {
				Text($0)
			}
		} //: LIST
		.onAppear {
			vm.addTilte1()
			vm.addTilte2()
		}
	}
}

```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/166626670-38907390-affa-457a-b3db-41c74db78c62.gif">

`Async & Await`

```swift
import SwiftUI

// MARK: -  VIEWMODEL
class AsyncAwaitBootcampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var dataArray: [String] = []
// MARK: -  INIT
// MARK: -  FUNCTION
func addAuthor1() async {
let author1 = "Autor1: \(Thread.current)"
self.dataArray.append(author1)

try? await Task.sleep(nanoseconds: 2_000_000_000) // delay 2 secs like DispachQueue.main.asyncAfter(dealine: .now() + 2.0)
// try? await doSomething() // all processing tasks on main thread

// author2 : global thread
let author2 = "Autor2: \(Thread.current)"
await MainActor.run(body: {
  self.dataArray.append(author2)

  // author3: main thread
  let author3 = "Autor3: \(Thread.current)"
  self.dataArray.append(author3)
})
}

func addSomething() async {
try? await Task.sleep(nanoseconds:  2_000_000_000)
let something1 = "Something1: \(Thread.current)"
await MainActor.run(body: {
  self.dataArray.append(something1)

  let something2 = "Something2: \(Thread.current)"
  self.dataArray.append(something2)
})
}
}

// MARK: -  VIEW
struct AsyncAwaitBootCamp: View {
@StateObject private var vm = AsyncAwaitBootcampViewModel()
// MARK: -  PROPERTY
// MARK: -  BODY
var body: some View {
List {
  ForEach(vm.dataArray, id: \.self) {
    Text($0)
  }
} //: LIST
.onAppear {
  Task {
    await vm.addAuthor1()
    await vm.addSomething()

    let finalText = "FINAL TEXT: \(Thread.current)"
    vm.dataArray.append(finalText)
  }
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/166626813-3820ddd9-d27c-4de6-8d3b-b4ed467e4386.gif">

### Download image with Async and Await

Compare with different asynchronous way such as @escaping, combine and Async & Await when it comes from downloading image

- Case 1. Download image with @escaping

```swift
import SwiftUI

// MARK: -  SERVICE
class DownloadImageAsyncImageLoader {
let url = URL(string: "https://picsum.photos/200")!

func handleResponse(data: Data?, response: URLResponse?) -> UIImage? {
guard
  let data = data,
  let image = UIImage(data: data),
  let response = response as? HTTPURLResponse,
  response.statusCode >= 200 && response.statusCode < 300 else {
    return nil
  }
return image
}

func downloadWithEscaping(completionHandler: @escaping (_ image: UIImage?, _ error: Error?) -> ()) {
URLSession.shared.dataTask(with: url) { [weak self] data, response, error in
  let image = self?.handleResponse(data: data, response: response)
  completionHandler(image, error)
}
.resume()
}
}

// MARK: -  VIEWMODEL
class DownloadImageAsyncViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
let loader = DownloadImageAsyncImageLoader()
// MARK: -  INIT
// MARK: -  FUNCTION
func fetchImage() {
loader.downloadWithEscaping { [weak self] image, error in
  DispatchQueue.main.async {
    self?.image = image
  }
}
}
}

// MARK: -  VIEW
struct DownloadImageAsync: View {
// MARK: -  PROPERTY
@StateObject private var vm = DownloadImageAsyncViewModel()
// MARK: -  BODY
var body: some View {
ZStack {
  if let image = vm.image {
    Image(uiImage: image)
      .resizable()
      .scaledToFit()
      .frame(width: 250, height: 250)
  }
} //: ZSTACK
.onAppear {
  vm.fetchImage()
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/165654782-21df8047-6f96-46cb-973a-fecd7baaf234.png">

- Case 2. Download image with Combine

```swift
import SwiftUI
import Combine

// MARK: -  SERVICE
class DownloadImageAsyncImageLoader {
let url = URL(string: "https://picsum.photos/200")!

func handleResponse(data: Data?, response: URLResponse?) -> UIImage? {
guard
  let data = data,
  let image = UIImage(data: data),
  let response = response as? HTTPURLResponse,
  response.statusCode >= 200 && response.statusCode < 300 else {
    return nil
  }
return image
}


func downloadWithCombine() -> AnyPublisher<UIImage?, Error> {
URLSession.shared.dataTaskPublisher(for: url)
  .map(handleResponse)
  .mapError({ $0 })
  .eraseToAnyPublisher()
}
}

// MARK: -  VIEWMODEL
class DownloadImageAsyncViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
let loader = DownloadImageAsyncImageLoader()
var cancellables = Set<AnyCancellable>()
// MARK: -  INIT
// MARK: -  FUNCTION
func fetchImage() {
  loader.downloadWithCombine()
    .receive(on: DispatchQueue.main)
    .sink { _ in

    } receiveValue: { [weak self] image in
        self?.image = image
    }
    .store(in: &cancellables)
}
}
```

- Case 3. Download image with Async and Await

```swift
// MARK: -  SERVICE
class DownloadImageAsyncImageLoader {
let url = URL(string: "https://picsum.photos/200")!

func handleResponse(data: Data?, response: URLResponse?) -> UIImage? {
guard
  let data = data,
  let image = UIImage(data: data),
  let response = response as? HTTPURLResponse,
  response.statusCode >= 200 && response.statusCode < 300 else {
    return nil
  }
return image
}
func downloadWithAsync() async throws -> UIImage? {
  do {
    let (data, response) = try await URLSession.shared.data(from: url, delegate: nil)
    return handleResponse(data: data, response: response)
  } catch  {
    throw error
  }
}
}

// MARK: -  VIEWMODEL
class DownloadImageAsyncViewModel: ObservableObject {
	// MARK: -  PROPERTY
	@Published var image: UIImage? = nil
	let loader = DownloadImageAsyncImageLoader()
	var cancellables = Set<AnyCancellable>()
	// MARK: -  INIT
	// MARK: -  FUNCTION
	func fetchImage() async {
		let image = try? await loader.downloadWithAsync()
		await MainActor.run {
			self.image = image
		}
	}
}

// MARK: -  VIEW
struct DownloadImageAsync: View {
// MARK: -  PROPERTY
@StateObject private var vm = DownloadImageAsyncViewModel()
// MARK: -  BODY
var body: some View {
ZStack {
if let image = vm.image {
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(width: 250, height: 250)
}
} //: ZSTACK
.onAppear {
Task {
  await vm.fetchImage()
}
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/165670469-98b0dcb7-05c8-41a1-a21e-de96a07b2499.png">
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

SwiftUI Thinking - [https://youtu.be/-5kIzkBqAzc](https://youtu.be/-5kIzkBqAzc)
