// 第二个参数是 延时, 第三个 参数 是 传递给回调的参数

function print(n) {
    setTimeout(() => {
        console.log(n);
    }, 1, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
    print(i);
}


function print2(n) {
    setTimeout(
        (() => {
            console.log(n)
            return () => { }
        }).call(n, []),
        Math.floor(Math.random() * 1000));
}

function test(n) {
    setTimeout(
        (() => {
            console.log(n);
            return () => { }
        })()
        ,
        Math.floor(Math.random() * 1000));
}


for (var i = 0; i < 100; i++) {
    test(i);
}

