// > 输入
const str = '1,2,3,5,7,8,10'
// > 输出
// > ``'1~3, 5, 7~8, 10'``

function test(params) {
    let arr = params.split(",");
    let keys = {}
    arr.forEach(element => {
        let _key = Math.floor(element / 3.1)
        if (!keys[_key]) {
            keys[_key] = []
        }
        keys[_key].push(element)
    });
    let values = Object.values(keys)
    let result = []
    values.forEach(item => {
        if (item.length > 1) {
            result.push(`${item[0]}~${item[item.length - 1]}`)
        } else {
            result.push(item[0])
        }
    })
    return result.join(',')
}

console.log(test(str));