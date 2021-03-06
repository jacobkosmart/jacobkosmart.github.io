---
title: "Firebase Remote Config, Firebase A/B Testing
"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## π· Firebase Remote Config

> Firebase Remote Config official docs - https://firebase.google.com/docs/remote-config

### νΉμ§

- λ°°ν¬ μμ΄, μ‘λ°μ΄νΈ λ€μ΄λ‘λ μμ΄ μ± λ³κ²½ κ°λ₯

- κΈ°λ³Έκ° μ€μ  ν κ° μ¬μ μ

- ν΄λΌμ°λ κΈ°λ° key-value μ μ₯μ

### μ£Όμ κΈ°λ₯

π μ± μ¬μ©μμΈ΅μ λ³κ²½μ¬ν­μ λΉ λ₯΄κ² μ μ© : μλ°μ΄νΈ μμ΄ μ±μ UI/UX λ³κ²½ μ§μ

π μ¬μ©μμΈ΅μ νΉμ  μΈκ·Έλ¨ΌνΈμ μ± λ§μΆ€ μ€μ  : μ± λ²μ , μΈμ΄ λ±μΌλ‘ λΆλ₯λ μ¬μ©μ μΈκ·Έλ¨ΌνΈλ³ νκ²½ μ κ³΅

π A/B νμ€νΈλ₯Ό μ€ννμ¬ μ± κ°μ  : μ¬μ©μ μΈκ·Έλ¨ΌνΈλ³λ‘ κ°μ μ¬ν­μ κ²μ¦ ν μ μ§μ  μ μ©

### π Remote Config λ‘ νμ μ μ΄νκΈ°

μκ²© κ΅¬μ±μ Key, Value νννλ©°, κΈ°λ³Έκ°μ μλ°μ΄νΈ νλ λ°©μμλλ€. ViewController μμ μκ²© controller μ κ°μ λΆλ¬ μμ noticeViewController μ κ°μ μ μ΄ νλ κ΅¬μ±μλλ€

#### κΈ°λ³Έ viewController μ μκ²© κ΅¬μ± νλ νΌμ κ°μ§κ³  μ€κΈ°

μκ²© κ΅¬μ±μ key, valueμ ννμ dictionary νμμλλ€. property νμΌμ μμ±ν΄μ default κ°μ μ€μ ν΄ μ€λλ€

