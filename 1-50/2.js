/** 
 * 防抖  只执行停止后最后一次, 短时间内再次执行会被取消当次
 */
function debounce(fn, time = 500) {
    let timer = null;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, arguments)
        }, time);
    }
}
function log() {
    console.log("防抖");
}

const test = debounce(log);

let i = 0;
while (i < 10) {
    test()
    i += 1
}


/**
 * 节流  执行过一次后短时间内重复执行不会执行
 */
function throttle(fn, time = 500) {
    let canRun = true;
    return function () {
        if (!canRun) return
        canRun = false;
        fn.call(this.arguments);
        setTimeout(() => {
            canRun = true;
        }, time);
    }
}
function log2() {
    console.log("节流");
}
const test2 = throttle(log2)

let timer = setInterval(() => {
    test2()
}, 400);
setTimeout(() => {
    clearInterval(timer)
}, 20000)