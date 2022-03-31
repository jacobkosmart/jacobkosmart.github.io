## Combine: Asynchronous Programming with Swift 책 정리

## 🔷 Chapter 1. Hello, Combine!

### 비동기 프로그래밍 (Asynchronous programming)

1. 스레드 1개가 코드 실행: 결과로 "Tom Harding"이 출력됨을 보장 가능

```swift
begin
  var name = "Tom"
  print(name)
  name += " Harding"
  print(name)
end
```

2. 스레드 2개가 비동기적으로 코드를 실행 코드를 실행할 때마다 결과가 달라지기도 함. Thread 2 가 끼어들면서 결과물은 "Billy Bob Harding"이 되어버림...

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

### Combine 장점

- 당신의 코드에 통합하기 쉬움. 애플은 Combine API를 Foundation Framework에 긴밀하게 통합하고 있음. (이게 RxSwift 보다 좋은 점이 아닐까 싶음. RxSwift는 외부 라이브러리. 코코아 프레임워크와 통합하기 위해서 많은 노력이 필요.)

- SwiftUI와 함께 사용하기도 좋음.

- API에 대한 테스트도 잘되어 있습니다.

- 데이터 모델 부터 네트워크 레이어 그리고 UI까지 모두 Combine을 사용 가능

### Combine basics

#### Publisher

- Publisher는 value들을 보내는(emit) 역할.

**Publisher가 emit 할 수 있는 이벤트 종류**

1. Output

2. Completion: successful completion

3. Failure: completion with an error

Publisher는 Output을 안보내고 있거나 여러번 보낼 수 있으며,
Completion 이나 Failure를 한번 보내고 나면 더 이상의 이벤트는 보낼 수 없습니다.

**특징**

- 3가지 이벤트로 모든 종류의 동적 데이터를 표현 가능

- delegate를 추가하거나 completion callback을 주입 필요없음

- Publisher는 에러 핸들링이 내장

- Publisher는 2개의 제니릭을 기반으로 구성

  - Publisher.Ouput: output value.

  - Publisher.Failure: 에러 전달. 에러가 발생할 일이 없으면, Never 라는 타입으로 정의하면 됨

#### Operators

**정의**

Operator는 Publisher 프로토콜에 선언되어 있음.
같거나 새로운 Publisher를 반환하는 메소드.
Operator들을 체이닝해서 사용할 수 있기 때문에 유용함.

**장점**

- Operator들은 독립적이고 조합가능하기 때문에, 복잡한 로직을 구현하는데 조합(Combine) 가능.

- 항상 Input & Ouput(Upstream & Downstream)을 가지기 때문에 shared state를 피할 수 있음. (동시성 이슈)

- 비동기 코드가 끼어들어 당신의 데이터를 중간에 변경할 일이 없음

#### Subscribers

**정의**

모든 구독은 subscriber로 끝남.
전달받은 value나 completion event로 작업을 수행.

**2개의 내장된 subscriber**

- sink: output value와 completion을 받을 수 있는 클로저를 제공할 수 있음

- assign: output을 key path를 통해 data model의 property 나 UI control에 바로 바인딩 할 수 있음

#### Subscriptions

**중요**

subscription의 끝에 subscriber를 추가 -> 체이닝의 맨 앞에 있는 publisher를 활성화. output을 수신해줄 subscriber가 없으면 publisher는 어떤 value도 전달하지 않음

**장점**

- Subscription은 비동기 이벤트들의 체인을 커스텀 코드와 에러 핸들링과 함께 한방에 선언 가능.

- Full-Combine 이면, 앱 전체의 로직을 subscription 들로 표현 가능.

- Subscription이 한번 선언되고 나면 콜백을 호출할 필요 없이 시스템이 다 알아서 해줌.

#### 메모리 관리

Cacncellable 프로토콜 사용해서 메모리 관리. Subscriber들은 Cancellable을 준수하고 있음. 오브젝트를 메모리에서 해제 -> 모든 subscription은 취소 -> 리소스를 메모리로부터 해제

**장점**

