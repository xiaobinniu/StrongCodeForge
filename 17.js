// var a = ?;
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }

// == 比较会进行隐式类型转换 重写toString方法/valueOf方法

// var a = {
//     v: 1,
//     toString() {
//         return this.v++
//     }
// }
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }

// var a = [1, 2, 3]
// a.toString = a.shift
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }
