import Foundation

func solution(_ n:Int64) -> [Int] {
  var result: [Int] = []
  for i in String(n).reversed() {
    guard let number = Int(String(i)) else { break }
    result.append(number)
  }
  return result
}


print(solution(12345)) // [5, 4, 3, 2, 1]

func solution(_ n:Int64) -> [Int] {
    let arr = String(n).compactMap { Int(String($0)) }
    return arr.reversed()
}
