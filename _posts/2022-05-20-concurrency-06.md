---
title: "Continuation"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## Continuation

When you are working with SDK and API that are not updated for swift concurrency you can use a continuation to convert them to be usable with your asynchrony swift concurrency code

- Simple async code with fetched single image from API by using async await and URLSession.shared.data

```swift
import SwiftUI

// MARK: - SERVICE
class CheckedContinuationBootCampNetworkManager {
func getData(url: URL) async throws -> Data {
do {
  let (data, _) = try await URLSession.shared.data(from: url, delegate: nil)
  return data
} catch  {
  throw error
}
}
}


// MARK: - VIEWMODEL
class CheckedContinuationBootCampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
let manager = CheckedContinuationBootCampNetworkManager()
// MARK: -  INIT
// MARK: -  FUNCTION
func getImage() async {
guard let url = URL(string: "https://picsum.photos/300") else { return }

do {
  let data = try await manager.getData(url: url)

  if let image = UIImage(data: data) {
    await MainActor.run(body: {
      self.image = image
    })
  }
} catch {
  print(error)
}
}
}

// MARK: - VIEW
struct CheckedContinuationBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = CheckedContinuationBootCampViewModel()
// MARK: -  BODY
var body: some View {
  ZStack {
    if let image = vm.image {
      Image(uiImage: image)
        .resizable()
        .scaledToFit()
        .frame(width: 200, height: 200)
    }
  } //: ZSTACK
  .task {
    await vm.getImage()
  }
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/169422540-a5f8a0d5-9ac5-4f12-bea6-92801cda7c26.png">

But unfortunately a lof of SDKs and APIs are not yet updated for async and await some of them maybe will be updated in the future. You want to be able to convert their SDK form as it is to async await

So, use completion handler oen of the original ways that we did asynchronous code in swift and using escaping closures

```swift
class CheckedContinuationBootCampNetworkManager {

func getData2(url: URL) async throws -> Data {
return try await withCheckedThrowingContinuation { continuation in
URLSession.shared.dataTask(with: url) { data, response, error in
  // withCheckedThrowingContinuation in we get data and we resume it once perfect
  if let data = data {
    continuation.resume(returning: data)
  } else if let error = error {
    continuation.resume(throwing: error)
  } else {
    continuation.resume(throwing: URLError(.badURL))
  }
  // need to resume it exactly once -> will be crashed APP
  // continuation.resume(throwing: URLError(.badURL))
}
.resume()
}
}
}


// MARK: - VIEWMODEL
class CheckedContinuationBootCampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
let manager = CheckedContinuationBootCampNetworkManager()
// MARK: -  INIT
// MARK: -  FUNCTION
func getImage() async {
  guard let url = URL(string: "https://picsum.photos/300") else { return }

  do {
    let data = try await manager.getData2(url: url)

    if let image = UIImage(data: data) {
      await MainActor.run(body: {
        self.image = image
      })
    }
  } catch {
    print(error)
  }
}
}

```

```swift
// MARK: - SERVICE
class CheckedContinuationBootCampNetworkManager {
func getHeartImageFromDatabase(completionHandler: @escaping (_ image: UIImage) -> ()) {
DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
  completionHandler(UIImage(systemName: "heart.fill")!)
}
}

func getHeartImageFromDatabase2() async -> UIImage {
await withCheckedContinuation { continuation in
  getHeartImageFromDatabase { image in
    continuation.resume(returning: image)
  }
}
}
}


// MARK: - VIEWMODEL
class CheckedContinuationBootCampViewModel: ObservableObject {
// MARK: -  PROPERTY
@Published var image: UIImage? = nil
let manager = CheckedContinuationBootCampNetworkManager()
// MARK: -  INIT
// MARK: -  FUNCTION

func getHeartImage() async {
manager.getHeartImageFromDatabase { [weak self ] image in
  self?.image = image
}
}

func getHeartImage2() async {
self.image = await manager.getHeartImageFromDatabase2()
}
}

// MARK: - VIEW
struct CheckedContinuationBootCamp: View {
// MARK: -  PROPERTY
@StateObject private var vm = CheckedContinuationBootCampViewModel()
// MARK: -  BODY
var body: some View {
ZStack {
  if let image = vm.image {
    Image(uiImage: image)
      .resizable()
      .scaledToFit()
      .frame(width: 200, height: 200)
  }
} //: ZSTACK
.task {
  // await vm.getImage()
  // await vm.getHeartImage()
  await vm.getHeartImage2()
}
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/169425825-8de6f384-22c8-4984-ac3f-70866c061c13.png">

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

SwiftUI Thinking - [https://youtu.be/Tw_WLMIfEPQ](https://youtu.be/Tw_WLMIfEPQ)
