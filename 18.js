
// function sleep(delay) {
//     return new Promise((resolve) => setTimeout(resolve, delay));
// }
// async function test1() {
//     console.log(1);
//     await sleep(1000)
//     console.log(2);
// }
// test1()

// ES5
// function sleep(cb, time) {
//     if (typeof sleep === "function") {
//         setTimeout(() => {
//             cb()
//         }, time);
//     }
// }
// sleep(() => console.log(1), 1000)

// iterator
function* sleep(time) {
    yield new Promise(resolve => setTimeout(resolve, time));
}
sleep(1000).next().value.then(() => console.log(1));



