---
title: "Firebase Realtime, Firestore DB"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## π· Firebase Realtime Database

> Firebase Realtime Database official docs - https://firebase.google.com/docs/database/ios/start

### νΉμ§

- λΉκ΄κ³ν ν΄λΌμ°λ λ°μ΄ν° λ² μ΄μ€: NoSQL database λ‘μ¨, λλμ dataλ₯Ό λκ·λͺ¨λ‘ μ²λ¦¬νλλ°, μ μ λ λ§μ λ°μ΄ν°λ€μ μμ§νκ³  νμ©νκ³  λͺ¨λ°μΌ, μΉ κ°λ°μ μ ν©ν DB νμ μλλ€

- λ³΄ν΅ json ννλ‘ μ μ₯, κ΄λ¦¬ λμ΄ μ¬μ©λλλ°, λ€λ₯Έ table db μ κ΄κ³λ₯Ό λ§Ίμ§μκ³ , λ¨λμΌλ‘ key, value μμΌλ‘ νλμ λ¨μΌ λ¬Έμ μμ λͺ¨λ  data λ₯Ό λ΄λ ννλ‘ μ¬μ©λ©λλ€

- μ€μκ°μΌλ‘ μ²λ¦¬λ¨λλ€: HTTP μμ²­μ΄ μλ λκΈ°ν λ°©μμ

