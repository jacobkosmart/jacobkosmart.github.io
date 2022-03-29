import Foundation
import SwiftUI

func solution(_ n:Int, _ m:Int) -> [Int] {
  var num1 = min(n, m)
	var num2 = max(n, m)
	var divisor = 2
	var gcd = 1

	while divisor <= num1 {
		if num1 % divisor == 0 && num2 % divisor == 0 {
			num1 = num1 / divisor
			num2 = num2 / divisor
			gcd *= divisor
			divisor = 1
		}
		divisor += 1
	}

	return [gcd, gcd * num1 * num2]
}

print(solution(3, 12)) // [3, 12]