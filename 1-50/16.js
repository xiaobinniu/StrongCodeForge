let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13, [[[[14]]]]]]]

let arr1 = arr.flat(Infinity)
console.log(arr1);

let arr2 = arr.join(",").split(",").map(item => Number(item))
console.log(arr2);

// 递归实现
function digui(arr, result = []) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...digui(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result
}
console.log(digui(arr));

// 迭代实现 有点类似 广度优先遍历 BFS
function iterate(arr) {
    let _arr = [...arr];
    let result = []
    while (_arr.length > 0) {
        let preitem = _arr.shift()
        if (Array.isArray(preitem)) {
            _arr.unshift(...preitem)  // 把拿出来的第一个数组 解开后 在放在 最前面
        } else {
            result.push(preitem)
        }
    }

    return result
}

console.log(iterate(arr));