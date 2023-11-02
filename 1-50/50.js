Promise.race = function (promiselist) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiselist.length; i++) {
            Promise.resolve(promiselist[i]).then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
Promise.all([p1, p2]).then((data) => {
    console.log(data);
})
Promise.race([p1, p2]).then((data) => {
    console.log(data);
})