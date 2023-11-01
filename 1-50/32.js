
let min = 1;
let max = 10;

let a = Math.floor(Math.random() * 2) // 0-0.99999  0-1.99999    *几  随机区间就是几个    *5  0-4 都能取到

let b = max - min + 1;  // 共有几个数字

let c = Math.floor(Math.random() * (max - min + 1)) // 0-(个数-1) 的整数

let result = Math.floor(Math.random() * (max - min + 1)) + min;  // min 相对0 向右移动


console.log(result);