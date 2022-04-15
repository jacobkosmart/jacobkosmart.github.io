import Foundation

func solution(_ s:String, _ n:Int) -> String {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var result = ""

    for letter in s {
        let isUpperCase = letter.isUppercase
        
        if let index = alphabet.firstIndex(of: letter.lowercased()) {
            let nIndex = index + n > 25 ? index + n - 26 : index + n
            result += isUpperCase ? alphabet[nIndex].uppercased() : alphabet[nIndex]
        } else {
            result += " "
        }
    }
    return result
}

print(solution("AB", 1)) // "BC"