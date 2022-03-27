import Foundation
import SwiftUI

func solution(_ s:String) -> String {
	var count = 0
	var result = ""

	for letter in s {
		if letter == " " {
			count = -1
			result += String(letter)
		} else if count % 2 == 0 {
			result += letter.uppercased()
		} else {
			result += letter.lowercased()
		}
		count += 1
	}

	return result
}

print(solution("try hello world")) // TrY HeLlO WoRlD