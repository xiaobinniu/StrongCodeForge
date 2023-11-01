function test(str) {
    str = str.replace(/[A-Za-z]/g, (p, index) => {
        return p.match(/[A-Z]/) ? p.toLocaleLowerCase() : p.toLocaleUpperCase()
    })

    return str
}

console.log(test("ABCDefg"));