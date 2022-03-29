import Foundation
import SwiftUI

func solution(_ num:Int) -> Int {
	var number = num
	var count = 0

	while number != 1 && count <= 500 {
		if number % 2 == 0 {
			number = number / 2
		} else {
			number = number * 3 + 1
		}
		count += 1
	}
  return number == 1 ? count : -1
}

print(solution(6)) // 8