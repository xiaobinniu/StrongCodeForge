// 多次赋值与顺序无关，是同时进行赋值的 （所以a.x = a = {n: 2}和a = a.x = {n: 2}的结果是一样的）
// 每个节点的变量最终赋值的值取决去最后一个等号的右边值
// 如果赋值是引用类型，则最终指向的是同一个对象

// var a = { n: 1 };
// a.x = a = { n: 2 };

// 旧对象
// a : {
//     n: 1,
//     x: { n: 2 }
// }
// 新对象
// a: {
//     n: 2
// }

var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x) // undefiend
console.log(b.x) // 

// a: { n: 1, x: { n: 2 }}
// b: a

// a : {n: 2}


