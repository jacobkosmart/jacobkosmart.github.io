---
title: "Struct vs Class vs Actor"
excerpt: "Concurrency"

categories:
  - concurrency

toc: true
toc_sticky: true
---

## 06.Struct vs Class vs Actor

### Compare with Struct and Class

To Compare them, creating the same object using a struct and a class dive into the differences

- Struct Object Code

When we create struct don't actually have to create an init

```swift
struct StructClassActorBootCamp: View {
// MARK: -  PROPERTY

// MARK: -  BODY
var body: some View {
Text("Hello, World!")
  .onAppear {
    runTest()
  }
}
}

// MARK: -  PREVIEW
struct StructClassActorBootCamp_Previews: PreviewProvider {
static var previews: some View {
StructClassActorBootCamp()
}
}

struct MyStruct {
var title: String
}

// MARK: - EXTENSTION
extension StructClassActorBootCamp {
private func runTest() {
print("Test Started")
structTest1()
}

private func structTest1() {
let objectA = MyStruct(title: "Starting title!")
print("ObjectA: ", objectA.title)

var objectB = objectA
print("ObjectB: ", objectB.title)

objectB.title = "Second title!"
print("ObjectB title changed.")

print("ObjectA: ", objectA.title)
print("ObjectB: ", objectB.title)
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/169478607-275acbd4-9b14-4e40-a242-e8aaa02a6d2d.png">

You will notice that when you change the title of objectB did not update, only object b's title did update because this struct is a value type and when you pass a value type. ObjectB is actually totally distinct and separate from ObjectA because it passed the values and not a reference

- Class Object Code

Class we do have to give them an actual explicit initializer

```swift
struct StructClassActorBootCamp: View {
// MARK: -  PROPERTY

// MARK: -  BODY
var body: some View {
  Text("Hello, World!")
    .onAppear {
      runTest()
    }
}
}

// MARK: -  PREVIEW
struct StructClassActorBootCamp_Previews: PreviewProvider {
static var previews: some View {
  StructClassActorBootCamp()
}
}

struct MyStruct {
var title: String
}

class MyClass {
var title: String

init(title: String) {
  self.title = title
}
}

// MARK: - EXTENSTION
extension StructClassActorBootCamp {
private func runTest() {
  print("Struct Test")
  structTest1()
  printDivider()
  print("Class Test")
  classTest1()
}

private func printDivider() {
  print("""

  -----------------------------
  """)
}

private func structTest1() {
  let objectA = MyStruct(title: "Starting title!")
  print("ObjectA: ", objectA.title)

  print("Pass the VALUES of objectA to objectB")
  var objectB = objectA
  print("ObjectB: ", objectB.title)

  objectB.title = "Second title!"
  print("ObjectB title changed.")

  print("ObjectA: ", objectA.title)
  print("ObjectB: ", objectB.title)
}

private func classTest1() {
  let objectA = MyClass(title: "Starting Title")
  print("ObjectA: ", objectA.title)

  // When we are changing the title here not chaning the object itself. We are changing the title inside the object
  print("Pass the REFERENCE of objectA to objectB")
  let objectB = objectA
  print("ObjectB: ", objectB.title)

  objectB.title = "Second title!"
  print("ObjectB title changed.")

  print("ObjectA: ", objectA.title)
  print("ObjectB: ", objectB.title)
}
}

```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/169482703-bab2e837-945c-45e0-831f-83bebe29c1d2.png">

You can notice the big difference is that both objectA and B's title changed. The struct is passing the VALUE from objectA to objectB Otherwise, the class is passing the REFERENCE from them. Here, main point is Class objectA,B are both actually pointing to the same object in memory, so that underlying reference is connected to anywhere that is pointing to that reference so both object

<img  alt="스크린샷" src="https://blog.onewayfirst.com/img/2019-03/reference-vs-value.gif">

> https://blog.onewayfirst.com/ios/posts/2019-03-19-class-vs-struct/

- Value type creates the copy (a new instance) and stores the data (on Stack Memory). Modifying the data (or the instance) does not affect the original.

- Reference type creates the shared instance that points the memory location of the data (on Heap Memory). Modifying the data affects the original.

- Mutating Struct example code

```swift
// mutating anywhere but, it is mutating it when you change the title
struct MyStruct {
var title: String
}

