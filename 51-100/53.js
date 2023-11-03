// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。
// 示例 1：
// ```js
// nums1 = [1, 3]
// nums2 = [2]
// ```
// 中位数是 2.0
// 示例 2：
// ```js
// nums1 = [1, 2]
// nums2 = [3, 4]
// ```
// 中位数是(2 + 3) / 2 = 2.5

function test(arr1, arr2) {
    let arr = [...arr1, ...arr2].sort((a, b) => a - b)
    if (arr.length % 2) {
        let index = Math.floor(arr.length / 2);
        return arr[index]
    } else {
        let index = Math.floor(arr.length / 2) - 1;
        return (arr[index] + arr[index + 1]) / 2
    }
}

let arr1 = [1, 3]
let arr2 = [2]
arr1 = [1, 2]
arr2 = [3, 4]
console.log(test(arr1, arr2));