![image](https://user-images.githubusercontent.com/28912774/147174840-ed5e34af-b028-4d7c-8f56-cc18142954d5.png)

    	- HTTP: λ³΄ν΅ dbμ ν΅μ ν λ μ¬μ©νλλ° HTTP API (REST API) κ°μ μλ²μ μμ²­μ΄ λ°μν λ server λ₯Ό κ±°μ³μ  database μ dataλ₯Ό λ°κ² λ¨

    	- Firebase: realtime db λ observer μ snapshot μ μ κ³΅νλ SDK λ ν΄λΌμ΄μΈνΈμ μ§μ  λκΈ°ν ν©λλ€. realtime db μ μ°κ²°λ λͺ¨λ  κΈ°κΈ°μμ κ±°μ λμμ μλ²μ λ³κ²½μ¬ν­μ μ€μκ°μΌλ‘ λ°μν  μ μμ΅λλ€

- μ€νλΌμΈ: λ‘μ»¬μ μ μ₯ν λ€νΈμν¬ μ°κ²°μ λκΈ°ν
  app μ΄ μ€νλΌμΈ μΌλλ, μ‘μμ λν λ³κ²½μ¬ν­μ μ μ₯ν΄ μ£Όμλ€κ° app μ΄ λ€μ λ€νΈμν¬μ μ°κ²°λμμλ, update νλ κΈ°λ₯μ μ κ³΅ ν©λλ€

- μλ² μμ΄ DBμ client λ₯Ό μ§μ  μ‘μΈμ€ ν©λλ€. app μμ μ§μ  μ κ·ΌνκΈ° μν΄μ server κ° μμ΄λ dbμ μ§μ  μ°κ²°ν©λλ€. λ°μ΄ν°λ₯Ό read, write ν λ λ³΄μ κ·μΉμ μν΄μ λ°μ΄ν°λ² μ΄μ€μ λν μ κ·Όμ λν λ³΄μ, λ°μ΄ν° κ²μ¦μ μ κ³΅νκΈ° λλ¬Έμ μμ νκ² db κ΄λ¦¬λ₯Ό ν  μ μμ΅λλ€

## π· Firebase Cloud Firestore

- realtime db μ κ°μ΄ λΉκ΄κ³ν ν΄λΌμ°λ λ°μ΄ν°λ² μ΄μ€ ννμλλ€

- μ¬μ©νκ³ μ νλ app μ΄ μ΄λ ν νΉμ±μ κ°μ§κ³  μλλμ λ°λΌμ κΆμ₯νλ λ°μ΄ν° λ² μ΄μ€κ° λ€λ₯Έλ° Firestore μμ μ§μνλ κ²μ€μ νλκ° Query κΈ°λ₯μλλ€

- Query: λ°μ΄ν° λ² μ΄μ€μ μ λ³΄λ₯Ό μμ²­νλ κ²μ μλ―Έ ν©λλ€ νΉμ  λ¬Έμμ΄, λ°μ΄ν°λ₯Ό μ°ΎκΈ° μν΄ μ¬μ©ν©λλ€. μ λ³΄λ₯Ό μμ²­νλ λͺλ Ήλ¬Έ νμλ±μ λ§ν©λλ€: Firebase firestore μμλ κ³ κΈ μΏΌλ¦¬ λ₯Ό μ§μν©λλ€

### realtime Database vs Cloud Firestore

| Realtime DataBase                   | Cloud Firestore                   |
| ----------------------------------- | --------------------------------- |
| κΈ°λ³Έμ μΈ λ°μ΄ν° **λκΈ°ν**          | **κ³ κΈ μΏΌλ¦¬**, μ λ ¬, νΈλμ μ     |
| **μ μμ**μ λ°μ΄ν°κ° μμ£Ό **λ³κ²½** | **λμ©λ** λ°μ΄ν°κ° μμ£Ό **μ½ν** |
| **κ°λ¨ν** JSON νΈλ¦¬                | **κ΅¬μ‘°νλ μ»¬λ μ**               |
| **λ§μ** λ°μ΄ν°λ² μ΄μ€               | **λ¨μΌ** λ°μ΄ν°λ² μ΄μ€             |

## π· Firebase Realtime Database CRUD

### Firebase Realtime DB μ€μΉ

```ruby
  # Pods for 09_creditCardList
 	pod 'Firebase/Database'
```

`pod install`

### Firebase Realtime DB μ½κΈ°

```swift
//  CardListViewController.swift
import FirebaseDatabase

class CardListViewController: UITableViewController {

	var ref: DatabaseReference!  // Firebase Realtime DB μ°Έμ‘° λ³μ

// MARK: Firebase Realtime DB READ
/*Firebase Database μ½κΈ°*/
self.ref = Database.database().reference()

self.ref.observe(.value) { snapshot in
	guard let value = snapshot.value as? [String: [String: Any]] else { return }
	do {
		let jsonData = try JSONSerialization.data(withJSONObject: value)
		let cardData = try JSONDecoder().decode([String: CreditCard].self, from: jsonData)
		let cardList = Array(cardData.values)
		self.creditCardList = cardList.sorted { $0.rank < $1.rank }

		DispatchQueue.main.async {
			self.tableView.reloadData()
		}
	} catch let error {
		print("Error json parsing \(error)")
	}
}
```

![image](https://user-images.githubusercontent.com/28912774/147459633-64160456-1b1c-4845-bd6d-ade1791386e9.png)

### Firebase Realtime DB μ°κΈ°

```swift
// in CardListViewController.swift

// MARK: Firebase realtime DB Write
		 let cardID = creditCardList[indexPath.row].id
		 //option1: κ²½λ‘λ₯Ό μλ κ²½μ°μ μ°κΈ°
		 self.ref.child("Item\(cardID)/isSelected").setValue(true)
		 //option2: κ²½λ‘λ₯Ό λͺ¨λ₯΄λ κ²½μ°
		 self.ref.queryOrdered(byChild: "id").queryEqual(toValue: cardID).observe(.value) {[weak self] snapshot in
		 guard let self = self,
		 let value = snapshot.value as? [String: [String: Any]],
		 let key = value.keys.first else { return }

		 self.ref.child("\(key)/isSelected").setValue(true)
		 }
```

### Firebase Realtime DB μ­μ 

```swift
	// forRowAt: cell delete
override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
	if editingStyle == .delete {

	// MARK: Firebase realtime DB Delete
		let cardID = creditCardList[indexPath.row].id
		self.ref.queryOrdered(byChild: "id").queryEqual(toValue: cardID).observe(.value) {[weak self] snapshot in
		guard let self = self,
		let value = snapshot.value as? [String: [String: Any]],
		let key = value.keys.first else { return }

		self.ref.child(key).removeValue()
		}
		...
```

## π· Firestore Database CRUD

### Firebase Firestore μ€μΉ

> Get started with Cloud Firestore - https://firebase.google.com/docs/firestore/quickstart#ios+

```ruby
  # Pods for 09_creditCardList
  pod 'Firebase/Firestore'
  pod 'FirebaseFirestoreSwift'
```

`pod install`

### Firebase firestore μ λ°μ΄ν° μλ ₯

- firestore μλ json νμΌμ web console μ ν΅ν΄μ νλ²μ λ°λ‘ μλ ₯νλ κΈ°λ₯μ΄ μκΈ° λλ¬Έμ code swift μμ dummy data λ₯Ό import νλ κ³Όμ μ κ±°μ ΈμΌ ν©λλ€.

```swift
// in CreditCardDummy.swift

import Foundation

struct CreditCardDummy {
    static let card0 = CreditCard(id: 0, rank: 1, name: "μ νμΉ΄λ", cardImageURL: "https://www.shinhancard.com/_ICSFiles/afieldfile/2019/04/26/190426_pc_mrlife_cardplate600x380.png", promotionDetail: PromotionDetail(companyName: "μ ν", period: "2023.01.07(λͺ©)~2023.01.31(ν )", amount: 13, condition: "μ¨λΌμΈ μ±λμ ν΅ν΄ μ΄λ²€νΈ μΉ΄λλ₯Ό λ³΄μ νκ³ , ννμ‘°κ±΄μ μΆ©μ‘±νμ  λΆ", benefitCondition: "μ΄λ²€νΈ μΉ΄λλ‘ κ²°μ ν κΈμ‘μ΄ ν©ν΄μ 10λ§μμ΄μ κ²°μ ", benefitDetail: "νκΈ 10λ§μ", benefitDate: "2023.03.01(μ)μ΄ν"), isSelected: nil)
    static let card1 = CreditCard(id: 1
		......
```

```swift
// in AppDelegate.swift

import FirebaseFirestoreSwift

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

		// firebase init
		FirebaseApp.configure()

		// firebase db μ μΈ
		let db = Firestore.firestore()
		// collection μμ creditCardList λ₯Ό μ°Ύκ³ , snapshot κ³Ό error λ₯Ό λΆλ¬μ΄(ν΄λΉ dbμ λ°μ΄ν°κ° μμ κ²½μ°μ νλ²μ λ°μ΄ν°λ₯Ό λ£μ΄ μ£Όλ κ²½μ° μ¬μ©)
		db.collection("creditCardList").getDocuments { snapshot, _ in
			guard snapshot?.isEmpty == true else { return } // snapshot μΌλ‘ dbκ° λΉμ΄ μλ μνμμλ§ ture λ‘ μ€μ 
			let batch = db.batch()

			let card0Ref = db.collection("creditCardList").document("card0")
			let card1Ref = db.collection("creditCardList").document("card1")
			let card2Ref = db.collection("creditCardList").document("card2")
			let card3Ref = db.collection("creditCardList").document("card3")
			let card4Ref = db.collection("creditCardList").document("card4")
			let card5Ref = db.collection("creditCardList").document("card5")
			let card6Ref = db.collection("creditCardList").document("card6")
			let card7Ref = db.collection("creditCardList").document("card7")
			let card8Ref = db.collection("creditCardList").document("card8")
			let card9Ref = db.collection("creditCardList").document("card9")

			do {
				try batch.setData(from: CreditCardDummy.card0, forDocument: card0Ref)
				try batch.setData(from: CreditCardDummy.card1, forDocument: card1Ref)
				try batch.setData(from: CreditCardDummy.card2, forDocument: card2Ref)
				try batch.setData(from: CreditCardDummy.card3, forDocument: card3Ref)
				try batch.setData(from: CreditCardDummy.card4, forDocument: card4Ref)
				try batch.setData(from: CreditCardDummy.card5, forDocument: card5Ref)
				try batch.setData(from: CreditCardDummy.card6, forDocument: card6Ref)
				try batch.setData(from: CreditCardDummy.card7, forDocument: card7Ref)
				try batch.setData(from: CreditCardDummy.card8, forDocument: card8Ref)
				try batch.setData(from: CreditCardDummy.card9, forDocument: card9Ref)
			} catch let error {
				print("ERROR: wirting card to Firestore \(error.localizedDescription)")
			}
			// batch μ commit μ ν΄μ£Όμ΄μΌμ§ data κ° μΆκ°κ° λ¨
			batch.commit()
		}
		return true
	}
```

- app build νμ firestore μμ data κ° import λ κ²μ νμΈ ν  μ μμ΅λλ€

![image](https://user-images.githubusercontent.com/28912774/147425834-4416f895-039b-4a4a-a6e1-0c176e1cbecd.png)

#### firebase Firestore μ½κΈ°

```swift
import UIKit
import Kingfisher
import FirebaseFirestore



// UITableViewController λ UITableView μ νμν delegate source λ₯Ό κΈ°λ³Έ μ°κ²°λ μνλ‘ μ κ³΅νκΈ° λλ¬Έμ λ³λλ‘ delegate μ μΈμ νμ§ μμλ λ¨
// λ, rootView λ‘ UItableView λ₯Ό κ°μ§κ² λ©λλ€
class CardListViewController: UITableViewController {

	// DB μ μΈ
	var db = Firestore.firestore()

	// MARK: Variable
	var creditCardList: [CreditCard] = []

	// MARK: LifeCycle
	override func viewDidLoad() {
		super.viewDidLoad()

		// UITabelView Cell Register
		let nibName = UINib(nibName: "CardListCell", bundle: nil)
		tableView.register(nibName, forCellReuseIdentifier: "CardListCell")

		// firestore μ½κΈ° code μΆκ°
		db.collection("creditCardList").addSnapshotListener { snapshot , error in
			guard let documents = snapshot?.documents else {
				// κ°μ΄ μμ κ²½μ°μ error μ²λ¦¬
				print("ERROR Firesotre fetching document \(String(describing: error))")
				return
			}
			// λ°μ΄ν° μ²λ¦¬ : compactMap μ μ¬μ©νλ κ²μ nil κ°μ λ°°μ΄ μμ λ£μ§ μκ² νμ§ μν΄μ
			self.creditCardList = documents.compactMap { doc -> CreditCard? in
				do {
					let jsonData = try JSONSerialization.data(withJSONObject: doc.data(), options: [])
					let creditCard = try JSONDecoder().decode(CreditCard.self, from: jsonData)
					return creditCard
				} catch let error {
					print("ERROR JSON Parsing \(error)")
					return nil
				}
			}.sorted { $0.rank < $1.rank }

			// main tread μμ λμκ°λ tableView reload
			DispatchQueue.main.async {
				self.tableView.reloadData()
			}
		}
	}
}
```

<img width="300" alt="αα³αα³αα΅α«αα£αΊ" src="https://user-images.githubusercontent.com/28912774/147428407-2131082e-a8a0-444e-801a-07d9c945e793.png">

### firebase Firestore μ°κΈ°

- struct model μ μλ `isSelected: Bool?` μ κ°μ ν΅ν΄ μ νλλ©΄ select κ° λκ²λ firestore μ κ° μλ ₯νκΈ° μλλ€

- νμΌμ κ²½λ‘λ₯Ό μλμ λͺ¨λ₯Όλ λκ°μ§ κ²½μ°μ μμ λ°λΌ code λ°©μμ΄ λ€λ¦

```swift
// in CardListViewController.swift

// didSelectRowAt: cell μ μ ν νμλ, CardDetailViewController λ‘ λμ΄κ°λ action
override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
	// μμΈνλ©΄ μ λ¬
	let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
	guard let detailViewController = storyboard.instantiateViewController(withIdentifier: "CardDetailViewController") as? CardDetailViewController else { return }
	detailViewController.promotionDetail = creditCardList[indexPath.row].promotionDetail
	self.show(detailViewController, sender: nil)

	// Firestore λ°μ΄ν° μ°κΈ°
	// option1 : κ²½λ‘λ₯Ό μκ³  μμ κ²½μ°
	let cardID = creditCardList[indexPath.row].id
	db.collection("creditCardList").document("card\(cardID)").updateData(["isSelected": true])

	// option2: κ²½λ‘λ₯Ό λͺ¨λ₯΄κ³  μμ κ²½μ°
	// id κ°μ κ²μνλ€μμ κ·Έ κ²°κ³Όλ‘ μ°Ύμ λ¬Έμμ μλ°μ΄νΈ ν΄μ€μΌν¨
	db.collection("creditCardList").whereField("id", isEqualTo: cardID).getDocuments { snapshot, _ in
		guard let document = snapshot?.documents.first else {
			// error μ²λ¦¬
			print("ERROR Firestore fetching document")
			return
		}
		// cardID κ° μλ€λ©΄
		document.reference.updateData(["isSelected": true])
	}
}
```

ν­λͺ©μ ν΄λ¦­ν κ°μ data field μ `isSelected: true` κ° μμ±λ¨μ νμΈ

![image](https://user-images.githubusercontent.com/28912774/147440455-a73e1f75-6399-443d-851e-fe8fd9c45290.png)

#### firebase Firestore μ­μ 

```swift
// in CardListViewController.swift

// forRowAt: cell delete
override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
	if editingStyle == .delete {

		// firestore μ μ­μ 
		// Option 1: κ²½λ‘λ₯Ό μκ³  μμλ
		let cardID = creditCardList[indexPath.row].id
		// db.collection("creditCardList").document("card\(cardID)").delete()

		// Option 2: κ²½λ‘λ₯Ό λͺ¨λ₯΄κ³  μμλ : wherefield method λ₯Ό ν΅ν΄ λ¬Έμ μ μ²΄λ₯Ό κ²μν νμ snpshot μ μ κ³΅ν¨
		db.collection("creditCardList").whereField("id", isEqualTo: cardID).getDocuments { snapshot, _ in
			guard let document = snapshot?.documents.first else {
				print("ERROR")
				return
			}
			document.reference.delete()
		}
	}
}
```

> For more Details Code - https://github.com/jacobkosmart/creditCard-iOS-practice

---

πΆ π· π π π

## π Reference

creditCard-iOS-practice code - [https://github.com/jacobkosmart/creditCard-iOS-practice](https://github.com/jacobkosmart/creditCard-iOS-practice)

LEEO TIL Dev Log - [https://dev200ok.blogspot.com/2020/09/ios-kingfisher.html](https://dev200ok.blogspot.com/2020/09/ios-kingfisher.html)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
