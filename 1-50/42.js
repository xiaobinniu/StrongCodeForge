// 打印出 1 - 10000 之间的所有对称数

// > 例如：121、1331 等

function test() {
    let arr = Array.from({ length: 10000 }, (_, i) => i + 1)
    return arr.filter((item) =>
        item.toString().length > 1 && (item === item.toString().split("").reverse().join("") * 1)
    )
}

console.log(test());
