
function test(str) {
    let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    if (reg.test(str)) {
        let one = "",
            two = "",
            three = "";
        if (str.length === 4) {
            one = str.slice(1, 2).concat(str.slice(1, 2))
            two = str.slice(2, 3).concat(str.slice(2, 3))
            three = str.slice(3).concat(str.slice(3))
        } else {
            one = str.slice(1, 3)
            two = str.slice(3, 5)
            three = str.slice(5)
        }

        return `rgb(${parseInt(one, 16)},${parseInt(two, 16)},${parseInt(three, 16)})`

    } else {
        return str
    }

}

test('#666') //'rgba(102,102,102,0.8)'
test('#ff0000') //'rgba(255,0,0,0.5)'

console.log(test('#666'));
console.log(test('#ff0000'));