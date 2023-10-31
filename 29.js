
Promise.prototype.finally = function (callback) {
    Promise.prototype.finally = function (callback) {
        let P = this.constructor;
        return this.then(
            value => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => { throw reason })
        );
    };
}

new Promise((resolve, reject) => {

}).finally(() => {
    console.log("finally");
})