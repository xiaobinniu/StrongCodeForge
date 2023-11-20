// > 输入
const str = '1, 2, 3, 5, 7, 8, 10'
// > 输出
// > ``'1~3, 5, 7~8, 10'``

function test(params) {
    let arr = params.split(",");
    console.log(arr);
}

test(str)