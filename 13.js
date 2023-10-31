// 冒泡排序  空间复杂度 O(1) 时间复杂度 O(n²)

// 生成从l到r的数量为n的随机数组
function randomArr(n, l, r) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let _random = Math.round(l + Math.random() * (r - l));
        arr.push(_random)
    }
    return arr;
}

let arr = randomArr(10, 0, 99)

function bubbleSort(arr) {
    let l = arr.length
    let placehoder = null
    while (l > 0) {
        for (let i = 0; i < l; i++) {
            if (arr[i] > arr[i + 1]) {
                placehoder = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = placehoder
            }
        }
        l--; // 一轮换下来 最后一个已经是最大了,下次循环 就不用管最后一个了
    }

    return arr
}

// console.log(bubbleSort(arr));

// 优化
function bubbleSort2(arr) {
    let l = arr.length
    let placehoder = null
    let flag = true
    while (l > 0 && flag) {
        let swap = 0
        for (let i = 0; i < l; i++) {
            if (arr[i] > arr[i + 1]) {
                placehoder = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = placehoder
                swap += 1
            }
        }
        if (swap === 0) flag = false
        l--; // 一轮换下来 最后一个已经是最大了,下次循环 就不用管最后一个了
    }

    return arr
}

console.log(bubbleSort2(arr));


