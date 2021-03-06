## Combine: Asynchronous Programming with Swift ์ฑ ์ ๋ฆฌ

## ๐ท Chapter 1. Hello, Combine!

### ๋น๋๊ธฐ ํ๋ก๊ทธ๋๋ฐ (Asynchronous programming)

1. ์ค๋ ๋ 1๊ฐ๊ฐ ์ฝ๋ ์คํ: ๊ฒฐ๊ณผ๋ก "Tom Harding"์ด ์ถ๋ ฅ๋จ์ ๋ณด์ฅ ๊ฐ๋ฅ

```swift
begin
  var name = "Tom"
  print(name)
  name += " Harding"
  print(name)
end
```

2. ์ค๋ ๋ 2๊ฐ๊ฐ ๋น๋๊ธฐ์ ์ผ๋ก ์ฝ๋๋ฅผ ์คํ ์ฝ๋๋ฅผ ์คํํ  ๋๋ง๋ค ๊ฒฐ๊ณผ๊ฐ ๋ฌ๋ผ์ง๊ธฐ๋ ํจ. Thread 2 ๊ฐ ๋ผ์ด๋ค๋ฉด์ ๊ฒฐ๊ณผ๋ฌผ์ "Billy Bob Harding"์ด ๋์ด๋ฒ๋ฆผ...

```swift
--- Thread 1 ---
begin
  var name = "Tom"
  print(name)

--- Thread 2 ---
name = "Billy Bob"

--- Thread 1 ---
  name += " Harding"
  print(name)
end
```

### Combine ์ฅ์ 

- ๋น์ ์ ์ฝ๋์ ํตํฉํ๊ธฐ ์ฌ์. ์ ํ์ Combine API๋ฅผ Foundation Framework์ ๊ธด๋ฐํ๊ฒ ํตํฉํ๊ณ  ์์. (์ด๊ฒ RxSwift ๋ณด๋ค ์ข์ ์ ์ด ์๋๊น ์ถ์. RxSwift๋ ์ธ๋ถ ๋ผ์ด๋ธ๋ฌ๋ฆฌ. ์ฝ์ฝ์ ํ๋ ์์ํฌ์ ํตํฉํ๊ธฐ ์ํด์ ๋ง์ ๋ธ๋ ฅ์ด ํ์.)

- SwiftUI์ ํจ๊ป ์ฌ์ฉํ๊ธฐ๋ ์ข์.

- API์ ๋ํ ํ์คํธ๋ ์๋์ด ์์ต๋๋ค.

- ๋ฐ์ดํฐ ๋ชจ๋ธ ๋ถํฐ ๋คํธ์ํฌ ๋ ์ด์ด ๊ทธ๋ฆฌ๊ณ  UI๊น์ง ๋ชจ๋ Combine์ ์ฌ์ฉ ๊ฐ๋ฅ

### Combine basics

#### Publisher

- Publisher๋ value๋ค์ ๋ณด๋ด๋(emit) ์ญํ .

**Publisher๊ฐ emit ํ  ์ ์๋ ์ด๋ฒคํธ ์ข๋ฅ**

1. Output

2. Completion: successful completion

3. Failure: completion with an error

Publisher๋ Output์ ์๋ณด๋ด๊ณ  ์๊ฑฐ๋ ์ฌ๋ฌ๋ฒ ๋ณด๋ผ ์ ์์ผ๋ฉฐ,
Completion ์ด๋ Failure๋ฅผ ํ๋ฒ ๋ณด๋ด๊ณ  ๋๋ฉด ๋ ์ด์์ ์ด๋ฒคํธ๋ ๋ณด๋ผ ์ ์์ต๋๋ค.

**ํน์ง**

- 3๊ฐ์ง ์ด๋ฒคํธ๋ก ๋ชจ๋  ์ข๋ฅ์ ๋์  ๋ฐ์ดํฐ๋ฅผ ํํ ๊ฐ๋ฅ

- delegate๋ฅผ ์ถ๊ฐํ๊ฑฐ๋ completion callback์ ์ฃผ์ ํ์์์

- Publisher๋ ์๋ฌ ํธ๋ค๋ง์ด ๋ด์ฅ

- Publisher๋ 2๊ฐ์ ์ ๋๋ฆญ์ ๊ธฐ๋ฐ์ผ๋ก ๊ตฌ์ฑ

  - Publisher.Ouput: output value.

  - Publisher.Failure: ์๋ฌ ์ ๋ฌ. ์๋ฌ๊ฐ ๋ฐ์ํ  ์ผ์ด ์์ผ๋ฉด, Never ๋ผ๋ ํ์์ผ๋ก ์ ์ํ๋ฉด ๋จ

#### Operators

**์ ์**

Operator๋ Publisher ํ๋กํ ์ฝ์ ์ ์ธ๋์ด ์์.
๊ฐ๊ฑฐ๋ ์๋ก์ด Publisher๋ฅผ ๋ฐํํ๋ ๋ฉ์๋.
Operator๋ค์ ์ฒด์ด๋ํด์ ์ฌ์ฉํ  ์ ์๊ธฐ ๋๋ฌธ์ ์ ์ฉํจ.

**์ฅ์ **

- Operator๋ค์ ๋๋ฆฝ์ ์ด๊ณ  ์กฐํฉ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์, ๋ณต์กํ ๋ก์ง์ ๊ตฌํํ๋๋ฐ ์กฐํฉ(Combine) ๊ฐ๋ฅ.

- ํญ์ Input & Ouput(Upstream & Downstream)์ ๊ฐ์ง๊ธฐ ๋๋ฌธ์ shared state๋ฅผ ํผํ  ์ ์์. (๋์์ฑ ์ด์)

- ๋น๋๊ธฐ ์ฝ๋๊ฐ ๋ผ์ด๋ค์ด ๋น์ ์ ๋ฐ์ดํฐ๋ฅผ ์ค๊ฐ์ ๋ณ๊ฒฝํ  ์ผ์ด ์์

#### Subscribers

**์ ์**

๋ชจ๋  ๊ตฌ๋์ subscriber๋ก ๋๋จ.
์ ๋ฌ๋ฐ์ value๋ completion event๋ก ์์์ ์ํ.

**2๊ฐ์ ๋ด์ฅ๋ subscriber**

- sink: output value์ completion์ ๋ฐ์ ์ ์๋ ํด๋ก์ ๋ฅผ ์ ๊ณตํ  ์ ์์

- assign: output์ key path๋ฅผ ํตํด data model์ property ๋ UI control์ ๋ฐ๋ก ๋ฐ์ธ๋ฉ ํ  ์ ์์

#### Subscriptions

**์ค์**

subscription์ ๋์ subscriber๋ฅผ ์ถ๊ฐ -> ์ฒด์ด๋์ ๋งจ ์์ ์๋ publisher๋ฅผ ํ์ฑํ. output์ ์์ ํด์ค subscriber๊ฐ ์์ผ๋ฉด publisher๋ ์ด๋ค value๋ ์ ๋ฌํ์ง ์์

**์ฅ์ **

- Subscription์ ๋น๋๊ธฐ ์ด๋ฒคํธ๋ค์ ์ฒด์ธ์ ์ปค์คํ ์ฝ๋์ ์๋ฌ ํธ๋ค๋ง๊ณผ ํจ๊ป ํ๋ฐฉ์ ์ ์ธ ๊ฐ๋ฅ.

- Full-Combine ์ด๋ฉด, ์ฑ ์ ์ฒด์ ๋ก์ง์ subscription ๋ค๋ก ํํ ๊ฐ๋ฅ.

- Subscription์ด ํ๋ฒ ์ ์ธ๋๊ณ  ๋๋ฉด ์ฝ๋ฐฑ์ ํธ์ถํ  ํ์ ์์ด ์์คํ์ด ๋ค ์์์ ํด์ค.

#### ๋ฉ๋ชจ๋ฆฌ ๊ด๋ฆฌ

Cacncellable ํ๋กํ ์ฝ ์ฌ์ฉํด์ ๋ฉ๋ชจ๋ฆฌ ๊ด๋ฆฌ. Subscriber๋ค์ Cancellable์ ์ค์ํ๊ณ  ์์. ์ค๋ธ์ ํธ๋ฅผ ๋ฉ๋ชจ๋ฆฌ์์ ํด์  -> ๋ชจ๋  subscription์ ์ทจ์ -> ๋ฆฌ์์ค๋ฅผ ๋ฉ๋ชจ๋ฆฌ๋ก๋ถํฐ ํด์ 

**์ฅ์ **

- Subscription์ ์๋ช์ view controller ๊ฐ์ ์ค๋ธ์ ํธ์ bind ๊ฐ๋ฅ.
- ์ ์ ๊ฐ view controller๋ฅผ view stack์์ dismiss -> subscription ์ทจ์ ํด์ค

**์กฐ๊ธ ๋ ์๋ํ**

[AnyCancellable] Collection ํ๋กํผํฐ๋ฅผ ๋ง๋ค์ด์, subscription๋ค์ ์ฌ๊ธฐ์ ๋ด์์ฃผ๊ธฐ.
[AnyCancellable]๊ฐ ๋ฉ๋ชจ๋ฆฌ์์ ํด์ ๋  ๋ ์๋์ ์ผ๋ก cancel ๋๊ณ  release ๋  ๊ฒ ์๋๋ค.

