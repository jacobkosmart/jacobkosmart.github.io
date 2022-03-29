import Foundation
import SwiftUI

func solution(_ arr:[Int]) -> [Int] {
	var result = arr

	guard let index = arr.firstIndex(of: arr.min() ?? 0) else { return [] }
	result.remove(at: index)

  return result.isEmpty ? [-1] : result
}

print(solution([4, 3, 2, 1])) // [4, 3, 2]