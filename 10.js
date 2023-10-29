let template = "{{ name}}  {{name2 }}"
let reg = /\{\{(.+?)\}\}/g

let match = template.match(reg)
let result = []
match.forEach(item => {
    let key = item.replace(/\{\{/, '').replace(/\}\}/, '').trim()
    key !== "" && result.push(key)
})
console.log(result);