#### ๊ธฐ์กด ์ฝ๋์ ๋นํด Combine์ด ๋ ์ข์ ์ ์?

- ์์คํ ๋ ๋ฒจ์ ํตํฉ๋์ด ์์. ๋ด๋ถ์์ privatet API ์ฐ๋ ๋ฏ

- delegate, closure๋ฅผ ๋ง๋ค ํ์ ์์. ์ค์ ๊ฐ๋ฅ์ฑ ๋ฎ์์ง.

- ์ฌ์ฌ์ฉ์ฑ ์ข์. ๋์ผํ ์ธํฐํ์ด์ค ์ฐ๊ธฐ ๋๋ฌธ.

- operator๋ฅผ ์กฐํฉํ๊ธฐ ์ข์.

- ๋น๋๊ธฐ ์ฝ๋์์๋ ๋น์ฆ๋์ค ๋ก์ง์ ์ง์คํ  ์ ์์.

#### Key points

- ์ปด๋ฐ์ธ์ ๋น๋๊ธฐ ์ด๋ฒคํธ๋ฅผ ์ํ ์ ์ธ์ , ๋ฐ์ํ ํ๋ ์์ํฌ

- ๋น๋๊ธฐ ํ๋ก๊ทธ๋๋ฐ์ ๊ธฐ์กด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๋ ๊ฒ์ด ๋ชฉํ

- ์ฃผ์ 3 ํ์: publisher (์ด๋ฒคํธ ๋ฐํ) -> operator (์ด๋ฒคํธ ์ฒ๋ฆฌ, ์กฐ์) -> subscriber (๊ฒฐ๊ณผ๋ฌผ ์๋น)

## ๐ท Chapter 2. Publishers & Subscribers

### Hello Publisher

```swift
example(of: "Publisher") {
  // 1
  let myNotification = Notification.Name("MyNotification")

  // 2
  let publisher = NotificationCenter.default
    .publisher(for: myNotification, object: nil)

  // 3
  let center = NotificationCenter.default
  // 4
  let observer = center.addObserver(
    forName: myNotification,
    object: nil,
    queue: nil) { notification in
      print("Notification received!")
  }

  // 5
  center.post(name: myNotification, object: nil)
  // 6
  center.removeObserver(observer)
}

```

```swift
โโโ Example of: Publisher โโโ
Notification received!
```

์ด ์์ ๋ ์กฐ๊ธ ๋ง์ง ์๋ ๋ฉด์ด ์๋๋ฐ, ์ด๋ฒคํธ๊ฐ publisher๋ก ๋ถํฐ ๋์จ๊ฒ ์๋๊ธฐ ๋๋ฌธ.
Subscriber๊ฐ ๋ฑ๋ก๋์ด์ผ Publisher๊ฐ ํ์ฑํ ๋จ.

### Hello Subscriber

```swift
example(of: "Subscriber") {
  let myNotification = Notification.Name("MyNotification")

  let publisher = NotificationCenter.default
    .publisher(for: myNotification, object: nil)

  let center = NotificationCenter.default

  // 1
  let subscription = publisher
    .sink { _ in
      print("Notification received from a publisher!")
    }

  // 2
  center.post(name: myNotification, object: nil)
  // 3
  subscription.cancel()
}
```

```swift
โโโ Example of: Subscriber โโโ
Notification received from a publisher!
```

> sink method : https://developer.apple.com/documentation/combine/record/sink(receivevalue:)

- Failure = Never

- Subscriber๋ฅผ ๋ง๋ค๊ณ  backPressure๋ฅผ ๋ฌด์ ํ ๊ฐ์ผ๋ก ์์ฒญ.

```swift
let integers = (0...3)
integers.publisher
    .sink { print("Received \($0)") }

// Prints:
//  Received 0
//  Received 1
//  Received 2
//  Received 3
```

### Hello Cancellable

- subscriber๊ฐ ๋ ์ด์ ๊ฐ์ ๋ฐ์ ํ์ ์์ ๋ cancel() ์ฌ์ฉ

- cancel()์ ์ง์  ํธ์ถํ์ง ์์ผ๋ฉด, denit๋  ๋๊น์ง ๊ตฌ๋๋จ

### Publisher ์ Subscriber ์ ํ๋ฆ

![img1](https://user-images.githubusercontent.com/28912774/160808043-298f3575-c843-4f87-b469-7cd289219dea.png)

1. ๊ตฌ๋ ์์

2. Subscription ๊ฐ์ฒด ์ ๋ฌ

3. request value: Backpressure

4. values ์ฌ๋ฌ๊ฐ ์ ๋ฌ ๊ฐ๋ฅ

5. completion์ ํ๋ฒ๋ง

#### Publisher Protocol

```swift
public protocol Publisher {
  // 1: emitํ  ์ ์๋ value
  associatedtype Output

  // 2: ์์ธ ๋ฐ์ํ  ๊ฒฝ์ฐ ์ฌ์ฉ๋๋ ์๋ฌ.
  // ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์๋๋ค๊ณ  ๋ณด์ฅํ  ์ ์์ผ๋ฉด, `Never` ์ฌ์ฉ
  associatedtype Failure : Error

  // 4: publisher์ subscirber๋ฅผ ๋ถ์ด๊ธฐ ์ํด์ ํธ์ถ ๋จ
  func receive<S>(subscriber: S)
    where S: Subscriber,
    Self.Failure == S.Failure,
    Self.Output == S.Input
}

extension Publisher {
  // 3
  public func subscribe<S>(_ subscriber: S)
    where S : Subscriber,
    Self.Failure == S.Failure,
    Self.Output == S.Input
}
```

#### Subscriber Protocol

```swift
public protocol Subscriber: CustomCombineIdentifierConvertible {
  // 1: receive ํ  ์ ์๋ value
  associatedtype Input

  // 2: receive ํ  ์ ์๋ error
  associatedtype Failure: Error

  // 3
  func receive(subscription: Subscription)

  // 4
  func receive(_ input: Self.Input) -> Subscribers.Demand

  // 5
  func receive(completion: Subscribers.Completion<Self.Failure>)
}
```

## ๐ท Chapter 3. Transforming Operators

**Operators and publishers**

- operator method๋ ์ฌ์ค publisher๋ฅผ return ํจ

- upstream data -> operator ์์ ๊ฐ๊ณต -> downstream์ผ๋ก ์ ๋ฌ

- error handling์ ์ํ operator๊ฐ ์๋๋ฉด, error๋ฅผ downstream์ผ๋ก ํ๋ ค๋ณด๋ด์ค

### Collecting Value

#### Collect()

- ๊ฐ๋ณ value -> array๋ก ๋ณ๊ฒฝ

- value๋ฅผ ๋ฒํผ์ ์๊ณ , completion ๋ array๋ก ๋ง๋ค์ด์ค

![img1](https://user-images.githubusercontent.com/28912774/160809308-2c4186ef-df5e-4638-beb0-2fc1fda8381a.png)

```swift
example(of: "collect") {
  ["A", "B", "C", "D", "E"].publisher
  .collect(2) // stream์ 2๊ฐ์ฉ ๋ฌถ์ array๋ก ๋ง๋ค์ด์ค
  .sink(receiveCompletion: { print($0) },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: collect โโโ
["A", "B"]
["C", "D"]
["E"] // collect(2)๊ฐ ์ฑ์์ง๊ธฐ ์ ์ stream์ด ๋๋์ ["E"]๋ก ์ถ๋ ฅ๋จ
finished
```

collect(): ์ซ์ ์ง์ ํ์ง ์์ collect๋

completion ๋  ๋๊น์ง ๋ฌดํ์  array๋ฅผ ์ฑ์ธ ์ ์๊ธฐ ๋๋ฌธ์ ๋ฉ๋ชจ๋ฆฌ ๊ด๋ฆฌ์ ์ฃผ์

### Mapping Value

#### map(\_:)

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160809880-b2437648-f454-4b2f-a0d4-153f2001dea8.png)

```swift
let formatter = NumberFormatter()
formatter.numberStyle = .spellOut

[123, 4, 56].publisher
.map { formatter.string(for: NSNumber(integerLiteral: $0)) ?? "" }
.sink(receiveValue: { print($0) })
.store(in: &subscriptions)
```

```swift
โโโ Example of: map โโโ
one hundred twenty-three
four
fifty-six
```

#### Map key paths

- keyPath๋ฅผ ํตํด ๋ฐ๋ก ๋งคํํด์ฃผ๋ ๋ฐฉ๋ฒ

- 3๊ฐ๊น์ง ํ๋กํผํฐ ๋งคํ์ด ๊ฐ๋ฅํจ

- .map { ($0.x, $0.y) } ๋ณด๋ค ์กฐ๊ธ ๋ ๊ฐ๊ฒฐํ๋ค๋ ์ ์ ์ฅ์ 

```swift
let publisher = PassthroughSubject<Coordinate, Never>()

publisher
  .map(\.x, \.y)
  .sink(receiveValue: { x, y in
      print("The coordinate at (\(x), \(y)) is in quadrant", quadrantOf(x: x, y: y))
  })
  .store(in: &subscriptions)

publisher.send(Coordinate(x: 10, y: -8))
publisher.send(Coordinate(x: 0, y: 5))
```

```swift
The coordinate at (10, -8) is in quadrant 4
The coordinate at (0, 5) is in quadrant boundary
```

#### tryMap(\_:)

tryMap์ ์ฐ๋ฉด ํด๋ก์  ์์์ error๋ฅผ throwํ  ์ ์์

```swift
Just("Directory name that does not exist")
  .tryMap { try FileManager.default.contentsOfDirectory(atPath: $0) }
  .sink(receiveCompletion: { print($0) },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
```

```swift
failure(Error Domain=NSCocoaErrorDomain Code=260 "The folder โDirectory name that does not existโ doesnโt exist." UserInfo={NSUserStringVariant=(
    Folder
), NSFilePath=Directory name that does not exist, NSUnderlyingError=0x6000023e1ad0 {Error Domain=NSPOSIXErrorDomain Code=2 "No such file or directory"}})
```

### Flattening publishers

#### flatMap(maxPublishers:_:_)

์ฌ๋ฌ๊ฐ์ publisher upstream -> single downstream์ผ๋ก ๋ณํ

```swift
func decode(_ codes: [Int]) -> AnyPublisher<String, Never> {
    Just(
        codes.compactMap { code in
            guard (32...255).contains(code) else { return nil }
            return String(UnicodeScalar(code) ?? " ")
        }
        .joined()
    )
    .eraseToAnyPublisher()
}

[72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
    .publisher
    .collect()
    .flatMap(decode)
    .sink(receiveValue: { print($0) })
    .store(in: &subscriptions)
```

```swift
Hello, World!
```

์ฌ๊ธฐ์๋ publisher์์ ๋ฐฉ์ถ๋ array๋ฅผ ๋จ์ผ string์ผ๋ก ๋ณ๊ฒฝํด์ค

์ด๊ฑธ๋ก๋ ๋ณ๋ก ์๋ฟ์ง ์๋๋ค...

๋ค์์ upstream์ผ๋ก ๋ถํฐ ๋ฌดํ์  value๊ฐ ์ ๋ฌ๋๋ฉด memory ์ด์๊ฐ ๋ฐ์ํ๊ฒ ๋๋ค

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160810680-32a15669-8860-4af4-b4a2-322fb3051dfa.png)

