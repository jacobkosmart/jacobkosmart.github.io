---
title: "Firebase Authentication"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## 🔷 Firebase / Firebase Authentication

### Firebase?

> Firebase official documentation - https://firebase.google.com/docs

![image](https://user-images.githubusercontent.com/28912774/146756206-35f3114a-7fe5-4b25-9d6e-ecfdcb735695.png)

- 사용자 인증(Authentication), 실시간 DB(Cloud Firestore, Realtime Database), push 알림을 원격으로 앱 내의 특정 사용자, 전체 사용자에게 app 표시를 할 수 있는기능(Cloud Messaging) 등을 제공합니다

- 특정 segment 에서 해당되는 사용자를 분류하기(Google Analytics), 분류하는 사용자에게 별도의 메세지, 화면을 보여주는것(A/B Testing, Remote Config), 사용자 행동분석 데이터 수집 (Google Analytics)의 기능을 제공합니다

- Firebase 를 통해서 통합 backend service 를 제공함으로써, 별도의 개발없이 서버리스로 대체해서 DB 환경을 구축 할 수 있습니다.

### Firebase Auth

#### OAuth란?

- 사용자 인증 방식에 대한 업계 표준

- ID/PW 를 노출하지 않고 OAuth를 사용하는 업체의 API 접근 권한을 위임 받음

- 기본 개념

  - **User** Service Provider에 계정을 가지고 있는 사용자

  - **Consumer** Service Provider 의 API(제공 기능)를 사용하려는 서비스 (앱, 웹 등)

  - **Service Provider** OAuth를 사용하여 API 를 제공하는 서비스

  - **Access Token** 인증 완료 후 Service Provider의 제공 기능을 이용할 수 있는 권한을 위임받은 인증 키

- 예시 flow: User 사용자가 기기로 App 에서 google 로 로그인 요청 -> App 에서 Google(Service Provider) 에 request Token 을 요청 -> Google(Service Provider) 가 User에게 권한 위임 확인 요청을 하게 됨(AppName 이 Google 계정에 엑세스 하려고 합니다.) -> User가 권한 위임을 승인함 -> Google(Service Provider) 가 App 에 Access Token(사용자의 email, 이름등 google 이 가지고 있는 사용자의 정보를 포함) 을 보냄 -> App 에서 로그인 완료 승인됩을 유저에 UI에 나타나게 됨

- 위의 역활들을 Firebase 에서 대신 처리 하게 되는것임 (Request Token, Access Token)

#### Firebase Authentication 제공 업체

![image](https://user-images.githubusercontent.com/28912774/146763717-031a7517-f4c0-4b38-839c-ae4b324a1d20.png)

### 🔷 Firebase Authentication 초기 설정

- Firebase console 에서 프로젝트 추가 한다음에, ios 앱을 추가하여 시작하기를 누르고 xcode 내의 프로젝트 `Bundle identifier` 를 Apple 번들 ID 에 추가 시킵니다. 그리고, 앱 등록을 합니다

- 구성파일에 생성된 `GoogleService-Info.plist` 를 다운로드해서 프로젝트 root 경로에 추가 시킵니다

- CocoaPods 을 통해 Firebase SDK 패키지를 프로젝트 안에 설치 합니다

```bash
pod init
```

```ruby
# in Podfile
...
  # Pods for 08_firebase_login_app
  pod 'Firebase/Auth'

...
```

- 추가하고 terminal 에서 `pod install` 해서 Firebase/Auth SDK 설치

> 설치 자세히 보기 - https://firebase.google.com/docs/ios/installation-methods?authuser=0#cocoapods

- Pod 을 추가하면 xcode 를 workspace 로 변경하고 프로젝트 시작해야 됨

- Root 경로에 AppDelegate 에 가서 firebase initialization 해줘야 App 에서 실행이 됩니다

```swift
import UIKit
import Firebase

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
		// Override point for customization after application launch.
		// Firebase init
		FirebaseApp.configure()

		return true
	}
```

## 🔷 이메일/비밀번호 로그인/로그아웃

- Authentication 메뉴에 가서 시작하기 하고 제공 업체에서 email/password 를 활성 화 시킵니다

![image](https://user-images.githubusercontent.com/28912774/146885310-c1d4ade7-a000-4c10-a4b9-111edcc9756c.png)

```swift
// in  EnterEmailViewController.swift

	// MARK: Actions
	@IBAction func tabNextBtn(_ sender: UIButton) {
		// Firebase email/ password 인증
		let email = emailTextField.text ?? "" // nil이면 optional 로 빈값으로 처리
		let password = passwordTextField.text ?? ""

		// Firebase 신규 사용자 생성
		Auth.auth().createUser(withEmail: email, password: password) { [weak self] authResult, error in
			guard let self = self else { return } // 일시적으로 Strong 참조 되게 함
			self.showMainViewController() // 로그인이 재대로 끝났을때 mainView 로 이동
		}
	}

	// MARK: Methods
	// 로그인 성공시 mainViewController 로 이동 하는 method
	private func showMainViewController() {
		let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
		let mainViewController = storyboard.instantiateViewController(identifier: "MainViewController")
		mainViewController.modalPresentationStyle = .fullScreen
		navigationController?.show(mainViewController, sender: nil)
	}

```

### 로그아웃 설정

```swift
// in MainViewController.swift

	// MARK: Actions
	@IBAction func tabLogoutBtn(_ sender: UIButton) {
		// 로그아웃 method
		let firebaseAuth = Auth.auth()
		do { // error 가 발생하지 않으면
			try firebaseAuth.signOut()
			// RootViewController 로 이동
			self.navigationController?.popToRootViewController(animated: true)
		} catch let singOutError as NSError {
			debugPrint("ERROR : signout \(singOutError.localizedDescription)")
		}

	}
```

## 🔷 Google 로그인/로그아웃

### 사전작업

- 먼저 firebase 사이트에서 Google 을 sign-in-method 제공업체로 등록 합니다

![image](https://user-images.githubusercontent.com/28912774/147017551-eaa3ce4a-d071-4590-9553-2c938cd4499f.png)

- Google login 을 사용하기 위해서는 추가로 Podfile 에서 googleSignIn 페키지를 설치해 줍니다

```ruby
#  in Podfile

target '08_firebase_login_app' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for 08_firebase_login_app
  pod 'Firebase/Auth'
  pod 'GoogleSignedIn'
end
```

- Google 로그인을 사용하려면, 맞춤 URL schema 를 구성해주여야 합니다. 처음 firebase 연결에 사용된 `GoogleService-info.plist` 파일에서 `REVERSED_CLIENT_ID` 값을 복사해서 프로젝트 `Targets` 의 `Info` 에서 `URL Types` 에 `URL Schemes` 에 복사한 값은 붙여 넣기 해 줍니다 (이 값은 앱서비스마다 각각 다스 값을 가지고, 이 값을 통해서 Google 은 권한을 위임할것을 구분하게 됨)

![image](https://user-images.githubusercontent.com/28912774/147018966-7283180c-443c-4b72-908b-c1e48bf4b670.png)

### Google SignIn delegate protocol 추가

> Google 로 로그인 official reference - https://firebase.google.com/docs/auth/ios/google-signin?hl=ko#swift

> GoogleSignIn v.6.0.0 기준 - https://developers.google.com/identity/sign-in/ios/release

![image](https://user-images.githubusercontent.com/28912774/147019998-1d89f276-9084-493c-afdd-56cfec3f0554.png)

#### 변경된 중요 checkPoint (v.6.0.0 이후)

📌 **GIDSignIn sharedInstance** is now a class property.

- 기존에 method 로 제공되었던 `sharedInstance()` 가 class 의 property 로 변경되었습니다

- `GIDSignIn.sharedInstance()` => `GIDSignIn.sharedInstance`

📌 `AppDelegate.swift` 에서 `GIDSignInDelegate` 자체가 삭제 되었습니다(따로 delegate 를 구현하지 않아 도 됩니다)
(The GIDSignInDelegate protocol has been removed in favor of GIDSignInCallback and GIDDisconnectCallback blocks.)

📌 `GIDSignInButton` no longer makes calls to `GIDSignIn` internally and will need to be wired to an `IBAction` similar in order for you to call `signInWithConfiguration:presentingViewController:callback:` to initiate a sign-in flow. (GIDSignInButton 이 자동적으로 GIDSignIn 을 호출하지 않으므로 우리가 기존에 AppDelegate 내에 GIDSignInDelegate 을 통해 구현한 것을 googleLoginButtonAction IBAction 메소드 내에 구현해주어야 합니다)

```swift
 // AppDelegate.swift

import UIKit
import Firebase
import GoogleSignIn

@main
class AppDelegate: UIResponder, UIApplicationDelegate{

	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
		// Override point for customization after application launch.
		// Firebase init
		FirebaseApp.configure()
		return true
	}

	// Google 의 인증 process 가 끝날때, app 이 수신하는 url을 처리하는 method
	func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
		return GIDSignIn.sharedInstance.handle(url)
	}
	.....
}
```

```swift

// in LoginViewController.swift

	// MARK: Action
	// Google Login action
	@IBAction func tapGoogleLoginBtn(_ sender: UIButton) {
		// 버튼 누르면 google login webView 가 나오게 하는 logic
		//
		guard let clientID = FirebaseApp.app()?.options.clientID else { return }
		let config = GIDConfiguration(clientID: clientID)
		GIDSignIn.sharedInstance.signIn(with: config, presenting: self) { [unowned self] user, error in
			if let error = error {
					print("ERROR", error.localizedDescription)
				return
			}
			guard let authentication = user?.authentication,
						let idToken = authentication.idToken else { return }
			let credential = GoogleAuthProvider.credential(withIDToken: idToken, accessToken: authentication.accessToken)

				// 로그인 완료된 credential 값을 mainViewController 에 넘기는 method 실행
				Auth.auth().signIn(with: credential) { _, _ in
						self.showMainViewController()
				}
		}
	}

	// MARK: Methods
	// login 된 credeatial 값을 mainViewController 에 넘기는 method
	private func showMainViewController() {
		let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
		let mainViewController = storyboard.instantiateViewController(identifier: "MainViewController")
		mainViewController.modalPresentationStyle = .fullScreen
		UIApplication.shared.windows.first?.rootViewController?.show(mainViewController, sender: nil)
	}

```

<img width="300" alt="스크린샷" src="https://user-images.githubusercontent.com/28912774/147026623-71513c2f-262f-4f2e-88d0-758b2d9770a7.gif">

#### Change password

- Firebase 는 사용자 관리에대한 다양한 method 등을 제공하고 있는데, 가장 자주 사용되는 비밀번호 것이 비밀번호 변경입니다.

소셜 ID 로 로그인 한 경우에는 App 자체 내에서 비밀번호 변경은 할 수 없고, email/ password 방식으로 등록한 계정에 한해서 `sendPasswordReset()` 을 통해서 reset 가능한 email 을 보낼 수 있습니다

```swift
// in mainViewController.swift

override func viewWillAppear(_ animated: Bool) {
	super.viewWillAppear(animated)
	// view에 navigation 보이지 않기
	navigationController?.navigationBar.isHidden = true

	// 로그인시 넘겨 받은 email 화면에 나타내기
	let email = Auth.auth().currentUser?.email ?? "User"
	welcomeLabel.text = """
	Welcome.
	\(email)
	"""
	// resetPasswordBtn 보이게 하기 (google Signin 경우에는 resetPasswordBtn 을 숨김
	let isEmailLogin = Auth.auth().currentUser?.providerData[0].providerID == "password"
	resetPasswordBtn.isHidden = !isEmailLogin
}

	// Reset password action
@IBAction func tabResetPasswordBtn(_ sender: UIButton) {
	// Google Auth 기능을 통해서 사용자의 email 에 reset 할 수 있는 email 을 보내게 됨
	let email = Auth.auth().currentUser?.email ?? ""
	Auth.auth().sendPasswordReset(withEmail: email, completion: nil)
}
```

![image](https://user-images.githubusercontent.com/28912774/147035604-9a0edf19-1dc5-46dd-9ea0-c52893c88319.png)

## 🔷 Apple 로그인/로그아웃

![image](https://user-images.githubusercontent.com/28912774/146754729-eab9073e-abb6-4a09-8bf3-cf83b3cba181.png)

- 2020년 이후 앱 심사 정책에 따르면, App 내의 로그인 방식으로 social 방식이 포함되어 있는 경우(예, 페이스북, 카카오, 네이버 등) 반드시 애플개정을 통한 로그인도 App 내에서 제공하게 되는 규정이 있습니다.

- 만약 Google 로그인 기능을 제공하는데, Apple 로그인을 제공하지 않으면 AppStore 에 앱 심사에서 반려되어 앱을 올릴 수 없습니다. 그래서 소셜방식의 로그인을 제공하는 App 일 경우 반드시 Apple 로그인을 제공해야 합니다

> Apple로 로그인에 대한 신규 가이드라인 - https://developer.apple.com/kr/news/?id=09122019b

- 추후, 유료결제후 내용이 업데이트 될 예정입니다

> For more Details Code - https://github.com/jacobkosmart/fireAuth-iOS-practice

---

🔶 🔷 📌 🔑 👉

## 🗃 Reference

firebaseAuth-iOS-practice code - [https://github.com/jacobkosmart/fireAuth-iOS-practice.git](https://github.com/jacobkosmart/fireAuth-iOS-practice.git)

firebase documentation - [https://firebase.google.com/docs/auth/ios/start](https://firebase.google.com/docs/auth/ios/start)

How to Sign in to Your iOS App with Email/Password Using Firebase Authentication - [https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536](https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
