// 接受一个或多个函数作为输入
// 输出一个函数

// 实现map
Array.prototype.mymap = function (fn, context) {
    let arr = this;
    context = context ? context : this;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let cacl = fn.call(context, arr[i], i, arr);
        result.push(cacl);
    }
    return result;
}
let test = [1, 2, 3].mymap((item, index, arr) => {
    return item * 2
})
// console.log(test);

// 实现bind
Function.prototype.bind = function (ctx) {
    let _this = this;
    let bindargs = [...arguments].slice(1)

    return function () {
        let args = [...arguments]
        let allargs = bindargs.concat(args)
        return _this.call(ctx, ...allargs)
    }
}
let obj = {
    name: "Tom"
}
function test2(p) {
    console.log(this.name, "++", p);
}
test2.bind(obj, "456")("haha") // Tom ++ 456