![image](https://user-images.githubusercontent.com/28912774/147515489-01f7ad60-eaab-4f2a-81ed-2742deffa6de.png)

- κ·Έλ€μμ ViewController μμ FirebaseRemoteConfig μ Plist λ₯Ό μ°κ²°μν΅λλ€

```swift
// in ViewController.swift

import FirebaseRemoteConfig

class ViewController: UIViewController {

	// κ°μ²΄ μμ±
	var remoteConfig: RemoteConfig?

	// MARK: LifeCycle
	override func viewDidLoad() {
		super.viewDidLoad()

		remoteConfig = RemoteConfig.remoteConfig()

		let setting = RemoteConfigSettings()
		// νμ€νΈλ₯Ό μν΄μ μλ‘μ΄ κ°μ fetch νλ interval μ μ΅μν ν΄μ μ΅λν μμ£Ό μκ²© λ°μ΄ν°λ₯Ό κ°μ§κ³  μ¬μ μκ² interval μ 0μΌλ‘ μ€μ ν¨
		setting.minimumFetchInterval = 0
		remoteConfig?.configSettings = setting
		// κΈ°λ³Έκ°μ Plistμ μ°κ²°νμ¬ μ€μ 
		remoteConfig?.setDefaults(fromPlist: "RemoteConfigDefaults")
	}
}

```

#### Firebase console κ³Ό μ°κ²°νκΈ°

- Firebase web console μμ Remote config λ©λ΄μ κ΅¬μ± λ§λ€κΈ°λ₯Ό μ€ν ν©λλ€

- μ²« λ²μ§Έ λ§€κ° λ³μ λ§λ€κΈ° μ€ν: property list λ₯Ό μΆκ°νκ²κ³Ό λμΌνκ² console μλ μΆκ° μν΅λλ€

![image](https://user-images.githubusercontent.com/28912774/147515898-2089c71a-1687-4667-9709-ba6e1d7e2682.png)

```swift
// in ViewController.swift

// RemoteConfig
extension ViewController {

	// MARK: Methods
	// Notice fetch νκΈ° (κ°μ Έμ€κΈ°)
	func getNotice() {
		guard let remoteConfig = remoteConfig else { return }

		remoteConfig.fetch {[weak self] status, _ in
			if status == .success {
				remoteConfig.activate(completion: nil)
			} else {
				print("ERROR: Config not fetched")
			}

			guard let self = self else { return }
			// isHidden μ΄ false μΌλ λ³΄μ¬μ§λλ©΄
			if !self.isNoticeHidden(remoteConfig) {
				let noticeVC = NoticeViewController(nibName: "NoticeViewController", bundle: nil)
				noticeVC.modalPresentationStyle = .custom
				noticeVC.modalTransitionStyle = .crossDissolve

				// optional μ΄κΈ° λλ¬Έμ μμΌλ©΄ ""
				// μ°Έκ³  firebase μμ μ°Έμ‘° κ°μ κ°μ§κ³  μ¬λ \\ κ° 2λ² λμ fetch λκΈ°λλ¬Έμ swift μμ κ°μ μΈμνμ§ λͺ»νλ case κ° λ°μλκΈ° λλ¬Έμ λ°λ‘ νμμ μ§μ ν΄μ€μΌ ν¨ (κ·ΈλμΌ μ¬λ¬μ€μ μλ ₯νλλΌλ μ μΈμνκ² λ¨)
				let title = (remoteConfig["title"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")
				let detail = (remoteConfig["detail"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")
				let date = (remoteConfig["date"].stringValue ?? "").replacingOccurrences(of: "\\n", with: "\n")

				// κ°κ°μ κ°μ noticeVC μ λ£μ΄μ€
				noticeVC.noticeContents = (title: title, detail: detail, date: date)
				self.present(noticeVC, animated: true, completion: nil)
			}
		}
	}

	// κ³΅μ§μ¬ν­ μ¨κΈ°κΈ° method
	func isNoticeHidden(_ remoteConfig: RemoteConfig) -> Bool {
		return remoteConfig["isHidden"].boolValue
	}
}
```

web console μμ κ³΅μ§ μ¬ν­μ΄ μλνκ² λ§€κ° λ³μ κ°μ λ³κ²½νκ³  `viewWillAppear` μμ `getNotice()` method κ° μ€ννκ² λλ©΄ κ³΅μ§μ¬ν­ νμμ΄ λν λκ² λ©λλ€

```swift
// in ViewController.swift

override func viewWillAppear(_ animated: Bool) {
	super.viewWillAppear(animated)
	getNotice()
}
```

![image](https://user-images.githubusercontent.com/28912774/147516808-cd5e09d2-8a13-4524-ada8-a685fec7d138.png)

<img width="300" alt="αα³αα³αα΅α«αα£αΊ" src="https://user-images.githubusercontent.com/28912774/147516844-de21515c-bc91-407d-b44b-003a9bfeb06a.png">

#### value μ‘°κ±΄ μ€μ νκΈ°

- Remote Config κ°μ΄ νΉμ  μ¬μ©μμκ²λ§ λ³΄μΌ μ μκ²λ μ€μ ν  μ μμ΅λλ€

μλλ κΈ°κΈ° system μΈμ΄κ° english μΌκ²½μ°μ title μ΄ μμ΄λ‘ λν λΌ μ μκ² νλ μμ μ€μ  μλλ€

- web console μμ λ§€κ° λ³μ κ°μμ μ‘°κ±΄μ μΆκ° μν€κ³  κ²μ ν©λλ€

![image](https://user-images.githubusercontent.com/28912774/147519066-70755b2d-7ac5-4b76-a0e7-779bd267bb6b.png)

κΈ°κΈ° μ€μ μμ κΈ°λ³ΈμΈμ΄λ₯Ό English λ‘ λ³κ²½νκ² λλ©΄ μμ΄λ‘ λ Notice title μ νμΈ ν  μ μμ΅λλ€

<img width="300" alt="αα³αα³αα΅α«αα£αΊ" src="https://user-images.githubusercontent.com/28912774/147519584-14779ae0-c2c2-48e3-91ea-429bfbce8a00.png">

## π· Firebase A/B Testing

> Firebase Firebase A/B Testing official docs - https://firebase.google.com/docs/ab-testing

### νΉμ§

- Google Analytics, Firebase μμΈ‘μ ν΅ν μ¬μ©μ νκ²ν

- μκ²© κ΅¬μ± (Remote Config), μλ¦Ό μμ±κΈ°(Cloud Messaging) νμ©

- μ ν, λ§μΌν μ€νμ μ½κ² μ€ν, λΆμ, νμ₯

### μ£Όμ κΈ°λ₯

π μ ν νκ²½ νμ€νΈ λ° κ°μ  : μ± λμ λ° λͺ¨μμ λ³κ²½νμ¬ μ΅μ μ μ ν νκ²½ νμΈ

π μ¬μ©μμ μ¬μ°Έμ¬λ₯Ό μ λν  λ°©μ λͺ¨μ: μ± μ¬μ©μλ₯Ό λλ¦¬κΈ°μ κ°μ₯ ν¨κ³Όμ μΈ λ¬Έκ΅¬μ λ©μμ§ μ€μ 

π μλ‘μ΄ κΈ°λ₯μ μμ ν κ΅¬ν: μμ κ·λͺ¨μ μ¬μ©μ μ§ν©μ λμμΌλ‘ μνλ λͺ©νλ₯Ό λ¬μ±ν  μ μλμ§ νμΈ

π 'μμΈ‘λ' μ¬μ©μ κ·Έλ£Ή νκ²ν: νΉμ  νλμ ν  κ²μΌλ‘ μμΈ‘λ μ¬μ©μμ A/B νμ€νΈλ₯Ό μ€μ

### π A/B Testing μΌλ‘ νμ μ μ΄νκΈ°

λ³λ κ³΅μ§μ¬ν­μ΄ μκ³ , App μ¬μ©μ΄ μνν  κ²½μ° Event Alert μ λ³΄μ¬ μ£Όλ μμ μ½λ μλλ€

λ§μ½ A, B μ κ°κ°μ λ€λ₯Έ λ¬Έκ΅¬λ₯Ό μ¬μ©νμ κ²½μ° μ΄λ ν λ°©μμ΄ μ¬μ©μκ° λ μ°Έμ¬λ₯Ό λ§μ΄ νλμ§ μμ λ³Ό μ μμ΅λλ€

#### A/B Testing μ€ν λ§λ€κΈ°

- web console μμ A/B Testing λ₯Ό μ ννλ©΄, μ€νμ μ΄λ»κ² κ΅¬μ±ν μ§ μ€νλ§λ€κΈ°μμ μκ²© κ΅¬μ±μ μ νν©λλ€.

![image](https://user-images.githubusercontent.com/28912774/147519952-892ec063-a67c-4872-bde6-592707b6a7e8.png)

- μ¬μ©μμ 50% λ§ λ³΄μΌμ μκ² νκ²ν μ€μ μ ν©λλ€

![image](https://user-images.githubusercontent.com/28912774/147520012-c1509a66-1db6-434f-9195-9ffabeb112fa.png)

- λͺ©νλ μ΄λ―Έ μ€μ λ μμ΅λ₯ , κ΄κ³ μμ΅, μ μ§λ±μ μ€μ  ν  μ μμΌλ, μΌλ§λ ν΄λ¦­μ λ§μ΄ νλμ§ λ³΄κΈ° μν¨μ΄κΈ° λλ¬Έμ custom μΌλ‘ promotion_alert μ΄λΌκ³  μμ±ν΄ μ€λλ€

- λ³νμμλ κ°μ€μ μΈλ°, κΈ°μ€μ λλ κ°κ³Ό λ³κ²½λλ λΉκ΅κ° (Variant A) μ μ ν  μ μμ΅λλ€

![image](https://user-images.githubusercontent.com/28912774/147520556-b6bb4214-f8b8-4ba1-9d5c-e0951068f282.png)

- μ€νμ μ μ₯νκ³ , μ€ν μμμ μ€νν©λλ€

- Remote Config μ κ°κ² λλ©΄ message key, value μμ± λμμμ νμΈν©λλ€.

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

			// message κ°μ ΈκΈ°
			let message = remoteConfig["message"].stringValue ?? ""
			// confrimAction
			let confirmAction = UIAlertAction(title: "νμΈνκΈ°", style: .default) { _ in
				// Google Anlytics : confirm btn μ λλ₯Όλ λ§λ€ google anlytics μμ κΈ°λ‘νκ² λ§λ¬
				Analytics.logEvent("promotio_alert", parameters: nil)
			}
			let cancelAction = UIAlertAction(title: "μ·¨μ", style: .cancel, handler: nil)
			let alertController = UIAlertController(title: "κΉμ§μ΄λ²€νΈ", message: message, preferredStyle: .alert)
			alertController.addAction(confirmAction)
			alertController.addAction(cancelAction)

			// νλ©΄μ alertController μλ ₯
			self?.present(alertController, animated: true, completion: nil)
		}
	}
}

```

- λ²νΌμ΄ λλ¦΄λ λ§λ€ google analytics μ κΈ°λ‘λ  μ μκ² νμΈνκΈ° (xcode μμ product -> Scheme -> Edit Scheme μμ Run μ Arguments passed on Launch μμ μλμ κ°μ μΆκ°ν¨)

![image](https://user-images.githubusercontent.com/28912774/147538283-0e597952-ba11-4b45-9ecc-dbe4a18e116c.png)

<img width="300" alt="αα³αα³αα΅α«αα£αΊ" src="https://user-images.githubusercontent.com/28912774/147538801-5199a8ab-b516-4a32-9de2-ec8373e09fd4.png">

νμΈνκΈ°λ₯Ό λλ₯΄κ² λλ©΄ web console μμ `DebugView` μ `promotion_alert` μ event κ° μμ±λ¨μ νμΈν  μ μμ΅λλ€

![image](https://user-images.githubusercontent.com/28912774/147539029-25ad5cb1-5af6-433f-ab43-e4209df4020a.png)

- 50% μ νλ₯ λ‘ λ©μΈμ§κ° λ³νκ² λ¨μ΄ μ λλκ²μ νμΈνκΈ° μν΄μλ `AppDelegate` μμ debug mode μμ νμΈ ν  μ μμ΅λλ€. (FIS μΈμ¦ ν ν°μ ν΅ν΄ νμΈνκΈ°)

```swift
// in AppDelegate.swift

import Firebase

@main
class AppDelegate: UIResponder, UIApplicationDelegate {


	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

		// Firebase init
		FirebaseApp.configure()

		// firebase κ° κ°κ°μ κΈ°κΈ°μ μΈμ¦ν token κ°μ console μμ νμΈνκΈ°
		Installations.installations().authTokenForcingRefresh(true) { result , error in
			if let error = error {
				print("ERROR")
				return
			}
			guard let result = result else { return }
			print("Installtion auth token : \(result.authToken) μ")
		}
		return true
	}

```

μ μ½λ μμ± νμ console μ°Έμ auth token μ΄ μμ±λ¨μ νμΈνκ³ , λ³΅μ¬ν©λλ€

![image](https://user-images.githubusercontent.com/28912774/147540030-0507a1ae-0f7a-4ecf-8d56-8c2a41fd1010.png)

- web console μμ remote Config μμ μμ±λ μ€νμμ νμ€νΈ κΈ°κΈ° μ FIS μΈμ¦ ν ν°μ λΆμ¬ λ£κΈ° ν©λλ€

![image](https://user-images.githubusercontent.com/28912774/147540451-f0152713-4acd-4368-bb8a-1f17fa9e7485.png)

μμ κ°μ΄ λ³μλ₯Ό κΈ°μ€, Variant A λ‘ λ°κΎΈκ² λλ©΄ κ³ μ λ alert μ°½μ΄ λ¨κ² λμ΄ μ‘°μ  ν  μ μμ΅λλ€

## μ λ¦¬

- A/B testing μ ν΅ν΄ μ μ μλ°μ΄νΈ μ  νμ€νΈλ₯Ό μ§νν΄μ μ κΈ°λ₯, UI λ³κ²½ λ±μ ν΅ν΄ μ¬μ©μκ° μ’μ νλμ§ μ«μ΄ νλμ§λ₯Ό λ―Έλ¦¬ test κ°λμΌλ‘ μΈ‘μ  ν  μ μλ λ°©λ²μλλ€

- μλ¬΄λ¦¬ μλ§λ€κ³  μ’μ κΈ°λ₯μ΄λΌλ μ¬μ©μ μμ₯μμ κΈ°μ‘΄ λ°©μμ΄ μ νΈ λλ€λ©΄, μλΉμ€ μ μ§λ νλ€κ³  UX μΈ‘λ©΄μμ μ’μ§ μκΈ° λλ¬Έμ λΆνμ€μ±μ λν λ¦¬μ€ν¬λ₯Ό νμ€νΈλ₯Ό ν΅ν΄ μ€μΌ μ μκ² λ©λλ€

- μ€ννΈμμ΄λ, μκ·λͺ¨ νλ‘μ νΈμμ λ§μ λ²μ  μμ νκ² λλ κ²½μ° νΉν μ΄λ¬ν A/B testing μ ν΅ν΄μ UX μ ν΅κ³μ μΌλ‘ νμ ν  μ μκ² λ©λλ€

- μν©μ λ°λΌμ target λ³λ‘ μΈλ°νκ² μΈλΆν ν΄μ νμΌν λλμμ νμ€νΈ νκΈ°λ ν©λλ€

- κΈ°λ³Έμ μΌλ‘ μ΄λ¬ν test λ₯Ό μ§ννλ €λ©΄ μ μ  λμ΄μΌ λλκ²μ΄ μ μλ―Έν μ€νμ μ€κ³, κ²°κ³Όλ‘ λ°μ΄ν°λ₯Ό λΆμνκ³ , λ°μ΄ν° κ΄λ ¨ μ λ¬Έ μ§μ, μΈλ ₯μ΄ νμνλ, Google analytics λ₯Ό ν΅ν΄μ λ°μ΄ν° λΆμμ λν μ λ¬Έ μ§μμμ΄λ firebase λ₯Ό ν΅ν΄μ ν¨κ³Όμ μΈ test λ₯Ό μ§ννκ³  κ΅¬μ± ν  μ μμ΅λλ€

- μ€μ λ‘ κ°λ° νκ²½μμ μ±μ λ°°ν¬ νμ UX λ μ¬μ©μ action μ΄ μ λ°μνλμ§μ λν κ²μ feedback μ λν μλ£κ° νμν κ²½μ°κ° λ§μ΅λλ€.

- μ΅μ μ μ¬μ©μ κ²½νμ κ°λ°κ³Ό ν¨κ» νλ€λ©΄ λ³΄λ€ λμ UX μ λ°μ μ΄ μκΈ° λλ¬Έμ A/B testing κ°μ test tool μ μ€μμ±μ μ¦κ° λ  κ²μλλ€

> For more Details Code - https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice

---

πΆ π· π π π

## π Reference

creditCard-iOS-practice code - [https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice](https://github.com/jacobkosmart/remoteConfig-ABTesting-iOS-practice)

ν΄λ¦¬μ μ λͺ©μ½λ© - [https://medium.com/harrythegreat/android-remote-config-%EC%9E%98-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-f8b04ef2645a](https://medium.com/harrythegreat/android-remote-config-%EC%9E%98-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-f8b04ef2645a)

Firebase Tutorial: iOS A/B Testing - [https://www.raywenderlich.com/20974552-firebase-tutorial-ios-a-b-testing](https://www.raywenderlich.com/20974552-firebase-tutorial-ios-a-b-testing)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
