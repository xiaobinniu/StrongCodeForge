const obj = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                { val: "d" },
                { val: "e", children: [{ val: "f" }] }
            ]
        },
        {
            val: "c",
            children: [{ val: "g" }]
        }
    ]
}
/**
 * 宽度优先遍历 BFS 
 */
function deep(root, result = []) {
    if (root.val) {
        result.push(root.val)
    }
    if (root.children) {
        root.children.forEach(item => deep(item, result))
    }

    return result
}
console.log(deep(obj));

/**
 * 深度优先遍历 DFS
 *  先入队列 先出队列 而后子入队列后面
 */
function width(root) {
    let result = []
    let queue = [root];
    while (queue.length > 0) {
        if (queue[0].val) {
            result.push(queue[0].val);
        }
        if (queue[0].children) {
            queue[0].children.forEach(item => queue.push(item))
        }
        queue.shift()
    }
    return result
}
console.log(width(obj));