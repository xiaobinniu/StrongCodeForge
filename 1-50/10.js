const obj = {
    name: "Bob",
    name2: { name: "Tom" }
}

let template = "我叫 {{ name}} , 他叫 {{name2.name }} {{}}"
let reg = /\{\{(.+?)\}\}/g
let result = template.replace(/\{\{\s*\}\}/g, "")

let match = template.match(reg)
let keys = []
match.forEach(item => {
    let key = item.replace(/\{\{/, '').replace(/\}\}/, '').trim()
    key !== "" && keys.push(key)
})
keys.forEach((res) => {
    if (res.includes(".")) {
        let index = res.indexOf(".")
        let key = res.slice(0, index)
        let key2 = res.slice(index + 1)
        result = result.replace(reg, obj[key][key2])
    } else {
        result = result.replace(reg, obj[res])
    }
})
console.log(result);

/////// template.replace(/\{\{(.*?)\}\}/g, str => {
///////    str = str.substring(2, str.length - 2);
///////    return str
/////// }) 



