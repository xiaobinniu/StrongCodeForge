let list = [
    {
        id: 1,
        name: '广东',
        children: [
            {
                id: 11,
                name: '深圳',
                children: [
                    {
                        id: 111,
                        name: '南山区'
                    },
                    {
                        id: 112,
                        name: '福田区',
                        children: [
                            {
                                id: 122,
                                name: '南山区'
                            },
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 2,
        name: "广西"
    }
]

const value = 122
const fn = (arr, value,) => {
    let result = []  // 不一样
    arr.forEach((obj, index) => {
        if (obj.id == value) {
            result.push(obj.id);
            return result
        } else {
            if (obj.children?.length > 0) {
                result.push(obj.id);
                result.push(...fn(obj.children, value, result)); // 不一样
            } else if (index === obj.length - 1) {
                result = []
            }
        }

    })

    return result
}
const fn2 = (arr, value, result = []) => { // 不一样
    arr.forEach((obj, index) => {
        if (obj.id == value) {
            result.push(obj.id);
            return result
        } else {
            if (obj.children?.length > 0) {
                result.push(obj.id);
                fn(obj.children, value, result)  // 不一样
            } else if (index === obj.length - 1) {
                result = []
            }
        }
    })

    return result
}
console.log(fn(list, value)); // 输出 [1，11，112,122]
console.log(fn2(list, value));
console.log(fn3(list, value));
