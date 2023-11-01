// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

let str = "1561ad156adfda"
let T = "6ad"

function test(S, T, m) {
    let match = S.match(new RegExp(T))
    return match.index
}

function mytest(S, T, m) {
    let str = S
    let index = 0
    let result = -1
    let isbreak = true
    while (str.length >= m && isbreak) {
        let _s = str.slice(0, m)
        if (_s === T) {
            result = index
            isbreak = false
        } else {
            index++
            str = str.slice(1)
        }
    }

    return result
}

console.log(test(str, T, 3));
console.log(mytest(str, T, 3));


