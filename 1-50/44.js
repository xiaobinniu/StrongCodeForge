// 柯里化实现多参数无限累加
// function add(...nums1) {
//     function sum(...nums2) {
//         nums1 = [...nums1, ...nums2]
//         return sum
//     }

//     sum.toString = function () {
//         return nums1.reduce((pre, cur) => pre + cur, 0)
//     }

//     return sum
// }

console.log(add(1).toString());         // 1
console.log(add(1)(2).toString());      // 3
console.log(add(1)(2)(3).toString());   // 6
console.log(add(1)(2, 3).toString());   // 6
console.log(add(1, 2)(3).toString());   // 6
console.log(add(1, 2, 3).toString());   // 6

function add() {
    let args = [...arguments];

    // 利用sum函数把 所有参数都放在数组里面, 然后返回sum函数,继续调用还是调用的sum函数,继续累加
    function sum() {
        args = args.concat(...arguments)
        return sum
    }

    // 因为最后返回sum函数,输出也是输出sum的结果
    sum.toString = function () {
        return args.reduce((a, b) => a + b, 0)
    }

    return sum
}