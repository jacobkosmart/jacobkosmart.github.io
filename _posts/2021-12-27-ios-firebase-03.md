---
title: "Firebase Remote Config, Firebase A/B Testing
"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## 🔷 Firebase Remote Config

> Firebase Remote Config official docs - https://firebase.google.com/docs/remote-config

### 특징

- 배포 없이, 엡데이트 다운로드 없이 앱 변경 가능

- 기본값 설정 후 값 재정의

- 클라우드 기반 key-value 저장소

### 주요 기능

📌 앱 사용자층에 변경사항을 빠르게 적용 : 업데이트 없이 앱의 UI/UX 변경 지원

📌 사용자층의 특정 세그먼트에 앱 맞춤 설정 : 앱 버전, 언어 등으로 분류된 사용자 세그먼트별 환경 제공

📌 A/B 테스트를 실행하여 앱 개선 : 사용자 세그먼트별로 개선사항을 검증 후 점진적 적용

### 🔑 Remote Config 로 팝업 제어하기

원격 구성은 Key, Value 형태하며, 기본값을 업데이트 하는 방식입니다. ViewController 에서 원격 controller 의 값을 불러 와서 noticeViewController 의 값을 제어 하는 구성입니다

#### 기본 viewController 에 원격 구성 플렛폼을 가지고 오기

원격 구성은 key, value의 형태의 dictionary 타입입니다. property 파일을 생성해서 default 값을 설정해 줍니다

