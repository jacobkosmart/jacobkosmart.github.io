import Foundation

func solution(_ strings:[String], _ n:Int) -> [String] {
    var temp: [String] = []
    var result: [String] = []

    // 1. 각 문자열의 n번째의 문자를 "_"와 함께 제일 앞에 붙여준다
    for i in strings {
        temp.append("\(i[i.index(i.startIndex, offsetBy: n)])_\(i)")
    }

    // 2. 오름차순으로 정렬한다
    temp.sort()

    // 3. 위에서 붙였던 "n번째 문자 _"를 다시 잘라내준다
    for word in temp {
        result.append(word.components(separatedBy: "_")[1])
    }
    return result
}

print(solution(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]