### Replacing upstream output

#### replaceNil(with:)

optional์ ํน์  ๊ฐ์ผ๋ก ๋ฐ๊ฟ์ค

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160810987-91d62504-d20b-4bed-86d4-19b54a3bef00.png)

```swift
["A", nil, "C"].publisher
    .eraseToAnyPublisher() // Combine Bug ๋ฐฉ์ด ์ํด ์ฌ์ฉ
    .replaceNil(with: "-") // nil -> "-"
    .sink(receiveValue: { print($0) })
    .store(in: &subscriptions)
```

```swift
A
-
C
```

#### replaceEmpty(with:)

upstream์์ value๊ฐ emit๋์ง ์๊ณ  completion ๋๋ฉด, value๋ฅผ ํ๋ ๋ฃ์ด์ฃผ๋ ๊ฒ

```swift
let empty = Empty<Int, Never>()

empty
  .replaceEmpty(with: 1)
  .sink(receiveCompletion: { print($0) },
        receiveValue: { print($0) })
  .store(in: &subscriptions)

```

```swift
1
finished
```

### Incrementally transforming output

#### scan(_:_:)

value ๋ฅผ ๋์ ํด์ ๊ณ์ฐํ  ์ ์์

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160811891-11d37e56-6246-49b0-8dba-7ab36e808782.png)

```swift
var dailyGainLoss: Int { .random(in: -10...10) }

let august2019 = (0..<22)
  .map { _ in dailyGainLoss }
  .publisher

august2019
  .scan(50) { latest, current in
      max(0, latest + current)
  }
  .sink(receiveValue: { _ in })
  .store(in: &subscriptions)
```

### ์ฐ์ต: ์ ํ๋ฒํธ ์ฐพ๊ธฐ

1. 10๊ฐ์ ์ซ์ ๋๋ ๋ฌธ์๋ฅผ ๋ฐ์

2. ์ฐ๋ฝ์ฒ๋ฅผ ์ฐพ์

```swift
input
    .map(convert)
    .replaceNil(with: 0)
    .collect(10)
    .map(format)
    .map(dial)
    .sink(receiveValue: { print($0) })
```

```swift
โโโ Example of: Create a phone number lookup โโโ
Contact not found for 000-123-4567
Dialing Marin (408-555-4321)...
Dialing Shai (212-555-3434)...

```

## ๐ท Chapter 4. Filtering Operators

### Filtering basics

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160812284-fede6503-0886-4d09-ba20-e437d464d712.png)

```swift
example(of: "filter") {
let numbers = (1...10).publisher

numbers
  .filter { $0.isMultiple(of: 3) } // collection์ filter ์ฐ๋๊ฑฐ๋ ๋๊ฐ์
  .sink(receiveValue: { n in
      print("\(n) is a multiple of 3")
  })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: filter โโโ
3 is a multiple of 3
6 is a multiple of 3
9 is a multiple of 3
```

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160812428-6186e6fc-f85f-4f9c-8066-d736d345fdec.png)

```swift
example(of: "removeDuplicates") {
let words = "hey hey hey there! want to listen to mister mister ?"
  .components(separatedBy: " ")
  .publisher

words
  .removeDuplicates() // ์ฐ์ํด์ ๊ฐ์ value๊ฐ ์ค๋ฉด ๋์ค์ ์ค๋ value๋ ๋ฌด์ํด์ค
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: removeDuplicates โโโ
hey
there!
want
to
listen
to
mister
?
```

Value๊ฐ Equatable์ ์ค์ํ์ง ์๋ ๊ฒฝ์ฐ

์กฐ๊ฑด์ ์ง์  ๋ฃ์ด์ ๊ตฌํ ๊ฐ๋ฅ

```swift
example(of: "removeDuplicates2") {
struct CustomValue {
  let value: String
}

let words = "hey hey hey there! want to listen to mister mister ?"
  .components(separatedBy: " ")
  .map { CustomValue(value: $0) }
  .publisher

words
  .removeDuplicates(by: { $0.value == $1.value }) // Equatable์ ์ค์ํ์ง ์๋ ๊ฐ์ฒด์ธ ๊ฒฝ์ฐ์๋ ๋น๊ต๋ฌธ์ผ๋ก ๊ตฌํ ๊ฐ๋ฅ
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: removeDuplicates2 โโโ
CustomValue(value: "hey")
CustomValue(value: "there!")
CustomValue(value: "want")
CustomValue(value: "to")
CustomValue(value: "listen")
CustomValue(value: "to")
CustomValue(value: "mister")
CustomValue(value: "?")
```

### Compacting and ignoring

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160812686-d0346dfa-09e9-47f9-a543-97ecf7a0c1f7.png)

```swift
example(of: "compactMap") {
let strings = ["a", "1.24", "3", "def", "45", "0.23"].publisher

strings
  .compactMap { Float($0) } // nil์ด๋ฉด ๋ฌด์ํด์ค
  .sink(receiveValue: {
      print($0)
  })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: compactMap โโโ
1.24
3.0
45.0
0.23
```

ignoreOutput์ complete ๋๋ง ๊ด์ฌ์ด ์์ ๋ ์ฌ์ฉํ๋ฉด ๋  ๋ฏ

```swift
example(of: "ignoreOutput") {
let numbers = (1...10_000).publisher

numbers
  .ignoreOutput()
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: ignoreOutput โโโ
Completed with: finished
```

### Finding values

#### first(where:)

lazyํ ํน์ฑ. ๋ง์กฑํ๋ ์กฐ๊ฑด์ด ๋์ค๋ฉด, ๋ ์ด์ ๊ฒ์ฌ๋ฅผ ์คํํ์ง ์์

```swift
example(of: "first(where:)") {
let numbers = (1...9).publisher

numbers
  .print("numbers")
  .first(where: { $0 % 2 == 0 }) // lazy ํจ๊ณผ๋ฅผ ๋ด๋๋ฐ, ์ ํจํ value ํ๋๋ฅผ ์ถฉ์กฑํ๋ฉด emit ํ complete๋จ
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: first(where:) โโโ
numbers: receive subscription: (1...9)
numbers: request unlimited
numbers: receive value: (1)
numbers: receive value: (2)
numbers: receive cancel
2
Completed with: finished
```

#### last(where:)

greedyํ ํน์ฑ. ๋ชจ๋  value๋ฅผ ๊ฒ์ฌํจ

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813043-b9ab54ad-84c3-4824-aad1-64fcaa9a3876.png)

```swift
example(of: "last(where:)") {
let numbers = (1...9).publisher

numbers
  .last(where: { $0 % 2 == 0 }) // greedy. ๋ชจ๋  value๋ฅผ ๊ฒ์ฌํจ
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}

```

```swift
โโโ Example of: last(where:) โโโ
8
Completed with: finished
```

```swift
example(of: "last(where:) 2") {
let numbers = PassthroughSubject<Int, Never>()

numbers
  .last(where: { $0 % 2 == 0 })
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)

numbers.send(1)
numbers.send(2)
numbers.send(3)
numbers.send(4)
numbers.send(5)
numbers.send(completion: .finished)
}
```

```swift
โโโ Example of: last(where:) 2 โโโ
4
Completed with: finished
```

### Dropping values

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813214-4e9e2a9e-bed4-4104-9e8f-63bf671b92e4.png)

