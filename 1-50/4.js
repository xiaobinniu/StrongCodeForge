var test = { name: "test" };
var data = {
    a: "123",
    b: 123,
    c: true,
    d: [43, 2],
    e: undefined,
    f: null,
    g: function () { console.log("g"); },
    h: new Set([3, 2, null]),
    i: Symbol("fsd"),
    j: test,
    k: new Map([["name", "张三"], ["title", "Author"]])
};

/**
 * JSON.stringify() 不能处理 undefined、function、symbol 非安全值,  set map 正则 function 闭环 也不能正常处理
 */
function deepCopy(obj) {
    if (typeof obj === 'function') {
        throw new TypeError('请传入正确的数据类型格式')
    }
    try {
        return JSON.parse(JSON.stringify(obj))
    } catch (e) {
        console.log(e)
    }
}

/**
 * Object.assign()
 */
var data2 = {
    a: 123,
    b: test  // 地址引用
}
let _assign = Object.assign({}, data2)
console.log(_assign.b === test); // true


// Object.prototype.toString() 方法，会返回一个形如 "[object XXX]" 的字符串

// 工具函数  只判断常见数据类型
let _toString = Object.prototype.toString
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    boolean: 'Boolean',
    number: 'Number'
}
let getType = (item) => {
    return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
    return map[type] && map[type] === getType(item)
}

/**
 * 深度优先
 * visitedArr 储存已经复制过的地址,
 */
function DFSdeepClone(root, visitedArr = []) {
    let _obj = {}
    if (isTypeOf(root, 'object') || isTypeOf(root, 'array')) {
        let index = visitedArr.indexOf(root)
        _obj = Array.isArray(root) ? [] : {}
        if (index === -1) {
            visitedArr.push(root);
            for (const item in root) {
                if (Object.hasOwnProperty.call(root, item)) {
                    _obj[item] = DFSdeepClone(root[item], visitedArr)
                }
            }
        } else {
            _obj = visitedArr[index]
        }
    } else if (isTypeOf(root, 'function')) {
        _obj = eval('(' + root.toString() + ')');  // <= 如何复制function
    } else {
        _obj = root
    }

    return _obj
}

console.log(DFSdeepClone(data), DFSdeepClone(data) === data);


/**
 * 广度优先遍历
 */