class N {
    constructor() {
        this.queue = []
    }

    add(n) {
        let fn = () => {
            console.log(n);
        }
        this.queue.push(fn)

        this.queue[0]()
    }


}

new N().add(5)