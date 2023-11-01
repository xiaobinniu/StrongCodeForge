class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${this.name}`);
        setTimeout(() => {
            this.next();  // 所有函数都是同步调用添加完毕后,进入异步后 启动执行
        }, 0);
    }
    next() {
        let fn = this.taskList.shift();
        fn && fn();
    }
    eat(name) {
        let fn = () => {
            console.log(`I am eating ${name}`)
            this.next();
        }
        this.taskList.push(fn);
        return this;
    }
    sleep(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next();
            }, time * 1000);
        }
        this.taskList.push(fn);
        return this;
    }
    sleepFirst(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next();
            }, time * 1000);
        }
        this.taskList.unshift(fn);
        return this;
    }

}

function LazyMan(name) {
    return new LazyManClass(name)
}

LazyMan('Tony').eat('早').eat('中').sleepFirst(3).sleep(3).eat('晚');