- Subscription의 수명을 view controller 같은 오브젝트에 bind 가능.
- 유저가 view controller를 view stack에서 dismiss -> subscription 취소 해줌

**조금 더 자동화**

[AnyCancellable] Collection 프로퍼티를 만들어서, subscription들을 여기에 담아주기.
[AnyCancellable]가 메모리에서 해제될 때 자동적으로 cancel 되고 release 될 것 입니다.

#### 기존 코드에 비해 Combine이 더 좋은 점은?

- 시스템 레벨에 통합되어 있음. 내부에서 privatet API 쓰는 듯

- delegate, closure를 만들 필요 없음. 실수 가능성 낮아짐.

- 재사용성 좋음. 동일한 인터페이스 쓰기 때문.

- operator를 조합하기 좋음.

- 비동기 코드에서도 비즈니스 로직에 집중할 수 있음.

#### Key points

- 컴바인은 비동기 이벤트를 위한 선언적, 반응형 프레임워크

- 비동기 프로그래밍의 기존 문제를 해결하는 것이 목표

- 주요 3 타입: publisher (이벤트 발행) -> operator (이벤트 처리, 조작) -> subscriber (결과물 소비)

## 🔷 Chapter 2. Publishers & Subscribers

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
——— Example of: Publisher ———
Notification received!
```

이 예제는 조금 맞지 않는 면이 있는데, 이벤트가 publisher로 부터 나온게 아니기 때문.
Subscriber가 등록되어야 Publisher가 활성화 됨.

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
——— Example of: Subscriber ———
Notification received from a publisher!
```

> sink method : https://developer.apple.com/documentation/combine/record/sink(receivevalue:)

- Failure = Never

- Subscriber를 만들고 backPressure를 무제한 값으로 요청.

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

- subscriber가 더 이상 값을 받을 필요 없을 때 cancel() 사용

- cancel()을 직접 호출하지 않으면, denit될 때까지 구독됨

### Publisher 와 Subscriber 의 흐름