![image](https://user-images.githubusercontent.com/28912774/147515489-01f7ad60-eaab-4f2a-81ed-2742deffa6de.png)

- 그다음에 ViewController 에서 FirebaseRemoteConfig 와 Plist 를 연결시킵니다

```swift
// in ViewController.swift

import FirebaseRemoteConfig

class ViewController: UIViewController {

	// 객체 생성
	var remoteConfig: RemoteConfig?

	// MARK: LifeCycle
	override func viewDidLoad() {
		super.viewDidLoad()

		remoteConfig = RemoteConfig.remoteConfig()

		let setting = RemoteConfigSettings()
		// 테스트를 위해서 새로운 값을 fetch 하는 interval 을 최소화 해서 최대한 자주 원격 데이터를 가지고 올수 있게 interval 을 0으로 설정함
		setting.minimumFetchInterval = 0
		remoteConfig?.configSettings = setting
		// 기본값을 Plist와 연결하여 설정
		remoteConfig?.setDefaults(fromPlist: "RemoteConfigDefaults")
	}
}

```

#### Firebase console 과 연결하기

- Firebase web console 에서 Remote config 메뉴에 구성 만들기를 실행 합니다

- 첫 번째 매개 변수 만들기 실행: property list 를 추가한것과 동일하게 console 에도 추가 시킵니다

![image](https://user-images.githubusercontent.com/28912774/147515898-2089c71a-1687-4667-9709-ba6e1d7e2682.png)

```swift
// in ViewController.swift

// RemoteConfig
extension ViewController {

	// MARK: Methods
	// Notice fetch 하기 (가져오기)
	func getNotice() {
		guard let remoteConfig = remoteConfig else { return }

		remoteConfig.fetch {[weak self] status, _ in
			if status == .success {
				remoteConfig.activate(completion: nil)
			} else {
				print("ERROR: Config not fetched")
			}

			guard let self = self else { return }
			// isHidden 이 false 일때 보여질때면
			if !self.isNoticeHidden(remoteConfig) {
				let noticeVC = NoticeViewController(nibName: "NoticeViewController", bundle: nil)
				noticeVC.modalPresentationStyle = .custom
				noticeVC.modalTransitionStyle = .crossDissolve

				// optional 이기 때문에 없으면 ""
				// 참고 firebase 에서 참조 값을 가지고 올때 \\ 가 2번 되서 fetch 되기때문에 swift 에서 값을 인식하지 못하는 case 가 발생되기 때문에 따로 형식을 지정해줘야 함 (그래야 여러줄을 입력하더라도 잘 인식하게 됨)
				let title = (remoteConfig["title"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")
				let detail = (remoteConfig["detail"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")
				let date = (remoteConfig["date"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")

				// 각각의 값을 noticeVC 에 넣어줌
				noticeVC.noticeContents = (title: title, detail: detail, date: date)
				self.present(noticeVC, animated: true, completion: nil)
			}
		}
	}

	// 공지사항 숨기기 method
	func isNoticeHidden(_ remoteConfig: RemoteConfig) -> Bool {
		return remoteConfig["isHidden"].boolValue
	}
}
```

web console 에서 공지 사항이 작동하게 매개 변수 값을 변경하고 `viewWillAppear` 에서 `getNotice()` method 가 실행하게 되면 공지사항 팝업이 나타 나게 됩니다

```swift
// in ViewController.swift

override func viewWillAppear(_ animated: Bool) {
	super.viewWillAppear(animated)
	getNotice()
}
```

![image](https://user-images.githubusercontent.com/28912774/147516808-cd5e09d2-8a13-4524-ada8-a685fec7d138.png)

<img width="300" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/147516844-de21515c-bc91-407d-b44b-003a9bfeb06a.png">

#### value 조건 설정하기

- Remote Config 값이 특정 사용자에게만 보일 수 있게도 설정할 수 있습니다

아래는 기기 system 언어가 english 일경우에 title 이 영어로 나타 낼 수 있게 하는 예시 설정 입니다

- web console 에서 매개 변수 값에서 조건을 추가 시키고 게시 합니다

![image](https://user-images.githubusercontent.com/28912774/147519066-70755b2d-7ac5-4b76-a0e7-779bd267bb6b.png)

기기 설정에서 기본언어를 English 로 변경하게 되면 영어로 된 Notice title 을 확인 할 수 있습니다

<img width="300" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/147519584-14779ae0-c2c2-48e3-91ea-429bfbce8a00.png">

## 🔷 Firebase A/B Testing

> Firebase Firebase A/B Testing official docs - https://firebase.google.com/docs/ab-testing

### 특징

- Google Analytics, Firebase 예측을 통한 사용자 타겟팅

- 원격 구성 (Remote Config), 알림 작성기(Cloud Messaging) 활용

- 제품, 마케팅 실험을 쉽게 실행, 분석, 확장

### 주요 기능

📌 제품 환경 테스트 및 개선 : 앱 동작 및 모양을 변경하여 최적의 제품 환경 확인

📌 사용자의 재참여를 유도할 방안 모색: 앱 사용자를 늘리기에 가장 효과적인 문구와 메시징 설정

📌 새로운 기능의 안전한 구현: 작은 규모의 사용자 집합을 대상으로 원하는 목표를 달성할 수 있는지 확인

📌 '예측된' 사용자 그룹 타겟팅: 특정 행동을 할 것으로 예측된 사용자에 A/B 테스트를 실시

### 🔑 A/B Testing 으로 팝업 제어하기

별도 공지사항이 없고, App 사용이 원활할 경우 Event Alert 을 보여 주는 예시 코드 입니다

만약 A, B 의 각각의 다른 문구를 사용했을 경우 어떠한 방식이 사용자가 더 참여를 많이 하는지 알아 볼 수 있습니다

#### A/B Testing 실험 만들기

- web console 에서 A/B Testing 를 선택하면, 실험을 어떻게 구성할지 실험만들기에서 원격 구성을 선택합니다.

![image](https://user-images.githubusercontent.com/28912774/147519952-892ec063-a67c-4872-bde6-592707b6a7e8.png)

- 사용자의 50% 만 보일수 있게 타겟팅 설정을 합니다

![image](https://user-images.githubusercontent.com/28912774/147520012-c1509a66-1db6-434f-9195-9ffabeb112fa.png)

- 목표는 이미 설정된 수익률, 광고수익, 유지등을 설정 할 수 있으나, 얼마나 클릭을 많이 하는지 보기 위함이기 때문에 custom 으로 promotion_alert 이라고 생성해 줍니다

- 변형에서는 값설정인데, 기준의 되는 값과 변경되는 비교값 (Variant A) 을 정할 수 있습니다

![image](https://user-images.githubusercontent.com/28912774/147520556-b6bb4214-f8b8-4ba1-9d5c-e0951068f282.png)

- 실험을 저장하고, 실험 시작을 실행합니다

- Remote Config 의 가게 되면 message key, value 생성 되었음을 확인합니다.

![image](https://user-images.githubusercontent.com/28912774/147520852-6a1e1952-4eb2-485b-a796-f10e29c0bd4a.png)

```swift
// in ViewController.swift

// A/B Testing method
extension ViewController {
	func showEventAlert() {
		guard let remoteConfig = remoteConfig else { return }

		remoteConfig.fetch { [weak self] status, _ in
			if status == .success {
				remoteConfig.activate(completion: nil)
			} else {
				print("Config not fetched")
			}

			// message 가져기
			let message = remoteConfig["message"].stringValue ?? ""
			// confrimAction
			let confirmAction = UIAlertAction(title: "확인하기", style: .default) { _ in
				// Google Anlytics : confirm btn 을 누를때 마다 google anlytics 에서 기록하게 만듬
				Analytics.logEvent("promotio_alert", parameters: nil)
			}
			let cancelAction = UIAlertAction(title: "취소", style: .cancel, handler: nil)
			let alertController = UIAlertController(title: "깜짝이벤트", message: message, preferredStyle: .alert)
			alertController.addAction(confirmAction)
			alertController.addAction(cancelAction)

			// 화면에 alertController 입력
			self?.present(alertController, animated: true, completion: nil)
		}
	}
}

```

- 버튼이 눌릴때 마다 google analytics 에 기록될 수 있게 확인하기 (xcode 에서 product -> Scheme -> Edit Scheme 에서 Run 의 Arguments passed on Launch 에서 아래의 값을 추가함)

![image](https://user-images.githubusercontent.com/28912774/147538283-0e597952-ba11-4b45-9ecc-dbe4a18e116c.png)

<img width="300" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/147538801-5199a8ab-b516-4a32-9de2-ec8373e09fd4.png">

확인하기를 누르게 되면 web console 에서 `DebugView` 의 `promotion_alert` 의 event 가 생성됨을 확인할 수 있습니다

![image](https://user-images.githubusercontent.com/28912774/147539029-25ad5cb1-5af6-433f-ab43-e4209df4020a.png)

- 50% 의 확률로 메세지가 변하게 됨이 잘 되는것을 확인하기 위해서는 `AppDelegate` 에서 debug mode 에서 확인 할 수 있습니다. (FIS 인증 토큰을 통해 확인하기)

```swift
// in AppDelegate.swift

import Firebase

@main
class AppDelegate: UIResponder, UIApplicationDelegate {


	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

		// Firebase init
		FirebaseApp.configure()

		// firebase 가 각각의 기기에 인증한 token 값을 console 에서 확인하기
		Installations.installations().authTokenForcingRefresh(true) { result , error in
			if let error = error {
				print("ERROR")
				return
			}
			guard let result = result else { return }
			print("Installtion auth token : \(result.authToken) 임")
		}
		return true
	}

```

위 코드 작성 후에 console 참에 auth token 이 생성됨을 확인하고, 복사합니다

![image](https://user-images.githubusercontent.com/28912774/147540030-0507a1ae-0f7a-4ecf-8d56-8c2a41fd1010.png)

- web console 에서 remote Config 에서 생성된 실험에서 테스트 기기 에 FIS 인증 토큰을 붙여 넣기 합니다

![image](https://user-images.githubusercontent.com/28912774/147540451-f0152713-4acd-4368-bb8a-1f17fa9e7485.png)

위와 같이 변수를 기준, Variant A 로 바꾸게 되면 고정된 alert 창이 뜨게 되어 조절 할 수 있습니다

## 정리

- A/B testing 을 통해 정식 업데이트 전 테스트를 진행해서 새 기능, UI 변경 등을 통해 사용자가 좋아 하는지 싫어 하는지를 미리 test 개념으로 측정 할 수 있는 방법입니다

- 아무리 잘만들고 좋은 기능이라도 사용자 입장에서 기존 방식이 선호 된다면, 서비스 유지는 힘들고 UX 측면에서 좋지 않기 때문에 불확실성에 대한 리스크를 테스트를 통해 줄일 수 있게 됩니다

- 스타트업이나, 소규모 프로젝트에서 많은 버전 업을 하게 되는 경우 특히 이러한 A/B testing 을 통해서 UX 을 통계적으로 파악 할 수 있게 됩니다

- 상황에 따라서 target 별로 세밀하게 세분화 해서 타켓팅 나누워서 테스트 하기도 합니다

- 기본적으로 이러한 test 를 진행하려면 전제 되어야 되는것이 유의미한 실험을 설계, 결과로 데이터를 분석하고, 데이터 관련 전문 지식, 인력이 필요하나, Google analytics 를 통해서 데이터 분석에 대한 전문 지식없어도 firebase 를 통해서 효과적인 test 를 진행하고 구성 할 수 있습니다

- 실제로 개발 환경에서 앱을 배포 후에 UX 나 사용자 action 이 잘 발생하는지에 대한 것에 feedback 에 대한 자료가 필요한 경우가 많습니다.

- 최적의 사용자 경험을 개발과 함께 한다면 보다 나은 UX 의 발전이 있기 때문에 A/B testing 같은 test tool 의 중요성은 증가 될 것입니다

> For more Details Code - https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice

---

🔶 🔷 📌 🔑 👉

## 🗃 Reference

creditCard-iOS-practice code - [https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice](https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice)

해리의 유목코딩 - [https://medium.com/harrythegreat/android-remote-config-%EC%9E%98-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-f8b04ef2645a](https://medium.com/harrythegreat/android-remote-config-%EC%9E%98-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-f8b04ef2645a)

Firebase Tutorial: iOS A/B Testing - [https://www.raywenderlich.com/20974552-firebase-tutorial-ios-a-b-testing](https://www.raywenderlich.com/20974552-firebase-tutorial-ios-a-b-testing)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
