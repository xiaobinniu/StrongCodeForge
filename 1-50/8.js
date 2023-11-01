function Dog(name) {
    this.name = name
    this.say = function () {
        console.log('name = ' + this.name)
    }
}

function _new(fn, ...args) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj, args)
    return Object.prototype.toString.call(obj) == '[object Object]' ? obj : {}
}

function myNew(constructor, ...args) {
    // 创建一个新对象，该对象的原型指向构造函数的原型对象
    const obj = Object.create(constructor.prototype);
    // 调用构造函数，将新对象绑定到构造函数的 this 上，并传入参数
    const result = constructor.apply(obj, args);
    // 如果构造函数返回了一个对象，则返回该对象；否则，返回新创建的对象
    return result instanceof Object ? result : obj;
}
const a = _new(Dog, "Tom")
const b = myNew(Dog, "Tom")
console.log(a);
console.log(b);

