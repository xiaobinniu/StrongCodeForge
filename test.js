
class Test {
    count = 0;

    constructor() { }

    setV(type, value) {
        this[type] = value
    }
}

let a = new Test()
a.setV("count", 10)
console.log(a);