![img1](https://user-images.githubusercontent.com/28912774/160808043-298f3575-c843-4f87-b469-7cd289219dea.png)

1. 구독 시작

2. Subscription 객체 전달

3. request value: Backpressure

4. values 여러개 전달 가능

5. completion은 한번만

#### Publisher Protocol

```swift
public protocol Publisher {
  // 1: emit할 수 있는 value
  associatedtype Output

  // 2: 예외 발생할 경우 사용되는 에러.
  // 에러가 발생하지 않는다고 보장할 수 있으면, `Never` 사용
  associatedtype Failure : Error

  // 4: publisher에 subscirber를 붙이기 위해서 호출 됨
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
  // 1: receive 할 수 있는 value
  associatedtype Input

  // 2: receive 할 수 있는 error
  associatedtype Failure: Error

  // 3
  func receive(subscription: Subscription)

  // 4
  func receive(_ input: Self.Input) -> Subscribers.Demand

  // 5
  func receive(completion: Subscribers.Completion<Self.Failure>)
}
```

## 🔷 Chapter 3. Transforming Operators

**Operators and publishers**

- operator method는 사실 publisher를 return 함

- upstream data -> operator 에서 가공 -> downstream으로 전달

- error handling을 위한 operator가 아니면, error를 downstream으로 흘려보내줌

### Collecting Value

#### Collect()

- 개별 value -> array로 변경

- value를 버퍼에 쌓고, completion 때 array로 만들어줌

![img1](https://user-images.githubusercontent.com/28912774/160809308-2c4186ef-df5e-4638-beb0-2fc1fda8381a.png)

```swift
example(of: "collect") {
  ["A", "B", "C", "D", "E"].publisher
  .collect(2) // stream을 2개씩 묶은 array로 만들어줌
  .sink(receiveCompletion: { print($0) },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: collect ———
["A", "B"]
["C", "D"]
["E"] // collect(2)가 채워지기 전에 stream이 끝나서 ["E"]로 출력됨
finished
```

collect(): 숫자 지정하지 않은 collect는

completion 될 때까지 무한정 array를 채울 수 있기 때문에 메모리 관리에 주의

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
——— Example of: map ———
one hundred twenty-three
four
fifty-six
```

#### Map key paths

- keyPath를 통해 바로 매핑해주는 방법

- 3개까지 프로퍼티 매핑이 가능함

- .map { ($0.x, $0.y) } 보다 조금 더 간결하다는 점은 장점

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

tryMap을 쓰면 클로저 안에서 error를 throw할 수 있음

```swift
Just("Directory name that does not exist")
  .tryMap { try FileManager.default.contentsOfDirectory(atPath: $0) }
  .sink(receiveCompletion: { print($0) },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
```

```swift
failure(Error Domain=NSCocoaErrorDomain Code=260 "The folder “Directory name that does not exist” doesn’t exist." UserInfo={NSUserStringVariant=(
    Folder
), NSFilePath=Directory name that does not exist, NSUnderlyingError=0x6000023e1ad0 {Error Domain=NSPOSIXErrorDomain Code=2 "No such file or directory"}})
```

### Flattening publishers

#### flatMap(maxPublishers:_:_)

여러개의 publisher upstream -> single downstream으로 변환

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

여기서는 publisher에서 방출된 array를 단일 string으로 변경해줌

이걸로는 별로 와닿지 않는다...

다수의 upstream으로 부터 무한정 value가 전달되면 memory 이슈가 발생하게 된다

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160810680-32a15669-8860-4af4-b4a2-322fb3051dfa.png)

### Replacing upstream output

#### replaceNil(with:)

optional을 특정 값으로 바꿔줌

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160810987-91d62504-d20b-4bed-86d4-19b54a3bef00.png)

```swift
["A", nil, "C"].publisher
    .eraseToAnyPublisher() // Combine Bug 방어 위해 사용
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

upstream에서 value가 emit되지 않고 completion 되면, value를 하나 넣어주는 것

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

value 를 누적해서 계산할 수 있음

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

### 연습: 전화번호 찾기

1. 10개의 숫자 또는 문자를 받음

2. 연락처를 찾음

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
——— Example of: Create a phone number lookup ———
Contact not found for 000-123-4567
Dialing Marin (408-555-4321)...
Dialing Shai (212-555-3434)...

```

## 🔷 Chapter 4. Filtering Operators

### Filtering basics

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160812284-fede6503-0886-4d09-ba20-e437d464d712.png)

```swift
example(of: "filter") {
let numbers = (1...10).publisher

numbers
  .filter { $0.isMultiple(of: 3) } // collection에 filter 쓰는거랑 똑같음
  .sink(receiveValue: { n in
      print("\(n) is a multiple of 3")
  })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: filter ———
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
  .removeDuplicates() // 연속해서 같은 value가 오면 나중에 오는 value는 무시해줌
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: removeDuplicates ———
hey
there!
want
to
listen
to
mister
?
```

Value가 Equatable을 준수하지 않는 경우

조건을 직접 넣어서 구현 가능

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
  .removeDuplicates(by: { $0.value == $1.value }) // Equatable을 준수하지 않는 객체인 경우에는 비교문으로 구현 가능
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: removeDuplicates2 ———
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
  .compactMap { Float($0) } // nil이면 무시해줌
  .sink(receiveValue: {
      print($0)
  })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: compactMap ———
1.24
3.0
45.0
0.23
```

ignoreOutput은 complete 때만 관심이 있을 때 사용하면 될 듯

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
——— Example of: ignoreOutput ———
Completed with: finished
```

### Finding values

#### first(where:)

lazy한 특성. 만족하는 조건이 나오면, 더 이상 검사를 실행하지 않음

```swift
example(of: "first(where:)") {
let numbers = (1...9).publisher

numbers
  .print("numbers")
  .first(where: { $0 % 2 == 0 }) // lazy 효과를 내는데, 유효한 value 하나를 충족하면 emit 후 complete됨
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: first(where:) ———
numbers: receive subscription: (1...9)
numbers: request unlimited
numbers: receive value: (1)
numbers: receive value: (2)
numbers: receive cancel
2
Completed with: finished
```

#### last(where:)

greedy한 특성. 모든 value를 검사함

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813043-b9ab54ad-84c3-4824-aad1-64fcaa9a3876.png)

```swift
example(of: "last(where:)") {
let numbers = (1...9).publisher

numbers
  .last(where: { $0 % 2 == 0 }) // greedy. 모든 value를 검사함
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}

```

```swift
——— Example of: last(where:) ———
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
——— Example of: last(where:) 2 ———
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
——— Example of: dropFirst ———
9
10
```

drop(while:) 도 lazy한 특성을 띄는데, print("x")가 다섯번만 실행되는걸 알 수 있다.

```swift
example(of: "drop(while:)") {
let numbers = (1...10).publisher

numbers
  .drop(while: { // * 조건 만족하는게 나올때까지 drop
      print("x") // * 한번 조건 만족하면 실행되지 않음
      return $0 % 5 != 0
  })
  .sink(receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: drop(while:) ———
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

viewController에서 화면이 나타나고 나서 어떤 작업을 하고 싶을 때 사용 가능

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
——— Example of: drop(untilOutputFrom:) ———
4
5
```

### Limiting values

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160813632-9dcf880c-fda3-4c0b-bf07-d23b68b0d0d1.png)

```swift
example(of: "prefix") {
let numbers = (1...10).publisher

numbers
  .prefix(2) // 2개만 value를 받고 이후로는 무시. lazy
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: prefix ———
1
2
Completed with: finished
```

```swift
example(of: "prefix(while:)") {
let numbers = (1...10).publisher

numbers
  .prefix(while: { $0 < 3 }) // 한번 조건을 만족하면, complete
  .sink(receiveCompletion: { print("Completed with: \($0)") },
        receiveValue: { print($0) })
  .store(in: &subscriptions)
}
```

```swift
——— Example of: prefix(while:) ———
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
——— Example of: prefix(untilOutputFrom:) ———
1
2
Completed with: finished
```

### 연습문제

1 ~ 100 까지 수에서 50 이후부터 20까지 를 받는데, 짝수만 받기

1. 처음 50개는 스킵

2. 50개 이후 20개까지만 받음

3. 짝수만 받음

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

## 🔷 Chapter 5. Combining Operators

### prepend

- Prepend가 앞에 추가한다는 뜻

- value / collection / publisher를 앞에 추가할 수 있음

- Publisher를 prepend 할때는 앞에 붙인 publisher가 complete 되고나서야 그 다음 publisher가 값을 전달함

### append

Append 는 sequence 맨뒤에 붙는것

### switchLatest

publisher들을 보내는 publisher를 만들었을 떄, 가장 최근에 전달된 publisher로 전환해줌

```swift
let publishers = PassthroughSubject<PassthroughSubject<Int, Never>, Never>()

publishers
    .switchToLatest()
```

버튼을 터치하면 API 호출하는 상황에서, 터치를 여러번 할 수 있는데 switchToLatest를 쓰면 마지막 publisher만 사용하게 된다.

### merge

여러 publisher를 하나로 합쳐줌
merge된 publisher가 전부 complete 되어야, mereg된 publisher도 complete 됨

### combineLatest

모든 publisher들의 value가 하나라도 방출되었을 때 부터, 튜플로 묶어서 전달함
Publisher A에서 1, 2를 방출하고 Publisher B에서 "a"를 방출헀다면 (2, "a")가 튜플로 묶여서 보내진다.
그리고 다시 Publisher B에서 "b"를 방출하면 (2, "b")가 튜플로 묶여서 보내진다.
모든 publisher 들이 complete되어야 combineLatest로 묶인 publisher도 complete 된다

### zip

publisher들의 value를 튜플로 묶어서 전달함
각 publisher들의 value가 짝이 맞는대로 튜플로 만듦
여러번 튜플로 묶이지는 않음

## 🔷 Chapter 6. Time Manipulation Operators

### Shifting time

```swift
let sourcePublisher = PassthroughSubject<Date, Never>()
let delayedPublisher = sourcePublisher.delay(for: .seconds(delayInSeconds), scheduler: DispatchQueue.main)

let subscription = Timer
    .publish(every: 1.0 / valuesPerSecond, on: .main, in: .common)
    .autoconnect() // value emit 전에 connect해야하는데, autoconnect라서 첫번째 subscirption에 connect
    .subscribe(sourcePublisher)
```

1초마다 value를 생산하고, 1.5초 delay 한다.

![img](https://user-images.githubusercontent.com/28912774/160815040-669a1183-e395-4030-872c-48622634dd40.gif)

### Collecting values

- 특정 기간 동안의 value를 모아줌

- ex) 특정 기간 동안의 평균을 구할 때 사용

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

collect된 value들이 모여서 array로 만들어지는 것을 볼 수 있다.

![img](https://user-images.githubusercontent.com/28912774/160815893-fa07c61b-7413-47c1-8701-17e1a60c9196.gif)

그리고 여기에 예제 하나를 더 추가한다.

이번엔 limit로 maxCount를 넣어본다

```swift
let collectMaxCount = 2

let collectedPublisher2 = sourcePublisher
    .collect(.byTimeOrCount(DispatchQueue.main, .seconds(collectTimeStride), collectMaxCount))
    .flatMap { dates in dates.publisher }
```

비슷하게 해서 View를 연결하면 최대치로 설정해둔 2개만 collect되는 것을 볼 수 있다.

![img](https://user-images.githubusercontent.com/28912774/160816029-58c100ac-3d2e-45f0-a388-bc8c80b0da9c.gif)

### Holding off on events

- TextField에 타이핑 다 했을 때 다음 동작을 수행하고 싶을 때가 있음

- debounce, throttle: 이 두개가 맨날 헷갈리는데 잘 정리해보자.

- debounce: 입력 주기가 끝나면 출력

- throttle: 특정 주기안의 첫번째 or 마지막 value 출력

#### debounce

- 입력 주기가 끝나면 마지막 값 출력

- 추가로 value가 들어오면 주기가 다시 갱신됨

```swift
let subject = PassthroughSubject<String, Never>()

let debounced = subject
  .debounce(for: .seconds(1.0), scheduler: DispatchQueue.main)
  .share() // 여러 subscriber가 동일한 result를 받기 위함
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

- 처음에 구독한 시점에 value를 한번 바로 방출

- latest: false로 주면 특정 주기 안의 첫번째 value 출력

- 주기를 1초 간격으로 설정함

- 버튼 터치를 여러번 할 수 있는 경우에 사용하면 좋을 듯

![img](https://user-images.githubusercontent.com/28912774/160816532-a624bde1-07eb-43f5-835e-9b2c4adb6814.gif)

이번에는 latest: true로 옵션을 설정해보자

그러면 특정 주기안의 마지막 value를 출력!

![img](https://user-images.githubusercontent.com/28912774/160816582-c7a5b976-af07-40eb-af78-6b0a48f39be3.gif)

### Timing out

특정 시간안에 이벤트가 없으면 종료

```swift
let subject = PassthroughSubject<Void, Never>()

let timedOutSubject = subject.timeout(.seconds(5), scheduler: DispatchQueue.main)
```

![img](https://user-images.githubusercontent.com/28912774/160816705-dec74989-210f-45a2-9532-7ad1140a7cdf.gif)

timeout 발생하면 finish 대신에 error를 던지는 경우가 더 흔한 케이스

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

- value 사이의 시간을 계산하고 싶을 때 사용

- DispatchQueue를 사용할 경우: 나노초 단위 DispatchTimeInterval 로 리턴됨

- Runloop를 사용할 경우: 초단위로 리턴됨

```swift
let subject = PassthroughSubject<String, Never>()

let measureSubject = subject.measureInterval(using: DispatchQueue.main)

let subjectTimeline = TimelineView(title: "Emitted values")
let measureTimeline = TimelineView(title: "Measured values")

// ...중략...

let subscription1 = subject.sink {
    print("+\(deltaTime)s: Subject emitted: \($0)")
}

let subscription2 = measureSubject.sink {
    print("+\(deltaTime)s: Measure emitted: \(Double($0.magnitude) / 1_000_000_000.0)")
}
```

![img](https://user-images.githubusercontent.com/28912774/160817132-e575cd22-8fdc-48d5-a0ea-dcb74d1d1490.gif)

## 🔷 Chapter 7. Sequence Operators

### Finding values

#### min

greedy: publisher가 finish될 때 까지 기다림

```swift
[1, -50, 246, 0].publisher.min() // -50
```

value가 Comparable을 준수하지 않는다면?
Comparable을 준수하지 않는 객체가 있으면 비교문을 직접 넣어서 min을 사용할 수 있다.
아래 예제에서는 억지로 Comparable을 준수하지 않도록 만든 다음 min을 찾도록 해보는 것. 조금 억지지만 이렇게 하면 결과값에서 다시 String으로 변환해서 체크해볼 수 있다.

```swift
["12345", "ab", "hello world"]
    .compactMap { $0.data(using: .utf8) } // [Data]
    .publisher
    .min(by: { $0.count < $1.count })
```

#### max

greedy: publisher가 finish될 때 까지 기다림

```swift
["A", "F", "Z", "E"].publisher.max() // Z
```

#### first

lazy: 첫번째 값을 만나면 값 방출 후 finish

```swift
["A", "B", "C"].publisher.first() // A
```

#### first(where:)

이건 앞서 first() 보다 더 많이 쓸 것 같음
단순히 제일 처음에 오는 value 보다 매칭되는 첫번째 값을 받아보는게 더 유용해 보임

```swift
["J", "O", "H", "N"]
    .first(where: { "Hello World".contains($0) })
```

#### last

completion .finish 이후에 값 방출

```swift
["A", "B", "C"].publisher.last() // C
```

#### output(at:)

index 번째의 value를 방출함.
특정 index의 value를 찾는거라서 1개씩 request 함.

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

특정 index 범위 안의 값들을 방출함

```swift
["A", "B", "C", "D", "E"].publisher
    .output(in: 1...3) // 1, 2, 3 각각 방출함
```

### Querying the publisher

#### count

finish 후에 몇 개의 value를 받았는지 방출함

```swift
let publisher = ["A", "B", "C"].publisher

publisher
    .print("publisher")
    .count()
    .sink(receiveValue: { print("I have \($0) items") }) // 3
    .store(in: &subscriptions)
```

#### contains

만족하는 값 있으면 true/false 방출하고 종료됨

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

1. C 까지 검사하고
2. 조건 만족해서 cancel
3. true 방출

여기서 letter = "F" 였다면

1. E 까지 전부 검사하고

2. finish
3. false 방출

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
    .contains(where: { $0.id == 800 || $0.name == "Marin Todorv"}) // 이런식으로 조건문 작성
    .sink(receiveValue: { contains in
        print(contains ? "Criteria matches!" : "Couldn't find a match for the criteria")
    })
    .store(in: &subscriptions)
```

#### allSatisfy

모든 value가 조건을 만족하는지 체크
중간에 하나라도 만족하지 않으면 .cancel / 전부다 만족하면 .finish
결과(Bool) 방출

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

upstream의 값을 누산(accumulate)해서 complete시에 값을 방출함

```swift
let publisher = ["Hel", "lo", "Wor", "ld", "!"].publisher

publisher
    .print("publisher")
    .reduce("") { accumulator, value in
        accumulator + value
    } // .reduce("", +) 이렇게도 표현 가능
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

**scan과 reduce가 다른점**

scan은 누산된 값을 매번 방출함
reduce는 complete 되고 누산된 값을 방출함

## 🔷 Chapter 8. Debugging

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

print("이름") 으로 publisher에 붙여주면 간단하게 이벤트들을 출력해줍니다.

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

아직까진 어디에 쓸지 모르곘지만, 반복적으로 print하고 싶은 내용이 있으면 프로젝트에서 만들어서 쓸 수 있을 것 같아요.

그리고 네트워크 진행 상황을 출력해보고 싶다면 handleEvents 를 사용할 수 있습니다.

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

## 🔷 Chapter 9. Timers

### RunLoop

특정 RunLoop 상에서 이벤트를 발생시킬 수 있습니다.

1초마다 한번씩 print 합니다.

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

당연히 subscription을 cancel 시켜버릴 수도 있음

아래 예제에서는 3초 동안만 작업을 수행 후 cancel 됨

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

이것도 근데 RunLoop 상에서 작동합니다.

main 이랑 current는 어떻게 다르게 써야할지 아직 잘 모르겠습니다.

RunLoop에 대한 공부가 좀 더 필요해보입니다.

```swift
let main = Timer.publish(every: 1.0, on: .main, in: .common)
let current = Timer.publish(every: 1.0, on: .current, in: .common)
```

subscription 시작 할 때 timer도 시작시키는 방법이 있음!

이건 굉장히 실용적인 듯

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

RunLoop는 딜레이 될 가능성이 있어서, 디스패치큐를 더 많이 사용할 듯도 합니다.

이것도 1초마다 print 해줍니다.

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

## 🔷 Chapter 10. Key-Value Observing

### KVO

OperationQueue의 operation 개수가 변경되면 sink에서 이벤트를 받아볼 수 있습니다.

```swift
let queue = OperationQueue()

let subscription = queue.publisher(for: \.operationCount)
    .sink {
        print("Outstanding operations in queue: \($0)")
    }
```

커스텀으로 만들려면?

1. NSObject 상속

2. @objc dynamic 키워드

KVO가 Objc를 통해 지원되기 때문에 NSObject와 @objc dynamic 를 통해서 사용 가능합니다.

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
구독할 때 옵션을 줄 수 있습니다.

1. .inital : 초기 값을 방출.
2. .prior : 변화가 발생했을 때 이전 값과 새로운 값을 방출.

앞의 예제에서 options: [] 로 추가하면 초기값 안받습니다.

KVO가 @objc 키워드가 붙어서 optional이 안되는데, 초기값을 받기 싫은 경우에 이렇게 사용하면 됩니다.

```swift
let subscription = obj.publisher(for: \.integerProperty, options: [])
```

```swift
integerProperty changes to 100
integerProperty changes to 200
```

.prior는 이전값과 새로운값을 방출하는데

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

@Published 가 걸려있는 프로퍼티가 변경되는것을 감지할 수 있습니다.

어떤 프로퍼티가 변경되었는지는 구분 못합니다.

SwiftUI 처럼 ViewModel이 변경되면 View를 갱신해야할 때 사용할 수 있을 것 같습니다.

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

## 🔷 Chapter 11. Resource Management

### share

value 타입이 아닌 reference 타입의 publisher를 공유할 수 있도록 해줍니다.

주의할 점은 이미 complete 된 share publisher를 구독하면 complete만 받게 됩니다.

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

connect()를 호출해야 이벤트를 시작합니다.

그래서 subscription을 다 만들어두고, connect 할 수 있어서 편합니다.

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

future는 클로저 안의 동작을 즉시 실행합니다.

그리고 구독하면 그 값을 전달합니다.

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

## 🔷 Chapter 12. Error Handling

### Never

publisher가 fail 이벤트가 절대 일어나지 않는 경우 사용합니다.

예를들어 Just를 확인해보면 Failure가 Never로 정의된 것을 볼 수 있습니다.

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160823941-80a08a8c-b1cf-4056-a888-136b21e9dcd7.png)

### setFailureType

infallible publisher 를 만드는 방법!

#### assign(to:on:)

![img1 daumcdn](https://user-images.githubusercontent.com/28912774/160824088-a4f37516-7c4b-4208-b694-cb59db05d7c0.png)

assign 이 걸려있는 곳에서 setFailureType을 하려고 하면 컴파일이 되지 않습니다.

Failure가 Never 일때만 assign이 가능한것으로 보입니다.

#### assertNoFailure

에러가 발생헀을 때 assert를 걸어서 개발자가 인지하게 만드는 방법입니다.

assert를 거는건 평소에도 많이 사용하는 방법입니다.

필수적으로 보장되어야 하는 값이 있다면 이것을 사용하면 유용할 듯 합니다.

```swift
Just("Hello")
    .setFailureType(to: MyError.self)
    .tryMap { _ in throw MyError.ohno }
    .assertNoFailure()
    .sink(receiveValue: { print("Got value: \($0)") })
    .store(in: &subscriptions)
```

tryMap 부분에서 일부러 에러를 발생시키는 예제입니다.

에러를 만나면 아래와 같이 에러가 발생합니다.

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

이런 식으로 코드를 작성했을 때, map 부분에서 컴파일 에러가 발생합니다.

```swift
Invalid conversion from throwing function of type '(String) throws -> _' to non-throwing function type '(String) -> T'
```

여기서 map -> tryMap 으로 변경하면 컴파일 에러가 사라집니다.

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
——— Example of: tryMap ———
Got value: 5
Got value: 5
Completed with failure(__lldb_expr_13.(unknown context at $10816a834).(unknown context at $10816a8d0).(unknown context at $10816a8d8).NameError.tooShort("Shai"))
```

#### Mapping errors

```swift
.tryMap { throw NameError.tooShort($0) }
```

## 🔷 Chapter 13. Schedulers

### Operators for scheduling

2가지 기본 operator가 있음
`subscribe(on:) subscribe(on:options:)`
create 특정 스케줄러 위에서 subscription을 만들어줌.
subscription에 대한 설명이 좋은데 start the work 이라 되어 있음.
`receive(on:) receive(on:options)`
delivers 특정 스케줄러 위에서 value를 전달해줌.

### subscribe(on:) 소개

- Publisher가 Subscriber를 받음. Subscription 생성.

- Subscriber가 Subscription을 받음. request value

- Publisher 작업 시작 (Subscription을 통해서)

- Publisher 값 방출 (Subscription을 통해서)

- Operators는 value를 변경함(transform)

- Subscriber는 최종 결과값을 받음

1~3 까지 보통 작업을 요청한 스레드에서 바로 일어남
그러나 subscribe(on:)를 쓰는 순간, 모든 operation 들은 특정 스케줄러에서 작동함

예시)

```swift

let computationPublisher = Publishers.ExpensiveComputation(duration: 3)

let queue = DispatchQueue(label: "serial queue")

let currentThread = Thread.current.number // 플레이 그라운드의 Main Thread 에서 작동
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
ExpensiveComputation subscriber received on thread 5 // subscribe(on:)의 영향
Beginning expensive computation on thread 5 // subscribe(on:)의 영향
Completed expensive computation on thread 5 // subscribe(on:)의 영향
Received computation result on thread 1: Computation complete  // receive(on:)의 영향
```

subscribe(on:) 을 통해서 비동기 동작을 실행
receive(on:) 을 통해서 비동기 동작 후 Main 스레드에서 UI 업데이트를 해줄 수 있음

### Scheduler implementations

애플은 Scheduler 프로토콜을 구현한 객체를 몇 가지 제공한다.

- `ImmediateScheduler`: 현재 스레드에서 작동시킴. `subscribe(on:)` 이나 `receive(on:)`으로 조작하지 않는 한 작동되는 기본 스케줄러.

- `RunLoop`: Foundation의 Thread 객체에 묶여 있음. 묶여있는게 뭘까? 종속적??

- `DispatchQueue`: serial 또는 concurrent

- `OperationQueue`: work item의 실행을 조절(regulate: 조절, 규제)하는 Queue

### ImmediateScheduler

즉시 실행됨: schedule(after:) 같은 거 없음

### RunLoop scheduler

대부분 DispatchQueue를 사용하는게 유용하지만, 어떤 경우에서는 RunLoop를 쓰는게 유용할 때가 있음
Timer, UIKit, AppKit이 RunLoop 기반으로 작동함
User input을 위한 모드를 실행시켜줌

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

Combine: Asynchronous Programming with Swift - [https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift/v2.0](https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift/v2.0)

코찐 기술 블로그 - [https://cozzin.tistory.com/10](https://cozzin.tistory.com/10)
