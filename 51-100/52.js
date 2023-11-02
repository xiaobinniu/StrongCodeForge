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
                        name: '福田区'
                    }
                ]
            }
        ]
    }, {
        id: 2,
        name: "广西"
    }
]

const value = 112
const fn = (arr, value, result = []) => {
    arr.forEach((obj, index) => {
        if (obj.id == value) {
            result.push(obj.id);
            return result
        } else {
            if (obj.children?.length > 0) {
                result.push(obj.id);
                fn(obj.children, value, result)
            } else if (index === obj.length - 1) {
                result = []
            }
        }

    })

    return result
}
console.log(fn(list, value)); // 输出 [1， 11， 112]


// 先找到子节点,再往回找
const fn2 = () => {

}