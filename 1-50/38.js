//输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
//输出: [5, 6, 7, 1, 2, 3, 4]

// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]

let arr = [-1, -100, 3, 99]
let k = 2

function test(arr, k) {
    let _arr = [...arr]
    const step = k % arr.length;
    // 后面k个移动到最前面
    let del = _arr.splice(-step, step);
    _arr.unshift(...del)

    return _arr
}
console.log(test(arr, k));