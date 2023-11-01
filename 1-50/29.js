
Promise.prototype.myfinally = function (cb) {
    let P = this.constructor;
    console.log(P === Promise); // true
    return this.then(
        function (data) {
            return Promise.resolve(cb()).then(() => data)
        },
        function (err) {
            return Promise.reject(cb()).then(() => err)
        },

    )
}


new Promise((resolve, reject) => {
    reject("error")
    // resolve("resolve")
})
    .then(() => {
        console.log("then");
    }).catch(() => {
        console.log("catch");
    })
    .myfinally(() => {
        console.log("myfinally");
    })





