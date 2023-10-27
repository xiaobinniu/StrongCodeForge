function test(num) {
    let result = []
    let center = Math.floor(num / 2)

    let start = 0;
    let end = 0;
    let total = 0;
    let arr = [];
    for (let i = 1; i <= center; i++) {
        start = i;
        end = 0;
        total = 0;
        arr = [];
        while (total < num) {
            total += start;
            end = start;
            start += 1;
            if (total === num) {
                for (let i2 = i; i2 <= end; i2++) {
                    arr.push(i2)
                }
                result.push(arr)
            }
        }
    }

    return result
}

console.log(test(18));