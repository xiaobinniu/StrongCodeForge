//随机生成一个长度为 10 的整数类型的数组，例如 `[2, 10, 3, 4, 5, 11, 10, 11, 20]`，将其排列成一个新数组，要求新数组形式如下，例如 `[[2, 3, 4, 5], [10, 11], [20]]`。
// 区间分类

let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];



function test(arr, interval = 10) {
    let a = arr;
    let b = a.sort((a, b) => a - b)

    let obj = {}; // 保存区间
    b.forEach(element => {
        let start = Math.floor(element / interval)
        if (!obj[start]) {
            obj[start] = [];
        }
        obj[start].push(element)
    });

    let result = []
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result.push([...new Set(obj[key])])
        }
    }

    return result
}

console.log(test(arr, 10));