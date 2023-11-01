// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
let obj = {
    1: 222,
    2: 123,
    5: 888
}

function test(obj) {
    let result = []
    for (let i = 1; i <= 12; i++) {
        if (obj[i] !== undefined) {
            result.push(obj[i])
        } else {
            result.push(null)
        }
    }
    return result
}

console.log(test(obj));

let arr = Array.from({ length: 12 }).map((it, i) => obj[i + 1] || null);
console.log(arr);