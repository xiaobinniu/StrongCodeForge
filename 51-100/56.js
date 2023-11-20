// 不用加减乘除运算符，求整数的7倍
let num = 6;

function test(mum) {

    let result = [mum.toString(7), '0'].join('')

    // 添加一个 '0' 相当于在原数字的基础上乘以 7
    // x*7*3 + y*7*2 
    // x*7*4 + y*7*3 +... z*7*0

    result = parseInt(result, 7)

    console.log(result);
}

test(num)
test(8)