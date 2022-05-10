---
title: "Async Let"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## Async Let

Async Let can us perform multiple asynchronous methods at the same time. When you write the await keyword and have a bunch of method on after another we are waiting for each method to finish before performing the next one.

Async Let performing the next one a singlet is actually letting us perform multiple methods at the same time and then wait for the result of all of those methods together

- The example of multiple fetch images by using async & await

```swift
struct AsyncLetBootCamp: View {
// MARK: -  PROPERTY
@State private var images: [UIImage] = []
let columns = [GridItem(.flexible()), GridItem(.flexible())]
let url = URL(string: "https://picsum.photos/300")!
// MARK: -  BODY
var body: some View {
NavigationView {
ScrollView {
LazyVGrid(columns: columns) {
  ForEach(images, id: \.self) { image in
    Image(uiImage: image)
      .resizable()
      .scaledToFit()
      .frame(height: 150)
  } //: LOOP
} //: GRID
} //: SCROLL
.navigationTitle("Async Let Practice")
.onAppear {
Task {
  do {
    let image1 = try await fetchImage()
    self.images.append(image1)

    let image2 = try await fetchImage()
    self.images.append(image2)


  } catch  {

  }
}//: TASK

Task {
  do {
    let image3 = try await fetchImage()
    self.images.append(image3)

    let image4 = try await fetchImage()
    self.images.append(image4)
  } catch  {

  }
}//: TASK
}
} //: NAVIGATION
}

// MARK: -  FUNCTION
func fetchImage() async throws -> UIImage {
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

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/167584829-06402c4d-d818-4a89-9aab-16c35780f3e1.gif">

This is bulking up the code it doesn't seem very efficient and as you probably guessed there's a much better way to do

- The example of multiple fetch images by using async let

This is to create an async let like creating a constant except it's an asynchronous constant

```swift
struct AsyncLetBootCamp: View {
// MARK: -  PROPERTY
@State private var images: [UIImage] = []
let columns = [GridItem(.flexible()), GridItem(.flexible())]
let url = URL(string: "https://picsum.photos/300")!
// MARK: -  BODY
var body: some View {
NavigationView {
ScrollView {
LazyVGrid(columns: columns) {
ForEach(images, id: \.self) { image in
  Image(uiImage: image)
    .resizable()
    .scaledToFit()
    .frame(height: 150)
} //: LOOP
} //: GRID
} //: SCROLL
.navigationTitle("Async Let Practice")
.onAppear {
Task {
do {

  // No await keyword
  async let fetchImage1 = fetchImage()
  async let fetchImage2 = fetchImage()
  async let fetchImage3 = fetchImage()
  async let fetchImage4 = fetchImage()

  // one await keyword
  let (image1, image2, image3, image4) = await (try fetchImage1, try fetchImage2, try fetchImage3, try fetchImage4)

  self.images.append(contentsOf: [image1, image2, image3, image4])

  // let image1 = try await fetchImage()
  // self.images.append(image1)
  //
  // let image2 = try await fetchImage()
  // self.images.append(image2)
  //
  // let image3 = try await fetchImage()
  // self.images.append(image3)
  //
  // let image4 = try await fetchImage()
  // self.images.append(image4)
} catch  {

}
}//: TASK
}
} //: NAVIGATION
}

// MARK: -  FUNCTION
func fetchImage() async throws -> UIImage {
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

So, async let is great for executing multiple asynchronous functions at once and then await the result of all of those functions at the same time so we can fetch a bunch of different things and then wait for all of the results to come back we update our screen

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

SwiftUI Thinking - [https://youtu.be/1OmJJwVF7uQ](https://youtu.be/1OmJJwVF7uQ)