// Immutable struct
struct CustomStruct {
let title: String

func updateTitle(newTitle: String) -> CustomStruct {
  CustomStruct(title: newTitle)
}
}

// MutatingStruct you have to add the workd mutaing and want to restuct maybe the way this struct gets updated
struct MutatingStruct {
private(set) var title: String

init(title: String) {
  self.title = title
}

mutating func updaterTile(newTilte: String) {
  title = newTilte
}
}


extension StructClassActorBootCamp {

private func structTest2() {
  print("structTest2")

  var struct1 = MyStruct(title: "Title1")
  print("Struct1: ", struct1.title)
  struct1.title = "Title2"
  print("Struct1: ", struct1.title)

  var struct2 = CustomStruct(title: "Title1")
  print("Struct2: ", struct2.title)
  struct2 = CustomStruct(title: "Title2")
  print("Struct2: ", struct2.title)

  var struct3 = CustomStruct(title: "Title1")
  print("Struct3: ", struct3.title)
  struct3 = struct3.updateTitle(newTitle: "Title2")
  print("Struct3: ", struct3.title)

  var struct4 = MutatingStruct(title: "Title1")
  print("Struct4: ", struct4.title)
  struct4.updaterTile(newTilte: "Title2")
  print("Struct4: ", struct4.title)
}
}
```

<img height="350" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/169726749-9d61ed22-a1c8-4cf1-a10c-140962ded480.png">

- Class example code

The difference of struct and class, in the struct, it has to make this variable because when we mutated the title we were chaining the object we were literally mutating this object tha actually changed. Mutating means we are going to take the current values we're going to change them we're going to create a new object with new values

```swift
class MyClass {
var title: String

init(title: String) {
  self.title = title
}

func updaterTile(newTilte: String) {
  title = newTilte
}
}
extension StructClassActorBootCamp {

private func classTest2() {
  print("classTest2")

  let class1 = MyClass(title: "Title1")
  print("Class1: ", class1.title)
  class1.title = "Title2"
  print("Class1: ", class1.title)

  let class2 = MyClass(title: "Title1")
  print("Class2: ", class2.title)
  class2.updaterTile(newTilte: "Title2")
  print("Class2: ", class2.title)
}
}

