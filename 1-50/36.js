// 使用 JavaScript Proxy 实现简单的数据绑定

let html = null // 模拟dom

let obj = {
    count: 0
}

function render(v) {
    html = v
}

let proxy = new Proxy(obj, {
    get(target, property) {
        return target[property]
    },
    set(target, property, value) {
        target[property] = value
        render(value)
        return value
    }
})

render(proxy.count)
console.log(html);

proxy.count = proxy.count + 1
console.log(html);

console.log(obj);