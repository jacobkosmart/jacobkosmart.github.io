import Foundation
import SwiftUI

func solution(_ arr1:[[Int]], _ arr2:[[Int]]) -> [[Int]] {
	
  return zip(arr1, arr2).map { zip($0, $1).map { $0 + $1}}
}

print(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])) // [[4, 6], [7, 9]]