```

<img width="983" alt="image" src="https://user-images.githubusercontent.com/28912774/169921780-1ab5ad14-2bcf-4b1e-9cab-cc2ab9a7168e.png">

> https://stackoverflow.com/questions/24217586/structure-vs-class-in-swift-language

![image](https://user-images.githubusercontent.com/28912774/169921973-bd2f8e10-4ac0-4df6-95f2-bcfef48c0386.png)

> https://medium.com/@vinayakkini/swift-basics-struct-vs-class-31b44ade28ae

<img width="863" alt="image" src="https://user-images.githubusercontent.com/28912774/169927133-edd579f0-6666-4420-80fa-c4e817891501.png">

> https://stackoverflow.com/questions/27441456/swift-stack-and-heap-understanding

<img width="905" alt="image" src="https://user-images.githubusercontent.com/28912774/169927792-c4f35a4f-5fe4-4e50-a326-fede8820619a.png">

> https://stackoverflow.com/questions/24232799/why-choose-struct-over-class/24232845

- What is ARC in Swift and how is it used (Automatic Reference Counting)
  in Object-C developers used to have to actually keep track of the count in Swift this is mostly done automatically for us. ARC is only for objects that are in the heap such as classes and actors

> Value types which store on stack memory such as structures and enumerating are just copying the data to data. Therefore it is not affected by ARC

> ARC is to track and manage the app's memory usage. Arc automatically frees up the memory used by class instances when those instances are no longer needed.

> Every instance of a class has a property called reference count so if reference count is greater than 0, the instance is still kept in memory otherwise, it will be removed from the memory.

- Weak and Strong reference

When you create a strong reference without using weak self, you are telling the compiler that we absolutely need self this class we need it to to still be in memory when we come back the asynchronous code if the user moves away to another screen in the app and the system tries to de-allocate this class it will then understand because there is still a reference so, Strong reference class is not going to de-allocate

What is weak self? This is making class as optional that if the class wants to de-allocate that's totally fine because if when the code comes back the asynchronous code if the class is still in memory we'll handle the response but if it is de-allocated for whatever reason

If you keep that strong reference you are keeping at least on reference count to that object in memory and so that object in memory being the class is never going to get de-allocated until all of the references are gone

So, if we make it a weak reference it's then going to make this reference an optional this reference being weak will not count towards the reference count when it is trying to figure our if this instance needs to be kept in memory still.

![image](https://user-images.githubusercontent.com/28912774/169934937-3ae12113-d50c-4612-b1a7-81f7ac771982.png)

![image](https://user-images.githubusercontent.com/28912774/169934963-8a54ed08-cc45-4f91-81ba-83fa820f17b3.png)

> https://medium.com/doyeona/automatic-reference-counting-in-swift-arc-weak-strong-unowned-925f802c1b99

### Class vs Actor

Actors are more or less the same thing as classes except they are thread safe

![image](https://user-images.githubusercontent.com/28912774/170898400-c9ed1b96-33cf-44b7-a973-76a5238be219.png)

> https://www.backblaze.com/blog/whats-the-diff-programs-processes-and-threads/

In the Multi Thread, it might access an object in the heap and then this thread might also access the same object in the heap. Now the heap is going to synchronize them and that's basically because there is noting by default that's going to stop two different threads from accessing the same object in memory.

Now both classes and actors are stored in the heap cause they are more or less the same thing the only big difference is that the actors are going to be thread safe

In the class if two different threads are accessing that class they can function at the exact same time. But in an actor if two threads are accessing the same actor one of them is probably going to have to await that other thread to finish its processes before the second thread can get into that actor

Actors require to be in an asynchronous environment and when you want to access anything inside the actor you need to await on it. If they are accessing at the same time you might run into a situation where one thread might have to literally await for the other thread to finish

```swift
actor MyActor {
	var title: String

	init(title: String) {
		self.title = title
	}

	func updaterTile(newTilte: String) {
		title = newTilte
	}
}

private func actorTest1() {
Task {
  let objectA = MyActor(title: "Starting Title")
  await print("ObjectA: ", objectA.title)

  print("Pass the REFERENCE of objectA to objectB")
  let objectB = objectA
  await print("ObjectB: ", objectB.title)

  // actor is now thread safe so we can't chnage the value from outside the actor itself
  // objectB.title = "Second title!"
  await objectB.updaterTile(newTilte: "Second title!")
  print("ObjectB title changed.")

  await print("ObjectA: ", objectA.title)
  await print("ObjectB: ", objectB.title)
}
}

```

<img width="497" alt="image" src="https://user-images.githubusercontent.com/28912774/170900513-3674200e-a716-4c54-8362-1c299336422b.png">

### Warp up

1. Value vs Reference type

- Value Types : Struct, Enum, String Int, etc

  - Stored in the stack

  - Faster

  - Thread safe

  - When you assign or pass value type a new copy of data is created.

- Reference Types: Class, Function, Actor

  - Stored in the Heap

  - Slower, but synchronized

  - Not thread safe (by default)

  - When you assign or pass reference type a new reference to original instance will be created (pointer)

2. Stack vs Heap

- Stack

  - Stored value types

  - Variables allocated on the stack are stored directly to the memory, and access to this memory is very fast

  - Each thread has it's own stack

- Heap

  - Stored reference types

  - Shared across threads

3. Struct vs Class vs Actor

- Struct

  - Based on Values

  - Can be mutated

  - Stored in the Stack!

- Class

  - Based on Reference (Instance)

  - Stored in the Heap!

  - Inherit from other classes

- Actor

  - Same as Class, but thread safe!

Structs: Data Models, View
Classes: ViewModels
Actors: Shared 'Manager' and 'Data Store'

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

SwiftUI Thinking - [https://youtu.be/-JLenSTKEcA](https://youtu.be/-JLenSTKEcA)
