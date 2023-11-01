// 实现 (5).add(3).minus(2) 功能 

Number.prototype.add = function (num) {
    return this + num
};
Number.prototype.minus = function (num) {
    return this - num
};

let a = (100).add(100).minus(50);
console.log(a);

console.log(Number.MAX_SAFE_INTEGER);