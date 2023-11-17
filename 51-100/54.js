/**
 * 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串
 */


function test(num) {
    let str = num.toString()
    if (str.length === 1) {
        return str
    } else {
        return str.charAt(str.length - 1) + test(str.slice(0, str.length - 1))
    }

}

console.log(test(123456))

console.log(("123456").slice(0, 2));


function self(num) {
    let str = num.toString()

    if (str.length == 1) {
        return str
    }
    return str.charAt(str.length - 1) + self(str.slice(0, str.length - 1))
}

console.log(self(123456))