```swift
example(of: "dropFirst") {
let numbers = (1...10).publisher

numbers
  .dropFirst(8)
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: dropFirst โโโ
9
10
```

drop(while:) ๋ lazyํ ํน์ฑ์ ๋๋๋ฐ, print("x")๊ฐ ๋ค์ฏ๋ฒ๋ง ์คํ๋๋๊ฑธ ์ ์ ์๋ค.

```swift
example(of: "drop(while:)") {
let numbers = (1...10).publisher

numbers
  .drop(while: { // * ์กฐ๊ฑด ๋ง์กฑํ๋๊ฒ ๋์ฌ๋๊น์ง drop
      print("x") // * ํ๋ฒ ์กฐ๊ฑด ๋ง์กฑํ๋ฉด ์คํ๋์ง ์์
      return $0 % 5 != 0
  })
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: drop(while:) โโโ
x
x
x
x
x
5
6
7
8
9
10
```

#### drop(untilOutputFrom:)

viewController์์ ํ๋ฉด์ด ๋ํ๋๊ณ  ๋์ ์ด๋ค ์์์ ํ๊ณ  ์ถ์ ๋ ์ฌ์ฉ ๊ฐ๋ฅ

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813509-7c586d78-d2d6-43e4-a799-b98b46de9b42.png)

```swift
example(of: "drop(untilOutputFrom:)") {
let isReady = PassthroughSubject<Void, Never>()
let taps = PassthroughSubject<Int, Never>()

taps
    .drop(untilOutputFrom: isReady)
    .sink(receiveValue: { print($0) })
    .store(in: &subscriptions)

(1...5).forEach { n in
    taps.send(n)

    if n == 3 {
        isReady.send()
    }
}
}
```

```swift
โโโ Example of: drop(untilOutputFrom:) โโโ
4
5
```

### Limiting values

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813632-9dcf880c-fda3-4c0b-bf07-d23b68b0d0d1.png)

```swift
example(of: "prefix") {
let numbers = (1...10).publisher

numbers
  .prefix(2) // 2๊ฐ๋ง value๋ฅผ ๋ฐ๊ณ  ์ดํ๋ก๋ ๋ฌด์. lazy
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: prefix โโโ
1
2
Completed with: finished
```

```swift
example(of: "prefix(while:)") {
let numbers = (1...10).publisher

numbers
  .prefix(while: { $0 < 3 }) // ํ๋ฒ ์กฐ๊ฑด์ ๋ง์กฑํ๋ฉด, complete
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
โโโ Example of: prefix(while:) โโโ
1
2
Completed with: finished
```

```swift
example(of: "prefix(untilOutputFrom:)") {
let isReady = PassthroughSubject<Void, Never>()
let taps = PassthroughSubject<Int, Never>()

taps
  .prefix(untilOutputFrom: isReady)
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)

(1...5).forEach { n in
  taps.send(n)

  if n == 2 {
      isReady.send()
  }
}
}
```

```swift
โโโ Example of: prefix(untilOutputFrom:) โโโ
1
2
Completed with: finished
```

### ์ฐ์ต๋ฌธ์ 

1 ~ 100 ๊น์ง ์์์ 50 ์ดํ๋ถํฐ 20๊น์ง ๋ฅผ ๋ฐ๋๋ฐ, ์ง์๋ง ๋ฐ๊ธฐ

1. ์ฒ์ 50๊ฐ๋ ์คํต

2. 50๊ฐ ์ดํ 20๊ฐ๊น์ง๋ง ๋ฐ์

3. ์ง์๋ง ๋ฐ์

```swift
(1...100)
    .publisher
    .dropFirst(50)
    .prefix(20)
    .filter { $0 % 2 == 0 }
    .sink(receiveValue: { print($0) })
    .store(in: &subscriptions)
```

```swift
52
54
56
58
60
62
64
66
68
70
```

## ๐ท Chapter 5. Combining Operators

### prepend

- Prepend๊ฐ ์์ ์ถ๊ฐํ๋ค๋ ๋ป

- value / collection / publisher๋ฅผ ์์ ์ถ๊ฐํ  ์ ์์

- Publisher๋ฅผ prepend ํ ๋๋ ์์ ๋ถ์ธ publisher๊ฐ complete ๋๊ณ ๋์์ผ ๊ทธ ๋ค์ publisher๊ฐ ๊ฐ์ ์ ๋ฌํจ

### append

Append ๋ sequence ๋งจ๋ค์ ๋ถ๋๊ฒ

### switchLatest

publisher๋ค์ ๋ณด๋ด๋ publisher๋ฅผ ๋ง๋ค์์ ๋, ๊ฐ์ฅ ์ต๊ทผ์ ์ ๋ฌ๋ publisher๋ก ์ ํํด์ค

```swift
let publishers = PassthroughSubject<PassthroughSubject<Int, Never>, Never>()

publishers
    .switchToLatest()
```

๋ฒํผ์ ํฐ์นํ๋ฉด API ํธ์ถํ๋ ์ํฉ์์, ํฐ์น๋ฅผ ์ฌ๋ฌ๋ฒ ํ  ์ ์๋๋ฐ switchToLatest๋ฅผ ์ฐ๋ฉด ๋ง์ง๋ง publisher๋ง ์ฌ์ฉํ๊ฒ ๋๋ค.

### merge

์ฌ๋ฌ publisher๋ฅผ ํ๋๋ก ํฉ์ณ์ค
merge๋ publisher๊ฐ ์ ๋ถ complete ๋์ด์ผ, mereg๋ publisher๋ complete ๋จ

### combineLatest

๋ชจ๋  publisher๋ค์ value๊ฐ ํ๋๋ผ๋ ๋ฐฉ์ถ๋์์ ๋ ๋ถํฐ, ํํ๋ก ๋ฌถ์ด์ ์ ๋ฌํจ
Publisher A์์ 1, 2๋ฅผ ๋ฐฉ์ถํ๊ณ  Publisher B์์ "a"๋ฅผ ๋ฐฉ์ถํ๋ค๋ฉด (2, "a")๊ฐ ํํ๋ก ๋ฌถ์ฌ์ ๋ณด๋ด์ง๋ค.
๊ทธ๋ฆฌ๊ณ  ๋ค์ Publisher B์์ "b"๋ฅผ ๋ฐฉ์ถํ๋ฉด (2, "b")๊ฐ ํํ๋ก ๋ฌถ์ฌ์ ๋ณด๋ด์ง๋ค.
๋ชจ๋  publisher ๋ค์ด complete๋์ด์ผ combineLatest๋ก ๋ฌถ์ธ publisher๋ complete ๋๋ค

### zip

publisher๋ค์ value๋ฅผ ํํ๋ก ๋ฌถ์ด์ ์ ๋ฌํจ
๊ฐ publisher๋ค์ value๊ฐ ์ง์ด ๋ง๋๋๋ก ํํ๋ก ๋ง๋ฆ
์ฌ๋ฌ๋ฒ ํํ๋ก ๋ฌถ์ด์ง๋ ์์

## ๐ท Chapter 6. Time Manipulation Operators

### Shifting time

```swift
let sourcePublisher = PassthroughSubject<Date, Never>()
let delayedPublisher = sourcePublisher.delay(for: .seconds(delayInSeconds), scheduler: DispatchQueue.main)

let subscription = Timer
    .publish(every: 1.0 / valuesPerSecond, on: .main, in: .common)
    .autoconnect() // value emit ์ ์ connectํด์ผํ๋๋ฐ, autoconnect๋ผ์ ์ฒซ๋ฒ์งธ subscirption์ connect
    .subscribe(sourcePublisher)
```

1์ด๋ง๋ค value๋ฅผ ์์ฐํ๊ณ , 1.5์ด delay ํ๋ค.

![img](https://user-images.githubusercontent.com/28912774/160815040-669a1183-e395-4030-872c-48622634dd40.gif)

### Collecting values

- ํน์  ๊ธฐ๊ฐ ๋์์ value๋ฅผ ๋ชจ์์ค

- ex) ํน์  ๊ธฐ๊ฐ ๋์์ ํ๊ท ์ ๊ตฌํ  ๋ ์ฌ์ฉ

```swift
let valuesPerSecond = 1.0
let collectTimeStride = 4

let sourcePublisher = PassthroughSubject<Date, Never>()
let collectedPublisher = sourcePublisher
    .collect(.byTime(DispatchQueue.main, .seconds(collectTimeStride)))
    .flatMap { dates in dates.publisher }

let subscription = Timer
    .publish(every: 1.0 / valuesPerSecond, on: .main, in: .common)
    .autoconnect()
    .subscribe(sourcePublisher)
```

collect๋ value๋ค์ด ๋ชจ์ฌ์ array๋ก ๋ง๋ค์ด์ง๋ ๊ฒ์ ๋ณผ ์ ์๋ค.

