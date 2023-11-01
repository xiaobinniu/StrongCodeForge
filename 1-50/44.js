// 请实现一个 add 函数，满足以下功能。

// > ```js
// > add(1); 			// 1
// > add(1)(2);  	// 3
// > add(1)(2)(3)；// 6
// > add(1)(2, 3); // 6
// > add(1, 2)(3); // 6
// > add(1, 2, 3); // 6

function add() {
    // 收集第一次传入的参数
    // 同时这个数组还用于存储后续传入的参数
    let _args = [...arguments];
    // 收集后续的函数
    let getArgs = function () {
        _args.push(...arguments)
        // 这次收集完了,在返回继续收集
        return getArgs;
    }

    // 调用console.log打印的时候,会调用右值的toString方法,现在改写一下
    getArgs.toString = function () {
        return _args.reduce((toatl, cur) => toatl + cur)
    }

    // 第一次调用add函数的时候,返回收集参数函数
    return getArgs;
}

console.log(add(1));