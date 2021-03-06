---
title: "Firebase Authentication"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## ๐ท Firebase / Firebase Authentication

### Firebase?

> Firebase official documentation - https://firebase.google.com/docs

![image](https://user-images.githubusercontent.com/28912774/146756206-35f3114a-7fe5-4b25-9d6e-ecfdcb735695.png)

- ์ฌ์ฉ์ ์ธ์ฆ(Authentication), ์ค์๊ฐ DB(Cloud Firestore, Realtime Database), push ์๋ฆผ์ ์๊ฒฉ์ผ๋ก ์ฑ ๋ด์ ํน์  ์ฌ์ฉ์, ์ ์ฒด ์ฌ์ฉ์์๊ฒ app ํ์๋ฅผ ํ  ์ ์๋๊ธฐ๋ฅ(Cloud Messaging) ๋ฑ์ ์ ๊ณตํฉ๋๋ค

- ํน์  segment ์์ ํด๋น๋๋ ์ฌ์ฉ์๋ฅผ ๋ถ๋ฅํ๊ธฐ(Google Analytics), ๋ถ๋ฅํ๋ ์ฌ์ฉ์์๊ฒ ๋ณ๋์ ๋ฉ์ธ์ง, ํ๋ฉด์ ๋ณด์ฌ์ฃผ๋๊ฒ(A/B Testing, Remote Config), ์ฌ์ฉ์ ํ๋๋ถ์ ๋ฐ์ดํฐ ์์ง (Google Analytics)์ ๊ธฐ๋ฅ์ ์ ๊ณตํฉ๋๋ค

- Firebase ๋ฅผ ํตํด์ ํตํฉ backend service ๋ฅผ ์ ๊ณตํจ์ผ๋ก์จ, ๋ณ๋์ ๊ฐ๋ฐ์์ด ์๋ฒ๋ฆฌ์ค๋ก ๋์ฒดํด์ DB ํ๊ฒฝ์ ๊ตฌ์ถ ํ  ์ ์์ต๋๋ค.

### Firebase Auth

#### OAuth๋?

- ์ฌ์ฉ์ ์ธ์ฆ ๋ฐฉ์์ ๋ํ ์๊ณ ํ์ค

- ID/PW ๋ฅผ ๋ธ์ถํ์ง ์๊ณ  OAuth๋ฅผ ์ฌ์ฉํ๋ ์์ฒด์ API ์ ๊ทผ ๊ถํ์ ์์ ๋ฐ์

- ๊ธฐ๋ณธ ๊ฐ๋

  - **User** Service Provider์ ๊ณ์ ์ ๊ฐ์ง๊ณ  ์๋ ์ฌ์ฉ์

  - **Consumer** Service Provider ์ API(์ ๊ณต ๊ธฐ๋ฅ)๋ฅผ ์ฌ์ฉํ๋ ค๋ ์๋น์ค (์ฑ, ์น ๋ฑ)

  - **Service Provider** OAuth๋ฅผ ์ฌ์ฉํ์ฌ API ๋ฅผ ์ ๊ณตํ๋ ์๋น์ค

  - **Access Token** ์ธ์ฆ ์๋ฃ ํ Service Provider์ ์ ๊ณต ๊ธฐ๋ฅ์ ์ด์ฉํ  ์ ์๋ ๊ถํ์ ์์๋ฐ์ ์ธ์ฆ ํค

- ์์ flow: User ์ฌ์ฉ์๊ฐ ๊ธฐ๊ธฐ๋ก App ์์ google ๋ก ๋ก๊ทธ์ธ ์์ฒญ -> App ์์ Google(Service Provider) ์ request Token ์ ์์ฒญ -> Google(Service Provider) ๊ฐ User์๊ฒ ๊ถํ ์์ ํ์ธ ์์ฒญ์ ํ๊ฒ ๋จ(AppName ์ด Google ๊ณ์ ์ ์์ธ์ค ํ๋ ค๊ณ  ํฉ๋๋ค.) -> User๊ฐ ๊ถํ ์์์ ์น์ธํจ -> Google(Service Provider) ๊ฐ App ์ Access Token(์ฌ์ฉ์์ email, ์ด๋ฆ๋ฑ google ์ด ๊ฐ์ง๊ณ  ์๋ ์ฌ์ฉ์์ ์ ๋ณด๋ฅผ ํฌํจ) ์ ๋ณด๋ -> App ์์ ๋ก๊ทธ์ธ ์๋ฃ ์น์ธ๋ฉ์ ์ ์ ์ UI์ ๋ํ๋๊ฒ ๋จ

- ์์ ์ญํ๋ค์ Firebase ์์ ๋์  ์ฒ๋ฆฌ ํ๊ฒ ๋๋๊ฒ์ (Request Token, Access Token)

#### Firebase Authentication ์ ๊ณต ์์ฒด

![image](https://user-images.githubusercontent.com/28912774/146763717-031a7517-f4c0-4b38-839c-ae4b324a1d20.png)

### ๐ท Firebase Authentication ์ด๊ธฐ ์ค์ 

- Firebase console ์์ ํ๋ก์ ํธ ์ถ๊ฐ ํ๋ค์์, ios ์ฑ์ ์ถ๊ฐํ์ฌ ์์ํ๊ธฐ๋ฅผ ๋๋ฅด๊ณ  xcode ๋ด์ ํ๋ก์ ํธ `Bundle identifier` ๋ฅผ Apple ๋ฒ๋ค ID ์ ์ถ๊ฐ ์ํต๋๋ค. ๊ทธ๋ฆฌ๊ณ , ์ฑ ๋ฑ๋ก์ ํฉ๋๋ค

- ๊ตฌ์ฑํ์ผ์ ์์ฑ๋ `GoogleService-Info.plist` ๋ฅผ ๋ค์ด๋ก๋ํด์ ํ๋ก์ ํธ root ๊ฒฝ๋ก์ ์ถ๊ฐ ์ํต๋๋ค

- CocoaPods ์ ํตํด Firebase SDK ํจํค์ง๋ฅผ ํ๋ก์ ํธ ์์ ์ค์น ํฉ๋๋ค

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

- ์ถ๊ฐํ๊ณ  terminal ์์ `pod install` ํด์ Firebase/Auth SDK ์ค์น

> ์ค์น ์์ธํ ๋ณด๊ธฐ - https://firebase.google.com/docs/ios/installation-methods?authuser=0#cocoapods

- Pod ์ ์ถ๊ฐํ๋ฉด xcode ๋ฅผ workspace ๋ก ๋ณ๊ฒฝํ๊ณ  ํ๋ก์ ํธ ์์ํด์ผ ๋จ

- Root ๊ฒฝ๋ก์ AppDelegate ์ ๊ฐ์ firebase initialization ํด์ค์ผ App ์์ ์คํ์ด ๋ฉ๋๋ค

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

## ๐ท ์ด๋ฉ์ผ/๋น๋ฐ๋ฒํธ ๋ก๊ทธ์ธ/๋ก๊ทธ์์

- Authentication ๋ฉ๋ด์ ๊ฐ์ ์์ํ๊ธฐ ํ๊ณ  ์ ๊ณต ์์ฒด์์ email/password ๋ฅผ ํ์ฑ ํ ์ํต๋๋ค

![image](https://user-images.githubusercontent.com/28912774/146885310-c1d4ade7-a000-4c10-a4b9-111edcc9756c.png)

```swift
// in  EnterEmailViewController.swift

	// MARK: Actions
	@IBAction func tabNextBtn(_ sender: UIButton) {
		// Firebase email/ password ์ธ์ฆ
		let email = emailTextField.text ?? "" // nil์ด๋ฉด optional ๋ก ๋น๊ฐ์ผ๋ก ์ฒ๋ฆฌ
		let password = passwordTextField.text ?? ""

		// Firebase ์ ๊ท ์ฌ์ฉ์ ์์ฑ
		Auth.auth().createUser(withEmail: email, password: password) { [weak self] authResult, error in
			guard let self = self else { return } // ์ผ์์ ์ผ๋ก Strong ์ฐธ์กฐ ๋๊ฒ ํจ
			self.showMainViewController() // ๋ก๊ทธ์ธ์ด ์ฌ๋๋ก ๋๋ฌ์๋ mainView ๋ก ์ด๋
		}
	}

	// MARK: Methods
	// ๋ก๊ทธ์ธ ์ฑ๊ณต์ mainViewController ๋ก ์ด๋ ํ๋ method
	private func showMainViewController() {
		let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
		let mainViewController = storyboard.instantiateViewController(identifier: "MainViewController")
		mainViewController.modalPresentationStyle = .fullScreen
		navigationController?.show(mainViewController, sender: nil)
	}

```

### ๋ก๊ทธ์์ ์ค์ 

```swift
// in MainViewController.swift

	// MARK: Actions
	@IBAction func tabLogoutBtn(_ sender: UIButton) {
		// ๋ก๊ทธ์์ method
		let firebaseAuth = Auth.auth()
		do { // error ๊ฐ ๋ฐ์ํ์ง ์์ผ๋ฉด
			try firebaseAuth.signOut()
			// RootViewController ๋ก ์ด๋
			self.navigationController?.popToRootViewController(animated: true)
		} catch let singOutError as NSError {
			debugPrint("ERROR : signout \(singOutError.localizedDescription)")
		}

	}
```

## ๐ท Google ๋ก๊ทธ์ธ/๋ก๊ทธ์์

### ์ฌ์ ์์

- ๋จผ์  firebase ์ฌ์ดํธ์์ Google ์ sign-in-method ์ ๊ณต์์ฒด๋ก ๋ฑ๋ก ํฉ๋๋ค

![image](https://user-images.githubusercontent.com/28912774/147017551-eaa3ce4a-d071-4590-9553-2c938cd4499f.png)

- Google login ์ ์ฌ์ฉํ๊ธฐ ์ํด์๋ ์ถ๊ฐ๋ก Podfile ์์ googleSignIn ํํค์ง๋ฅผ ์ค์นํด ์ค๋๋ค

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

- Google ๋ก๊ทธ์ธ์ ์ฌ์ฉํ๋ ค๋ฉด, ๋ง์ถค URL schema ๋ฅผ ๊ตฌ์ฑํด์ฃผ์ฌ์ผ ํฉ๋๋ค. ์ฒ์ firebase ์ฐ๊ฒฐ์ ์ฌ์ฉ๋ `GoogleService-info.plist` ํ์ผ์์ `REVERSED_CLIENT_ID` ๊ฐ์ ๋ณต์ฌํด์ ํ๋ก์ ํธ `Targets` ์ `Info` ์์ `URL Types` ์ `URL Schemes` ์ ๋ณต์ฌํ ๊ฐ์ ๋ถ์ฌ ๋ฃ๊ธฐ ํด ์ค๋๋ค (์ด ๊ฐ์ ์ฑ์๋น์ค๋ง๋ค ๊ฐ๊ฐ ๋ค์ค ๊ฐ์ ๊ฐ์ง๊ณ , ์ด ๊ฐ์ ํตํด์ Google ์ ๊ถํ์ ์์ํ ๊ฒ์ ๊ตฌ๋ถํ๊ฒ ๋จ)

![image](https://user-images.githubusercontent.com/28912774/147018966-7283180c-443c-4b72-908b-c1e48bf4b670.png)

### Google SignIn delegate protocol ์ถ๊ฐ

> Google ๋ก ๋ก๊ทธ์ธ official reference - https://firebase.google.com/docs/auth/ios/google-signin?hl=ko#swift

> GoogleSignIn v.6.0.0 ๊ธฐ์ค - https://developers.google.com/identity/sign-in/ios/release

![image](https://user-images.githubusercontent.com/28912774/147019998-1d89f276-9084-493c-afdd-56cfec3f0554.png)

#### ๋ณ๊ฒฝ๋ ์ค์ checkPoint (v.6.0.0 ์ดํ)

๐ **GIDSignIn sharedInstance** is now a class property.

- ๊ธฐ์กด์ method ๋ก ์ ๊ณต๋์๋ `sharedInstance()` ๊ฐ class ์ property ๋ก ๋ณ๊ฒฝ๋์์ต๋๋ค

- `GIDSignIn.sharedInstance()` => `GIDSignIn.sharedInstance`

๐ `AppDelegate.swift` ์์ `GIDSignInDelegate` ์์ฒด๊ฐ ์ญ์  ๋์์ต๋๋ค(๋ฐ๋ก delegate ๋ฅผ ๊ตฌํํ์ง ์์ ๋ ๋ฉ๋๋ค)
(The GIDSignInDelegate protocol has been removed in favor of GIDSignInCallback and GIDDisconnectCallback blocks.)

๐ `GIDSignInButton` no longer makes calls to `GIDSignIn` internally and will need to be wired to an `IBAction` similar in order for you to call `signInWithConfiguration:presentingViewController:callback:` to initiate a sign-in flow. (GIDSignInButton ์ด ์๋์ ์ผ๋ก GIDSignIn ์ ํธ์ถํ์ง ์์ผ๋ฏ๋ก ์ฐ๋ฆฌ๊ฐ ๊ธฐ์กด์ AppDelegate ๋ด์ GIDSignInDelegate ์ ํตํด ๊ตฌํํ ๊ฒ์ googleLoginButtonAction IBAction ๋ฉ์๋ ๋ด์ ๊ตฌํํด์ฃผ์ด์ผ ํฉ๋๋ค)

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

	// Google ์ ์ธ์ฆ process ๊ฐ ๋๋ ๋, app ์ด ์์ ํ๋ url์ ์ฒ๋ฆฌํ๋ method
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
		// ๋ฒํผ ๋๋ฅด๋ฉด google login webView ๊ฐ ๋์ค๊ฒ ํ๋ logic
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

				// ๋ก๊ทธ์ธ ์๋ฃ๋ credential ๊ฐ์ mainViewController ์ ๋๊ธฐ๋ method ์คํ
				Auth.auth().signIn(with: credential) { _, _ in
						self.showMainViewController()
				}
		}
	}

	// MARK: Methods
	// login ๋ credeatial ๊ฐ์ mainViewController ์ ๋๊ธฐ๋ method
	private func showMainViewController() {
		let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
		let mainViewController = storyboard.instantiateViewController(identifier: "MainViewController")
		mainViewController.modalPresentationStyle = .fullScreen
		UIApplication.shared.windows.first?.rootViewController?.show(mainViewController, sender: nil)
	}

```

<img width="300" alt="แแณแแณแแตแซแแฃแบ" src="https://user-images.githubusercontent.com/28912774/147026623-71513c2f-262f-4f2e-88d0-758b2d9770a7.gif">

#### Change password

- Firebase ๋ ์ฌ์ฉ์ ๊ด๋ฆฌ์๋ํ ๋ค์ํ method ๋ฑ์ ์ ๊ณตํ๊ณ  ์๋๋ฐ, ๊ฐ์ฅ ์์ฃผ ์ฌ์ฉ๋๋ ๋น๋ฐ๋ฒํธ ๊ฒ์ด ๋น๋ฐ๋ฒํธ ๋ณ๊ฒฝ์๋๋ค.

์์ ID ๋ก ๋ก๊ทธ์ธ ํ ๊ฒฝ์ฐ์๋ App ์์ฒด ๋ด์์ ๋น๋ฐ๋ฒํธ ๋ณ๊ฒฝ์ ํ  ์ ์๊ณ , email/ password ๋ฐฉ์์ผ๋ก ๋ฑ๋กํ ๊ณ์ ์ ํํด์ `sendPasswordReset()` ์ ํตํด์ reset ๊ฐ๋ฅํ email ์ ๋ณด๋ผ ์ ์์ต๋๋ค

```swift
// in mainViewController.swift

override func viewWillAppear(_ animated: Bool) {
	super.viewWillAppear(animated)
	// view์ navigation ๋ณด์ด์ง ์๊ธฐ
	navigationController?.navigationBar.isHidden = true

	// ๋ก๊ทธ์ธ์ ๋๊ฒจ ๋ฐ์ email ํ๋ฉด์ ๋ํ๋ด๊ธฐ
	let email = Auth.auth().currentUser?.email ?? "User"
	welcomeLabel.text = """
	Welcome.
	\(email)
	"""
	// resetPasswordBtn ๋ณด์ด๊ฒ ํ๊ธฐ (google Signin ๊ฒฝ์ฐ์๋ resetPasswordBtn ์ ์จ๊น
	let isEmailLogin = Auth.auth().currentUser?.providerData[0].providerID == "password"
	resetPasswordBtn.isHidden = !isEmailLogin
}

	// Reset password action
@IBAction func tabResetPasswordBtn(_ sender: UIButton) {
	// Google Auth ๊ธฐ๋ฅ์ ํตํด์ ์ฌ์ฉ์์ email ์ reset ํ  ์ ์๋ email ์ ๋ณด๋ด๊ฒ ๋จ
	let email = Auth.auth().currentUser?.email ?? ""
	Auth.auth().sendPasswordReset(withEmail: email, completion: nil)
}
```

![image](https://user-images.githubusercontent.com/28912774/147035604-9a0edf19-1dc5-46dd-9ea0-c52893c88319.png)

## ๐ท Apple ๋ก๊ทธ์ธ/๋ก๊ทธ์์

![image](https://user-images.githubusercontent.com/28912774/146754729-eab9073e-abb6-4a09-8bf3-cf83b3cba181.png)

- 2020๋ ์ดํ ์ฑ ์ฌ์ฌ ์ ์ฑ์ ๋ฐ๋ฅด๋ฉด, App ๋ด์ ๋ก๊ทธ์ธ ๋ฐฉ์์ผ๋ก social ๋ฐฉ์์ด ํฌํจ๋์ด ์๋ ๊ฒฝ์ฐ(์, ํ์ด์ค๋ถ, ์นด์นด์ค, ๋ค์ด๋ฒ ๋ฑ) ๋ฐ๋์ ์ ํ๊ฐ์ ์ ํตํ ๋ก๊ทธ์ธ๋ App ๋ด์์ ์ ๊ณตํ๊ฒ ๋๋ ๊ท์ ์ด ์์ต๋๋ค.

- ๋ง์ฝ Google ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋๋ฐ, Apple ๋ก๊ทธ์ธ์ ์ ๊ณตํ์ง ์์ผ๋ฉด AppStore ์ ์ฑ ์ฌ์ฌ์์ ๋ฐ๋ ค๋์ด ์ฑ์ ์ฌ๋ฆด ์ ์์ต๋๋ค. ๊ทธ๋์ ์์๋ฐฉ์์ ๋ก๊ทธ์ธ์ ์ ๊ณตํ๋ App ์ผ ๊ฒฝ์ฐ ๋ฐ๋์ Apple ๋ก๊ทธ์ธ์ ์ ๊ณตํด์ผ ํฉ๋๋ค

> Apple๋ก ๋ก๊ทธ์ธ์ ๋ํ ์ ๊ท ๊ฐ์ด๋๋ผ์ธ - https://developer.apple.com/kr/news/?id=09122019b

- ์ถํ, ์ ๋ฃ๊ฒฐ์ ํ ๋ด์ฉ์ด ์๋ฐ์ดํธ ๋  ์์ ์๋๋ค

> For more Details Code - https://github.com/jacobkosmart/fireAuth-iOS-practice

---

๐ถ ๐ท ๐ ๐ ๐

## ๐ Reference

firebaseAuth-iOS-practice code - [https://github.com/jacobkosmart/fireAuth-iOS-practice.git](https://github.com/jacobkosmart/fireAuth-iOS-practice.git)

firebase documentation - [https://firebase.google.com/docs/auth/ios/start](https://firebase.google.com/docs/auth/ios/start)

How to Sign in to Your iOS App with Email/Password Using Firebase Authentication - [https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536](https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
