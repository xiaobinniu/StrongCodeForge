# 前端算法
# 经过几次面试笔试题败北,深感面向文档查询和ChatGpt开发,使自己凭空写代码能力丧失,决定开始本次做题生涯.
## 坚信 一切前端概念，都是纸老虎

[link]
(https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md#L153)

--- 

### 1. `['1', '2', '3'].map(parseInt)`  输出 [1,NaN,NaN]
 1. map (item,index,arr)
 2. paeseInt("2",1) 1进制没有2

---

 ### 2. 实现防抖 节流

---

 ### 3. 广度优先遍历和深度优先遍历

---

 ### 4. 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

---

 ### 5. 输入一个整数, 输出 连续整数相加 等于这个整数的数组

---

 ### 6. async/await 输出顺序 , 碰到await执行完 async2 中的同步代码 然后跳出 当前 async1 继续往下执行 
 
 <script> 
    async function async1() {
      console.log('async1 start'); // 2
      await async2();      
      console.log('async1 end') // 5
    }
    async function async2() {
        console.log('async2') // 3
    }
    
    console.log('start'); // 1
    async1();
    console.log('end') // 4
 </script> 

---

 ### 7. 算法手写题
> 已知如下数组：
>
> var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
>
> 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

--- 

### 8. 实现一个new  
> 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象prototype
> 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
> 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象

---

### 9. 三次握手四次挥手

---

### 10. 替换{{}}内容
