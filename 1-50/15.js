// var 变 let
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// setTimeout 传参
for (var i = 0; i < 10; i++) {
    setTimeout((i, params2) => {
        console.log(i, params2);
    }, 1000, i, "这里传参")
}

// 高阶函数
for (var i = 0; i < 10; i++) {
    setTimeout(((i) => {
        return () => {
            console.log(i);
        }
    })(i), 1000);
}

