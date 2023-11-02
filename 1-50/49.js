// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 7 },
    { id: 9, name: '部门I', parentId: 9 },
    { id: 10, name: '部门J', parentId: 9 },
];

// 转换后的结果如下
[
    {
        id: 1,
        name: '部门A',
        parentId: 0,
        children: [
            {
                id: 3,
                name: '部门C',
                parentId: 1,
                children: [
                    {
                        id: 6,
                        name: '部门F',
                        parentId: 3
                    }, {
                        id: 16,
                        name: '部门L',
                        parentId: 3
                    }
                ]
            },
            {
                id: 4,
                name: '部门D',
                parentId: 1,
                children: [
                    {
                        id: 8,
                        name: '部门H',
                        parentId: 4
                    }
                ]
            }
        ]
    },
];

function convert(arr) {
    let result = []; // 都是引用地址,给map中的children添加内容,相当于给result中对应添加
    let map = {}
    arr.forEach(element => {
        map[element.id] = element;
        element.children = []
    });
    arr.forEach(element => {
        if (element.parentId !== 0) {
            map[element.parentId].children.push(element)
        } else {
            result.push(element)
        }
    });

    return result
}

let tree = convert(list);
console.log(JSON.stringify(tree, null, 2));

// function convert2(source, parentId = 0) {
//     let trees = [];
//     for (let item of source) {
//         if (item.parentId === parentId) {
//             let children = convert(source, item['id']);
//             if (children.length) {
//                 item.children = children
//             }
//             trees.push(item);
//         }
//     }
//     return trees;
// }

// console.log(convert2(list));