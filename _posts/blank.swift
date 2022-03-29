import Foundation
import SwiftUI

func solution(_ n:Int) -> Int {
	var isPrime = true
	var count = 0

	for i in 2...n {
		isPrime = true
		for j in 2...Int((sqrt(Double(n)))) + 1 {
			if i != j && i % j == 0 {
				isPrime = false
				break
			}
		}
		count = isPrime ? count + 1 : count
	}
  return count
}

print(solution(5)) // 4