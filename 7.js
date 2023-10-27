// > 已知如下数组：
// >
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// >
// > 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

function setsort(arr) {
    return [...new Set(arr)].sort((a, b) => a - b)
}

function test(arr, n = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            test(arr[i], n)
        } else {
            n.push(arr[i])
        }
    }
    return n
}

const _res = Array.prototype.flat.call(arr, Infinity)
// console.log(setsort(_res));

const mytest = test(arr);
// console.log(setsort(mytest));

const test2 = arr.toString().split(",").map(Number)
console.log(setsort(test2));