![img](https://user-images.githubusercontent.com/28912774/160815893-fa07c61b-7413-47c1-8701-17e1a60c9196.gif)

๊ทธ๋ฆฌ๊ณ  ์ฌ๊ธฐ์ ์์  ํ๋๋ฅผ ๋ ์ถ๊ฐํ๋ค.

์ด๋ฒ์ limit๋ก maxCount๋ฅผ ๋ฃ์ด๋ณธ๋ค

```swift
let collectMaxCount = 2

let collectedPublisher2 = sourcePublisher
    .collect(.byTimeOrCount(DispatchQueue.main, .seconds(collectTimeStride), collectMaxCount))
    .flatMap { dates in dates.publisher }
```

๋น์ทํ๊ฒ ํด์ View๋ฅผ ์ฐ๊ฒฐํ๋ฉด ์ต๋์น๋ก ์ค์ ํด๋ 2๊ฐ๋ง collect๋๋ ๊ฒ์ ๋ณผ ์ ์๋ค.

![img](https://user-images.githubusercontent.com/28912774/160816029-58c100ac-3d2e-45f0-a388-bc8c80b0da9c.gif)

### Holding off on events

- TextField์ ํ์ดํ ๋ค ํ์ ๋ ๋ค์ ๋์์ ์ํํ๊ณ  ์ถ์ ๋๊ฐ ์์

- debounce, throttle: ์ด ๋๊ฐ๊ฐ ๋งจ๋  ํท๊ฐ๋ฆฌ๋๋ฐ ์ ์ ๋ฆฌํด๋ณด์.

- debounce: ์๋ ฅ ์ฃผ๊ธฐ๊ฐ ๋๋๋ฉด ์ถ๋ ฅ

- throttle: ํน์  ์ฃผ๊ธฐ์์ ์ฒซ๋ฒ์งธ or ๋ง์ง๋ง value ์ถ๋ ฅ

#### debounce

- ์๋ ฅ ์ฃผ๊ธฐ๊ฐ ๋๋๋ฉด ๋ง์ง๋ง ๊ฐ ์ถ๋ ฅ

- ์ถ๊ฐ๋ก value๊ฐ ๋ค์ด์ค๋ฉด ์ฃผ๊ธฐ๊ฐ ๋ค์ ๊ฐฑ์ ๋จ

```swift
let subject = PassthroughSubject<String, Never>()

let debounced = subject
  .debounce(for: .seconds(1.0), scheduler: DispatchQueue.main)
  .share() // ์ฌ๋ฌ subscriber๊ฐ ๋์ผํ result๋ฅผ ๋ฐ๊ธฐ ์ํจ
```

![img](https://user-images.githubusercontent.com/28912774/160816325-c658a14a-325e-43ef-88e2-f46fb0b6777a.gif)

#### throttle

```swift
let throttleDelay = 1.0

let subject = PassthroughSubject<String, Never>()

let throttled = subject
    .throttle(for: .seconds(throttleDelay), scheduler: DispatchQueue.main, latest: false)
    .share()
```

- ์ฒ์์ ๊ตฌ๋ํ ์์ ์ value๋ฅผ ํ๋ฒ ๋ฐ๋ก ๋ฐฉ์ถ

- latest: false๋ก ์ฃผ๋ฉด ํน์  ์ฃผ๊ธฐ ์์ ์ฒซ๋ฒ์งธ value ์ถ๋ ฅ

- ์ฃผ๊ธฐ๋ฅผ 1์ด ๊ฐ๊ฒฉ์ผ๋ก ์ค์ ํจ

- ๋ฒํผ ํฐ์น๋ฅผ ์ฌ๋ฌ๋ฒ ํ  ์ ์๋ ๊ฒฝ์ฐ์ ์ฌ์ฉํ๋ฉด ์ข์ ๋ฏ

![img](https://user-images.githubusercontent.com/28912774/160816532-a624bde1-07eb-43f5-835e-9b2c4adb6814.gif)

์ด๋ฒ์๋ latest: true๋ก ์ต์์ ์ค์ ํด๋ณด์

๊ทธ๋ฌ๋ฉด ํน์  ์ฃผ๊ธฐ์์ ๋ง์ง๋ง value๋ฅผ ์ถ๋ ฅ!

![img](https://user-images.githubusercontent.com/28912774/160816582-c7a5b976-af07-40eb-af78-6b0a48f39be3.gif)

### Timing out

ํน์  ์๊ฐ์์ ์ด๋ฒคํธ๊ฐ ์์ผ๋ฉด ์ข๋ฃ

```swift
let subject = PassthroughSubject<Void, Never>()

let timedOutSubject = subject.timeout(.seconds(5), scheduler: DispatchQueue.main)
```

![img](https://user-images.githubusercontent.com/28912774/160816705-dec74989-210f-45a2-9532-7ad1140a7cdf.gif)

timeout ๋ฐ์ํ๋ฉด finish ๋์ ์ error๋ฅผ ๋์ง๋ ๊ฒฝ์ฐ๊ฐ ๋ ํํ ์ผ์ด์ค

```swift
enum TimeoutError: Error {
    case timedOut
}

let subject = PassthroughSubject<Void, TimeoutError>()

let timedOutSubject = subject.timeout(
    .seconds(5),
    scheduler: DispatchQueue.main,
    customError: { .timedOut })
```

![img](https://user-images.githubusercontent.com/28912774/160816744-a2b8b908-7c05-41b6-a327-af4e5ef8abab.gif)

### Measuring time

- value ์ฌ์ด์ ์๊ฐ์ ๊ณ์ฐํ๊ณ  ์ถ์ ๋ ์ฌ์ฉ

- DispatchQueue๋ฅผ ์ฌ์ฉํ  ๊ฒฝ์ฐ: ๋๋ธ์ด ๋จ์ DispatchTimeInterval ๋ก ๋ฆฌํด๋จ

- Runloop๋ฅผ ์ฌ์ฉํ  ๊ฒฝ์ฐ: ์ด๋จ์๋ก ๋ฆฌํด๋จ

```swift
let subject = PassthroughSubject<String, Never>()

let measureSubject = subject.measureInterval(using: DispatchQueue.main)

let subjectTimeline = TimelineView(title: "Emitted values")
let measureTimeline = TimelineView(title: "Measured values")

// ...์ค๋ต...

let subscription1 = subject.sink {
    print("+\(deltaTime)s: Subject emitted: \($0)")
}

let subscription2 = measureSubject.sink {
    print("+\(deltaTime)s: Measure emitted: \(Double($0.magnitude) / 1_000_000_000.0)")
}
```

![img](https://user-images.githubusercontent.com/28912774/160817132-e575cd22-8fdc-48d5-a0ea-dcb74d1d1490.gif)

## ๐ท Chapter 7. Sequence Operators

### Finding values

#### min

greedy: publisher๊ฐ finish๋  ๋ ๊น์ง ๊ธฐ๋ค๋ฆผ

```swift
[1, -50, 246, 0].publisher.min() // -50
```

value๊ฐ Comparable์ ์ค์ํ์ง ์๋๋ค๋ฉด?
Comparable์ ์ค์ํ์ง ์๋ ๊ฐ์ฒด๊ฐ ์์ผ๋ฉด ๋น๊ต๋ฌธ์ ์ง์  ๋ฃ์ด์ min์ ์ฌ์ฉํ  ์ ์๋ค.
์๋ ์์ ์์๋ ์ต์ง๋ก Comparable์ ์ค์ํ์ง ์๋๋ก ๋ง๋  ๋ค์ min์ ์ฐพ๋๋ก ํด๋ณด๋ ๊ฒ. ์กฐ๊ธ ์ต์ง์ง๋ง ์ด๋ ๊ฒ ํ๋ฉด ๊ฒฐ๊ณผ๊ฐ์์ ๋ค์ String์ผ๋ก ๋ณํํด์ ์ฒดํฌํด๋ณผ ์ ์๋ค.

```swift
["12345", "ab", "hello world"]
    .compactMap { $0.data(using: .utf8) } // [Data]
    .publisher
    .min(by: { $0.count < $1.count })
```

#### max

greedy: publisher๊ฐ finish๋  ๋ ๊น์ง ๊ธฐ๋ค๋ฆผ

```swift
["A", "F", "Z", "E"].publisher.max() // Z
```

#### first

lazy: ์ฒซ๋ฒ์งธ ๊ฐ์ ๋ง๋๋ฉด ๊ฐ ๋ฐฉ์ถ ํ finish

```swift
["A", "B", "C"].publisher.first() // A
```

#### first(where:)

์ด๊ฑด ์์ first() ๋ณด๋ค ๋ ๋ง์ด ์ธ ๊ฒ ๊ฐ์
๋จ์ํ ์ ์ผ ์ฒ์์ ์ค๋ value ๋ณด๋ค ๋งค์นญ๋๋ ์ฒซ๋ฒ์งธ ๊ฐ์ ๋ฐ์๋ณด๋๊ฒ ๋ ์ ์ฉํด ๋ณด์

```swift
["J", "O", "H", "N"]
    .first(where: { "Hello World".contains($0) })
```

#### last

completion .finish ์ดํ์ ๊ฐ ๋ฐฉ์ถ

```swift
["A", "B", "C"].publisher.last() // C
```

#### output(at:)

index ๋ฒ์งธ์ value๋ฅผ ๋ฐฉ์ถํจ.
ํน์  index์ value๋ฅผ ์ฐพ๋๊ฑฐ๋ผ์ 1๊ฐ์ฉ request ํจ.

```swift
let publisher = ["A", "B", "C", "D"].publisher

publisher
  .print("publisher")
  .output(at: 2)
  .sink(receiveValue: { print("Value at index 2 is \($0)") })
  .store(in: &subscriptions)
```

```swift
publisher: receive subscription: (["A", "B", "C", "D"])
publisher: request unlimited
publisher: receive value: (A)
publisher: request max: (1) (synchronous) // Demand.max(1)
publisher: receive value: (B)
publisher: request max: (1) (synchronous) // Demand.max(1)
publisher: receive value: (C)
Value at index 2 is C
publisher: receive cancel
```

#### output(in:)

ํน์  index ๋ฒ์ ์์ ๊ฐ๋ค์ ๋ฐฉ์ถํจ

```swift
["A", "B", "C", "D", "E"].publisher
    .output(in: 1...3) // 1, 2, 3 ๊ฐ๊ฐ ๋ฐฉ์ถํจ
```

### Querying the publisher

#### count

finish ํ์ ๋ช ๊ฐ์ value๋ฅผ ๋ฐ์๋์ง ๋ฐฉ์ถํจ

```swift
let publisher = ["A", "B", "C"].publisher

publisher
    .print("publisher")
    .count()
    .sink(receiveValue: { print("I have \($0) items") }) // 3
    .store(in: &subscriptions)
```

#### contains

๋ง์กฑํ๋ ๊ฐ ์์ผ๋ฉด true/false ๋ฐฉ์ถํ๊ณ  ์ข๋ฃ๋จ

```swift
let publisher = ["A", "B", "C", "D", "E"].publisher
let letter = "C"

publisher
    .print("publisher")
    .contains(letter)
    .sink(receiveValue: { contains in
        print(contains ? "Publisher emitted \(letter)!" : "Publisher never emitted \(letter)!")
    })
    .store(in: &subscriptions)
```

```swift
publisher: receive subscription: (["A", "B", "C", "D", "E"])
publisher: request unlimited
publisher: receive value: (A)
publisher: receive value: (B)
publisher: receive value: (C)
publisher: receive cancel
Publisher emitted C!
```

1. C ๊น์ง ๊ฒ์ฌํ๊ณ 
2. ์กฐ๊ฑด ๋ง์กฑํด์ cancel
3. true ๋ฐฉ์ถ

์ฌ๊ธฐ์ letter = "F" ์๋ค๋ฉด

1. E ๊น์ง ์ ๋ถ ๊ฒ์ฌํ๊ณ 

2. finish
3. false ๋ฐฉ์ถ

#### contains(where:)

```swift
let people = [
    (456, "Scott Gardner"),
    (123, "Shai Mishali"),
    (777, "Marin Todorv"),
    (214, "Florent Pillet")
]
.map(Person.init)
.publisher

people
    .contains(where: { $0.id == 800 || $0.name == "Marin Todorv"}) // ์ด๋ฐ์์ผ๋ก ์กฐ๊ฑด๋ฌธ ์์ฑ
    .sink(receiveValue: { contains in
        print(contains ? "Criteria matches!" : "Couldn't find a match for the criteria")
    })
    .store(in: &subscriptions)
```

#### allSatisfy

๋ชจ๋  value๊ฐ ์กฐ๊ฑด์ ๋ง์กฑํ๋์ง ์ฒดํฌ
์ค๊ฐ์ ํ๋๋ผ๋ ๋ง์กฑํ์ง ์์ผ๋ฉด .cancel / ์ ๋ถ๋ค ๋ง์กฑํ๋ฉด .finish
๊ฒฐ๊ณผ(Bool) ๋ฐฉ์ถ

```swift
let publisher = stride(from: 0, to: 5, by: 2).publisher

publisher
    .print("publisher")
    .allSatisfy { $0 % 2 == 0 }
    .sink(receiveValue: { allEven in
        print(allEven ? "All numbers are even" : "Something is odd...")
    })
    .store(in: &subscriptions)
```

```swift
publisher: receive subscription: (Sequence)
publisher: request unlimited
publisher: receive value: (0)
publisher: receive value: (2)
publisher: receive value: (4)
publisher: receive finished
All numbers are even
```

#### reduce

upstream์ ๊ฐ์ ๋์ฐ(accumulate)ํด์ complete์์ ๊ฐ์ ๋ฐฉ์ถํจ

```swift
let publisher = ["Hel", "lo", "Wor", "ld", "!"].publisher

publisher
    .print("publisher")
    .reduce("") { accumulator, value in
        accumulator + value
    } // .reduce("", +) ์ด๋ ๊ฒ๋ ํํ ๊ฐ๋ฅ
    .sink(receiveValue: { print("Reduced into: \($0)") })
    .store(in: &subscriptions)
```

```swift
publisher: receive subscription: (["Hel", "lo", "Wor", "ld", "!"])
publisher: request unlimited
publisher: receive value: (Hel)
publisher: receive value: (lo)
publisher: receive value: (Wor)
publisher: receive value: (ld)
publisher: receive value: (!)
publisher: receive finished
Reduced into: HelloWorld!
```

**scan๊ณผ reduce๊ฐ ๋ค๋ฅธ์ **

scan์ ๋์ฐ๋ ๊ฐ์ ๋งค๋ฒ ๋ฐฉ์ถํจ
reduce๋ complete ๋๊ณ  ๋์ฐ๋ ๊ฐ์ ๋ฐฉ์ถํจ

## ๐ท Chapter 8. Debugging

```swift
let subscription = (1...3).publisher
  .print("publisher")
  .sink { _ in }

```

```swift
publisher: receive subscription: (1...3)
publisher: request unlimited
publisher: receive value: (1)
publisher: receive value: (2)
publisher: receive value: (3)
publisher: receive finished
```

print("์ด๋ฆ") ์ผ๋ก publisher์ ๋ถ์ฌ์ฃผ๋ฉด ๊ฐ๋จํ๊ฒ ์ด๋ฒคํธ๋ค์ ์ถ๋ ฅํด์ค๋๋ค.

```swift
class TimeLogger: TextOutputStream {
  private var previous = Date()
  private let formatter = NumberFormatter()

  init() {
    formatter.maximumFractionDigits = 5
    formatter.minimumFractionDigits = 5
  }

  func write(_ string: String) {
    let trimmed = string.trimmingCharacters(in: .whitespacesAndNewlines)
    guard !trimmed.isEmpty else { return }
    let now = Date()
    print("+\(formatter.string(for: now.timeIntervalSince(previous))!)s: \(string)")
    previous = now
  }
}

let subscription = (1...3).publisher
  .print("publisher", to: TimeLogger())
  .sink { _ in }
```

์์ง๊น์ง ์ด๋์ ์ธ์ง ๋ชจ๋ฅด๊ณ์ง๋ง, ๋ฐ๋ณต์ ์ผ๋ก printํ๊ณ  ์ถ์ ๋ด์ฉ์ด ์์ผ๋ฉด ํ๋ก์ ํธ์์ ๋ง๋ค์ด์ ์ธ ์ ์์ ๊ฒ ๊ฐ์์.

๊ทธ๋ฆฌ๊ณ  ๋คํธ์ํฌ ์งํ ์ํฉ์ ์ถ๋ ฅํด๋ณด๊ณ  ์ถ๋ค๋ฉด handleEvents ๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```swift
let request = URLSession.shared
    .dataTaskPublisher(for: URL(string: "https://www.raywenderlich.com/")!)

request
    .handleEvents(receiveSubscription: { _ in
        print("Network request will start")
    }, receiveOutput: { _ in
        print("Network request data received")
    }, receiveCancel: {
        print("Network request cancelled")
    })
    .sink(receiveCompletion: { completion in
        print("Sink received completion: \(completion)")
    }) { (data, _) in
        print("Sink received data: \(data)")
    }
```

```swift
Network request will start
Network request data received
Sink received data: 153253 bytes
Sink received completion: finished
```

## ๐ท Chapter 9. Timers

### RunLoop

ํน์  RunLoop ์์์ ์ด๋ฒคํธ๋ฅผ ๋ฐ์์ํฌ ์ ์์ต๋๋ค.

1์ด๋ง๋ค ํ๋ฒ์ฉ print ํฉ๋๋ค.

```swift
let runLoop = RunLoop.main

runLoop.schedule(
    after: runLoop.now,
    interval: .seconds(1),
    tolerance: .milliseconds(100)
) {
    print("Timer fired")
}.store(in: &subscriptions)
```

๋น์ฐํ subscription์ cancel ์์ผ๋ฒ๋ฆด ์๋ ์์

์๋ ์์ ์์๋ 3์ด ๋์๋ง ์์์ ์ํ ํ cancel ๋จ

```swift
let runLoop = RunLoop.main

let subscription = runLoop.schedule(
    after: runLoop.now,
    interval: .seconds(1),
    tolerance: .milliseconds(100)
) {
    print("Timer fired")
}

subscription.store(in: &subscriptions)

runLoop.schedule(after: .init(Date(timeIntervalSinceNow: 3.0))) {
    subscription.cancel()
}
```

### Timer

์ด๊ฒ๋ ๊ทผ๋ฐ RunLoop ์์์ ์๋ํฉ๋๋ค.

main ์ด๋ current๋ ์ด๋ป๊ฒ ๋ค๋ฅด๊ฒ ์จ์ผํ ์ง ์์ง ์ ๋ชจ๋ฅด๊ฒ ์ต๋๋ค.

RunLoop์ ๋ํ ๊ณต๋ถ๊ฐ ์ข ๋ ํ์ํด๋ณด์๋๋ค.

```swift
let main = Timer.publish(every: 1.0, on: .main, in: .common)
let current = Timer.publish(every: 1.0, on: .current, in: .common)
```

subscription ์์ ํ  ๋ timer๋ ์์์ํค๋ ๋ฐฉ๋ฒ์ด ์์!

์ด๊ฑด ๊ต์ฅํ ์ค์ฉ์ ์ธ ๋ฏ

```swift
let subscription = Timer
    .publish(every: 1.0, on: .main, in: .common)
    .autoconnect()
    .scan(0) { counter, _ in counter + 1 }
    .sink { counter in
        print("Counter is \(counter)")
    }
```

### DispatchQueue

RunLoop๋ ๋๋ ์ด ๋  ๊ฐ๋ฅ์ฑ์ด ์์ด์, ๋์คํจ์นํ๋ฅผ ๋ ๋ง์ด ์ฌ์ฉํ  ๋ฏ๋ ํฉ๋๋ค.

์ด๊ฒ๋ 1์ด๋ง๋ค print ํด์ค๋๋ค.

```swift
let queue = DispatchQueue.main
let source = PassthroughSubject<Int, Never>()

var counter = 0

let cancellable = queue.schedule(
    after: queue.now,
    interval: .seconds(1)
) {
    source.send(counter)
    counter += 1
}

let subscription = source.sink {
    print("Timer emitted \($0)")
}
```

## ๐ท Chapter 10. Key-Value Observing

### KVO

OperationQueue์ operation ๊ฐ์๊ฐ ๋ณ๊ฒฝ๋๋ฉด sink์์ ์ด๋ฒคํธ๋ฅผ ๋ฐ์๋ณผ ์ ์์ต๋๋ค.

```swift
let queue = OperationQueue()

let subscription = queue.publisher(for: \.operationCount)
    .sink {
        print("Outstanding operations in queue: \($0)")
    }
```

์ปค์คํ์ผ๋ก ๋ง๋ค๋ ค๋ฉด?

1. NSObject ์์

2. @objc dynamic ํค์๋

KVO๊ฐ Objc๋ฅผ ํตํด ์ง์๋๊ธฐ ๋๋ฌธ์ NSObject์ @objc dynamic ๋ฅผ ํตํด์ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.

```swift
class TestObject: NSObject {
    @objc dynamic var integerProperty: Int = 0
}

let obj = TestObject()

let subscription = obj.publisher(for: \.integerProperty)
    .sink {
        print("integerProperty changes to \($0)")
    }

obj.integerProperty = 100
obj.integerProperty = 200
```

```swift
integerProperty changes to 0
integerProperty changes to 100
integerProperty changes to 200
```

Observation Options
๊ตฌ๋ํ  ๋ ์ต์์ ์ค ์ ์์ต๋๋ค.

1. .inital : ์ด๊ธฐ ๊ฐ์ ๋ฐฉ์ถ.
2. .prior : ๋ณํ๊ฐ ๋ฐ์ํ์ ๋ ์ด์  ๊ฐ๊ณผ ์๋ก์ด ๊ฐ์ ๋ฐฉ์ถ.

์์ ์์ ์์ options: [] ๋ก ์ถ๊ฐํ๋ฉด ์ด๊ธฐ๊ฐ ์๋ฐ์ต๋๋ค.

KVO๊ฐ @objc ํค์๋๊ฐ ๋ถ์ด์ optional์ด ์๋๋๋ฐ, ์ด๊ธฐ๊ฐ์ ๋ฐ๊ธฐ ์ซ์ ๊ฒฝ์ฐ์ ์ด๋ ๊ฒ ์ฌ์ฉํ๋ฉด ๋ฉ๋๋ค.

```swift
let subscription = obj.publisher(for: \.integerProperty, options: [])
```

```swift
integerProperty changes to 100
integerProperty changes to 200
```

.prior๋ ์ด์ ๊ฐ๊ณผ ์๋ก์ด๊ฐ์ ๋ฐฉ์ถํ๋๋ฐ

```swift
let subscription = obj.publisher(for: \.integerProperty, options: [.prior])
```

```swift
integerProperty changes to 0
integerProperty changes to 100
integerProperty changes to 100
integerProperty changes to 200
```

### ObservableObject

@Published ๊ฐ ๊ฑธ๋ ค์๋ ํ๋กํผํฐ๊ฐ ๋ณ๊ฒฝ๋๋๊ฒ์ ๊ฐ์งํ  ์ ์์ต๋๋ค.

์ด๋ค ํ๋กํผํฐ๊ฐ ๋ณ๊ฒฝ๋์๋์ง๋ ๊ตฌ๋ถ ๋ชปํฉ๋๋ค.

SwiftUI ์ฒ๋ผ ViewModel์ด ๋ณ๊ฒฝ๋๋ฉด View๋ฅผ ๊ฐฑ์ ํด์ผํ  ๋ ์ฌ์ฉํ  ์ ์์ ๊ฒ ๊ฐ์ต๋๋ค.

```swift
class MonitorObject: ObservableObject {
    @Published var someProperty = false
    @Published var someOtherProperty = ""
}

let object = MonitorObject()
let subscription = object.objectWillChange.sink {
    print("object will change")
}

object.someProperty = true
object.someOtherProperty = "Hello world"
```

```swift
object will change
object will change
```

## ๐ท Chapter 11. Resource Management

### share

value ํ์์ด ์๋ reference ํ์์ publisher๋ฅผ ๊ณต์ ํ  ์ ์๋๋ก ํด์ค๋๋ค.

์ฃผ์ํ  ์ ์ ์ด๋ฏธ complete ๋ share publisher๋ฅผ ๊ตฌ๋ํ๋ฉด complete๋ง ๋ฐ๊ฒ ๋ฉ๋๋ค.

```swift
let shared = URLSession.shared
  .dataTaskPublisher(for: URL(string: "https://www.raywenderlich.com")!)
  .map(\.data)
  .print("shared")
  .share()

print("subscribing first")

let subscription1 = shared.sink(
  receiveCompletion: { _ in },
  receiveValue: { print("subscription1 received: '\($0)'") }
)

print("subscribing second")

let subscription2 = shared.sink(
  receiveCompletion: { _ in },
  receiveValue: { print("subscription2 received: '\($0)'") }
)
```

```swift
subscribing first
shared: receive subscription: (DataTaskPublisher)
shared: request unlimited
subscribing second
shared: receive value: (275400 bytes)
subscription1 received: '275400 bytes'
subscription2 received: '275400 bytes'
shared: receive finished
```

### multicast

connect()๋ฅผ ํธ์ถํด์ผ ์ด๋ฒคํธ๋ฅผ ์์ํฉ๋๋ค.

๊ทธ๋์ subscription์ ๋ค ๋ง๋ค์ด๋๊ณ , connect ํ  ์ ์์ด์ ํธํฉ๋๋ค.

```swift
let subject = PassthroughSubject<Data, URLError>()

let multicasted = URLSession.shared
  .dataTaskPublisher(for: URL(string: "https://www.raywenderlich.com")!)
  .map(\.data)
  .print("multicast")
  .multicast(subject: subject)

// 3
let subscription1 = multicasted
  .sink(
      receiveCompletion: { _ in },
      receiveValue: { print("subscription1 received: '\($0)'") }
  )

let subscription2 = multicasted
  .sink(
      receiveCompletion: { _ in },
      receiveValue: { print("subscription2 received: '\($0)'") }
  )


let cancellable = multicasted.connect()

```

```swift
multicast: receive subscription: (DataTaskPublisher)
multicast: request unlimited
multicast: receive value: (275400 bytes)
subscription1 received: '275400 bytes'
subscription2 received: '275400 bytes'
multicast: receive finished
```

### future

future๋ ํด๋ก์  ์์ ๋์์ ์ฆ์ ์คํํฉ๋๋ค.

๊ทธ๋ฆฌ๊ณ  ๊ตฌ๋ํ๋ฉด ๊ทธ ๊ฐ์ ์ ๋ฌํฉ๋๋ค.

```swift
func performSomeWork() throws -> Int {
    print("Performing some work and returning a result")
    return 5
}

let future = Future<Int, Error> { fulfill in
    do {
        let result = try performSomeWork()
        fulfill(.success(result))
    } catch {
        fulfill(.failure(error))
    }
}

print("Subscribing to future...")

let subscription1 = future
    .sink(
        receiveCompletion: { _ in print("subscription1 completed") },
        receiveValue: { print("subscription1 received: '\($0)'") }
    )

let subscription2 = future
    .sink(
        receiveCompletion: { _ in print("subscription2 completed") },
        receiveValue: { print("subscription2 received: '\($0)'") }
    )
```

```swift
Performing some work and returning a result
Subscribing to future...
subscription1 received: '5'
subscription1 completed
subscription2 received: '5'
subscription2 completed
```

## ๐ท Chapter 12. Error Handling

### Never

publisher๊ฐ fail ์ด๋ฒคํธ๊ฐ ์ ๋ ์ผ์ด๋์ง ์๋ ๊ฒฝ์ฐ ์ฌ์ฉํฉ๋๋ค.

์๋ฅผ๋ค์ด Just๋ฅผ ํ์ธํด๋ณด๋ฉด Failure๊ฐ Never๋ก ์ ์๋ ๊ฒ์ ๋ณผ ์ ์์ต๋๋ค.

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160823941-80a08a8c-b1cf-4056-a888-136b21e9dcd7.png)

### setFailureType

infallible publisher ๋ฅผ ๋ง๋๋ ๋ฐฉ๋ฒ!

#### assign(to:on:)

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160824088-a4f37516-7c4b-4208-b694-cb59db05d7c0.png)

assign ์ด ๊ฑธ๋ ค์๋ ๊ณณ์์ setFailureType์ ํ๋ ค๊ณ  ํ๋ฉด ์ปดํ์ผ์ด ๋์ง ์์ต๋๋ค.

Failure๊ฐ Never ์ผ๋๋ง assign์ด ๊ฐ๋ฅํ๊ฒ์ผ๋ก ๋ณด์๋๋ค.

#### assertNoFailure

์๋ฌ๊ฐ ๋ฐ์ํ์ ๋ assert๋ฅผ ๊ฑธ์ด์ ๊ฐ๋ฐ์๊ฐ ์ธ์งํ๊ฒ ๋ง๋๋ ๋ฐฉ๋ฒ์๋๋ค.

assert๋ฅผ ๊ฑฐ๋๊ฑด ํ์์๋ ๋ง์ด ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์๋๋ค.

ํ์์ ์ผ๋ก ๋ณด์ฅ๋์ด์ผ ํ๋ ๊ฐ์ด ์๋ค๋ฉด ์ด๊ฒ์ ์ฌ์ฉํ๋ฉด ์ ์ฉํ  ๋ฏ ํฉ๋๋ค.

```swift
Just("Hello")
    .setFailureType(to: MyError.self)
    .tryMap { _ in throw MyError.ohno }
    .assertNoFailure()
    .sink(receiveValue: { print("Got value: \($0)") })
    .store(in: &subscriptions)
```

tryMap ๋ถ๋ถ์์ ์ผ๋ถ๋ฌ ์๋ฌ๋ฅผ ๋ฐ์์ํค๋ ์์ ์๋๋ค.

์๋ฌ๋ฅผ ๋ง๋๋ฉด ์๋์ ๊ฐ์ด ์๋ฌ๊ฐ ๋ฐ์ํฉ๋๋ค.

```swift
error: Execution was interrupted, reason: EXC_BAD_INSTRUCTION (code=EXC_I386_INVOP, subcode=0x0).
The process has been left at the point where it was interrupted, use "thread return -x" to return to the state before expression evaluation.
```

### Dealing with failure

#### try\* operators

```swift
let names = ["Scott", "Marin", "Shai", "Florent"].publisher

names
.map { value in
    let length = value.count

    guard length >= 5 else {
        throw NameError.tooShort(value)
    }

    return value.count
}
```

์ด๋ฐ ์์ผ๋ก ์ฝ๋๋ฅผ ์์ฑํ์ ๋, map ๋ถ๋ถ์์ ์ปดํ์ผ ์๋ฌ๊ฐ ๋ฐ์ํฉ๋๋ค.

```swift
Invalid conversion from throwing function of type '(String) throws -> _' to non-throwing function type '(String) -> T'
```

์ฌ๊ธฐ์ map -> tryMap ์ผ๋ก ๋ณ๊ฒฝํ๋ฉด ์ปดํ์ผ ์๋ฌ๊ฐ ์ฌ๋ผ์ง๋๋ค.

```swift
.tryMap { value -> Int in
    let length = value.count

    guard length >= 5 else {
        throw NameError.tooShort(value)
    }

    return value.count
}
```

```swift
โโโ Example of: tryMap โโโ
Got value: 5
Got value: 5
Completed with failure(__lldb_expr_13.(unknown context at $10816a834).(unknown context at $10816a8d0).(unknown context at $10816a8d8).NameError.tooShort("Shai"))
```

#### Mapping errors

```swift
.tryMap { throw NameError.tooShort($0) }
```

## ๐ท Chapter 13. Schedulers

### Operators for scheduling

2๊ฐ์ง ๊ธฐ๋ณธ operator๊ฐ ์์
`subscribe(on:) subscribe(on:options:)`
create ํน์  ์ค์ผ์ค๋ฌ ์์์ subscription์ ๋ง๋ค์ด์ค.
subscription์ ๋ํ ์ค๋ช์ด ์ข์๋ฐ start the work ์ด๋ผ ๋์ด ์์.
`receive(on:) receive(on:options)`
delivers ํน์  ์ค์ผ์ค๋ฌ ์์์ value๋ฅผ ์ ๋ฌํด์ค.

### subscribe(on:) ์๊ฐ

- Publisher๊ฐ Subscriber๋ฅผ ๋ฐ์. Subscription ์์ฑ.

- Subscriber๊ฐ Subscription์ ๋ฐ์. request value

- Publisher ์์ ์์ (Subscription์ ํตํด์)

- Publisher ๊ฐ ๋ฐฉ์ถ (Subscription์ ํตํด์)

- Operators๋ value๋ฅผ ๋ณ๊ฒฝํจ(transform)

- Subscriber๋ ์ต์ข ๊ฒฐ๊ณผ๊ฐ์ ๋ฐ์

1~3 ๊น์ง ๋ณดํต ์์์ ์์ฒญํ ์ค๋ ๋์์ ๋ฐ๋ก ์ผ์ด๋จ
๊ทธ๋ฌ๋ subscribe(on:)๋ฅผ ์ฐ๋ ์๊ฐ, ๋ชจ๋  operation ๋ค์ ํน์  ์ค์ผ์ค๋ฌ์์ ์๋ํจ

์์)

```swift

let computationPublisher = Publishers.ExpensiveComputation(duration: 3)

let queue = DispatchQueue(label: "serial queue")

let currentThread = Thread.current.number // ํ๋ ์ด ๊ทธ๋ผ์ด๋์ Main Thread ์์ ์๋
print("Start computation publisher on thread \(currentThread)")

let subscription = computationPublisher
    .subscribe(on: queue)
    .receive(on: DispatchQueue.main)
    .sink(receiveValue: { value in
        let thread = Thread.current.number
        print("Received computation result on thread \(thread): \(value)")
    })
```

```swift
Start computation publisher on thread 1
ExpensiveComputation subscriber received on thread 5 // subscribe(on:)์ ์ํฅ
Beginning expensive computation on thread 5 // subscribe(on:)์ ์ํฅ
Completed expensive computation on thread 5 // subscribe(on:)์ ์ํฅ
Received computation result on thread 1: Computation complete  // receive(on:)์ ์ํฅ
```

subscribe(on:) ์ ํตํด์ ๋น๋๊ธฐ ๋์์ ์คํ
receive(on:) ์ ํตํด์ ๋น๋๊ธฐ ๋์ ํ Main ์ค๋ ๋์์ UI ์๋ฐ์ดํธ๋ฅผ ํด์ค ์ ์์

### Scheduler implementations

์ ํ์ Scheduler ํ๋กํ ์ฝ์ ๊ตฌํํ ๊ฐ์ฒด๋ฅผ ๋ช ๊ฐ์ง ์ ๊ณตํ๋ค.

- `ImmediateScheduler`: ํ์ฌ ์ค๋ ๋์์ ์๋์ํด. `subscribe(on:)` ์ด๋ `receive(on:)`์ผ๋ก ์กฐ์ํ์ง ์๋ ํ ์๋๋๋ ๊ธฐ๋ณธ ์ค์ผ์ค๋ฌ.

- `RunLoop`: Foundation์ Thread ๊ฐ์ฒด์ ๋ฌถ์ฌ ์์. ๋ฌถ์ฌ์๋๊ฒ ๋ญ๊น? ์ข์์ ??

- `DispatchQueue`: serial ๋๋ concurrent

- `OperationQueue`: work item์ ์คํ์ ์กฐ์ (regulate: ์กฐ์ , ๊ท์ )ํ๋ Queue

### ImmediateScheduler

์ฆ์ ์คํ๋จ: schedule(after:) ๊ฐ์ ๊ฑฐ ์์

### RunLoop scheduler

๋๋ถ๋ถ DispatchQueue๋ฅผ ์ฌ์ฉํ๋๊ฒ ์ ์ฉํ์ง๋ง, ์ด๋ค ๊ฒฝ์ฐ์์๋ RunLoop๋ฅผ ์ฐ๋๊ฒ ์ ์ฉํ  ๋๊ฐ ์์
Timer, UIKit, AppKit์ด RunLoop ๊ธฐ๋ฐ์ผ๋ก ์๋ํจ
User input์ ์ํ ๋ชจ๋๋ฅผ ์คํ์์ผ์ค

<!-- <p align="center">
  <img height="350"  alt="แแณแแณแแตแซแแฃแบ" src="">
</p> -->

<!-- README ํ ์ค์ ์ฌ๋ฌ screenshoot ๋๊ธฐ ์์  -->
<!-- <p>
   <img height="350" alt="แแณแแณแแตแซแแฃแบ" src="">
   <img height="350" alt="แแณแแณแแตแซแแฃแบ" src="">
   <img height="350" alt="แแณแแณแแตแซแแฃแบ" src="">
</p> -->

---

<!-- ๐ถ ๐ท ๐ ๐ ๐ -->

## ๐ Reference

Combine: Asynchronous Programming with Swift - [https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift/v2.0](https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift/v2.0)

์ฝ์ฐ ๊ธฐ์  ๋ธ๋ก๊ทธ - [https://cozzin.tistory.com/10](https://cozzin.tistory.com/10)
