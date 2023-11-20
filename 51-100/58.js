let arr = Array.from({ length: 20 }, (i, ii) => ii)
console.log(arr);

function shuffle(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [arr[j], arr[index]] = [arr[index], arr[j]];
    }
}


shuffle(arr)
console.log(arr);
