// 周一算法题之「两数之和」
// >给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// >你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
// >示例：

// ```js
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function test(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[index] + arr[j] === target && index !== j) {
                return [index, j]
            }
        }
    }

    return null
}

console.log(test([2, 7, 11, 15], 9));

