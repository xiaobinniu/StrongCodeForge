let arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
let arr2 = ["A", "B", "C", "D"];

let arr3 = arr2.map(item => item + "3")
let res1 = arr1.concat(arr3).sort().map(item => {
    if (item.includes("3")) {
        return item.split("")[0]
    }
    return item
})


let c = [...arr1, ...arr2].sort((a, b) => (         // false 不交换顺序 0  , true 交换顺序
    a.codePointAt(0) - b.codePointAt(0) ||
    a.codePointAt(1) - b.codePointAt(1) ||
    b.length - a.length
))


function concatArr(arr1, arr2) {   // 缺点, 必须 严格有 A B C D... 且按照顺序
    const arr = [...arr1];
    let currIndex = 0;
    for (let i = 0; i < arr2.length; i++) {
        const RE = new RegExp(arr2[i])  // B
        while (currIndex < arr.length) {
            currIndex++
            if (!RE.test(arr[currIndex])) {
                arr.splice(currIndex, 0, arr2[i])
                break;
            }
        }
    }
    return arr
}
console.log(concatArr(arr1, arr2));