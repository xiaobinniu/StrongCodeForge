// > 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// >
// > 示例:
// > 输入: [0,1,0,3,12]
// > 输出: [1,3,12,0,0]
// > 1. 必须在原数组上操作，不能拷贝额外的数组。
// > 1. 尽量减少操作次数。


function test(arr) {
    let times = 0;
    let now = 0;
    while (times < arr.length) {
        if (arr[now] === 0) {
            arr.push(0)
            arr.splice(now, 1)
        } else {
            now++
        }
        times++
    }

    return arr
}

console.log(test([0, 1, 0, 3, 12]));