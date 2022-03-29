import Foundation
import SwiftUI

func solution(_ x:Int, _ n:Int) -> [Int64] {
	return Array(1...n).map { Int64($0 * x) }
}

print(solution(2, 5)) // [2, 4, 6, 8, 10]