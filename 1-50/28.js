// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回[2, 2]。

let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2, 5]

// 交集 2,2
let arr = nums1.filter((item) => nums2.includes(item))
console.log(arr);

// 并集 1 2 2 1 2 2 5
let arr2 = [...nums1, ...nums2]
console.log(arr2);

// nums1 补集
let arr3 = arr2.filter((itme) => !nums1.includes(itme))
console.log(arr3);