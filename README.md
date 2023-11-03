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

---

### 11. 高阶函数实现 react 延时加载

--- 

### 12. 把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

---

### * 13. 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进

---

### 14. 颜色 十六进制转为 rgba

---

### 15. 异步循环错误  // 输出了10个10
   <script>   // var 共用 i 环境
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
   </script>

---

### 16. 使用迭代的方式实现 flatten 函数

--- 

### 17. 下面代码中 a 在什么情况下会打印 1？

```js  //  == 比较会 .toString() 进行隐式转化 
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
```

---

### 18：实现一个 sleep 等待函数

---

### 19. [3, 15, 8, 29, 102, 22] Array.sort() 排序

 <!-- 102 15 22 29 3 8 -->

---

### 20. 介绍 HTTPS 握手过程

1. 客户端使用https的url访问web服务器,要求与服务器建立ssl连接
2. web服务器收到客户端请求后, 然后会将网站的证书(包含公钥)传送一份给客户端
3. 客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
4. 客户端利用公钥将会话秘钥加密, 并传送给服务端(同时返回客户端握手结束通知), 服务端利用自己的私钥解密出会话秘钥(向客户端发送服务器握手结束通知)
5. 之后服务器与客户端使用秘钥加密传输

---

### 21. 输出以下代码执行的结果并解释为什么

```js   // 在对象中加入splice属性方法，和length属性后。这个对象变成一个类数组。
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

---

### 22.为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

1. 避免跨域（img 天然支持跨域）
2. 利用空白gif或1x1 px的img是互联网广告或网站监测方面常用的手段，简单、安全、相比PNG/JPG体积小，1px 透明图，对网页内容的影响几乎没有影响，这种请求用在很多地方，比如浏览、点击、热点、心跳、ID颁发等等，
3. 图片请求不占用 Ajax 请求限额
4. 不会阻塞页面加载，影响用户的体验，只要new Image对象就好了，一般情况下也不需要append到DOM中，通过它的onerror和onload事件来检测发送状态。
<script type="text/javascript">
 var thisPage = location.href;
 var referringPage = (document.referrer) ? document.referrer : "none";  // document.referrer 返回从哪个页面点击进来的,否则是""
 var beacon = new Image();
 beacon.src = "http://www.example.com/logger/beacon.gif?page=" + encodeURI(thisPage)
 + "&ref=" + encodeURI(referringPage);
</script>

---

### 23. 什么是闭包？闭包的特性？
1. 闭包就是能够读取其他函数内部变量的函数。
    闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
2. 闭包的特性
    1. 函数嵌套函数
    2. 函数内部可以引用外部的参数和变量
    3. 参数和变量不会被垃圾回收机制回收

---

### 24. 实现 (5).add(3).minus(2) 功能。   不是 calc(5)新函数,  是 Number.prototype 直接操作数字

> 例： 5 + 3 - 2，结果为 6

---

### 25.输出以下代码的执行结果并解释为什么
 
```js  // 每个节点的变量最终赋值的值取决去最后一个等号的右边值, 先写出 旧a 新a 比较好看
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```
---

### 26. 某公司 1 到 12 月份的销售额存在一个对象里面

>如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

---

### 27.要求设计 LazyMan 类，实现以下功能。 

```js
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```
---

### 28. 给定两个数组，写一个方法来计算它们的交集。

> 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

---

### 29. 模拟实现一个 Promise.finally 
>利用then方法 可以接收成功或失败的执行回调

---

### 30. ES6 代码转成 ES5 代码的实现思路是什么
>项目里的 .babelrc 文件就是用来配置babel处理的，常有plugins 与 presets配置项，当他们同时存在的时候，先执行plugins从上到下，在执行presets从左到右。
大致分为三步：
1. 将代码字符串解析成抽象语法树，即所谓的 AST
2. 对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成 ES5 代码
3. 根据处理后的 AST 再生成代码字符串
---

### 31. 数组编程题

>随机生成一个长度为 10 的整数类型的数组，例如 `[2, 10, 3, 4, 5, 11, 10, 11, 20]`，将其排列成一个新数组，要求新数组形式如下，例如 `[[2, 3, 4, 5], [10, 11], [20]]`。

---

### 32. 生成随机整数介于两数之间,包含两端
> Math.floor(Math.random()*(max - min + 1) +min)

---

### 33. 如何解决移动端 Retina 屏 1px 像素问题
1. 伪元素 + transform scaleY(.5)
2. border-image
3. background-image
4. box-shadow
5. rem + viewport
操作步骤如下。在根元素html设置font-size. 将元素转换成rem
通过 window.devicePixelRatio 拿到dpr 再写meta 设置 viewport的scale : 1/dpr

---

### 34. 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'

---

### 35. 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

---

### 36. 使用 JavaScript Proxy 实现简单的数据绑定

---

### 37. 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少
>数组可以直接根据索引取的对应的元素，所以不管取哪个位置的元素的时间复杂度都是 O(1)
>得出结论：消耗时间几乎一致，差异可以忽略不计

---

### 38. 算法题「旋转数组」给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
>输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
>输出: [5, 6, 7, 1, 2, 3, 4]

---

### 39. Vue 的父组件和子组件生命周期钩子执行顺序是什么
1. 父组建： beforeCreate -> created -> beforeMount
2. 子组件： -> beforeCreate -> created -> beforeMount -> mounted
3. 父组件： -> mounted
4. 总结：从外到内，再从内到外

vue3 onMounted 内 -> 外

---

### 40. input 搜索如何防抖，如何处理中文输入
compositionstart compositionupdate compositionend

---

### 41. 实现Promise.all

---

### 42. 打印出 1 - 10000 之间的所有对称数

> 例如：121、1331 等

--- 

### 43. 周一算法题之「移动零」

> 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

---

### 44. 请实现一个 add 函数，满足以下功能。

> ```js
> add(1); 		// 1
> add(1)(2);  	// 3
> add(1)(2)(3)；// 6
> add(1)(2, 3); // 6
> add(1, 2)(3); // 6
> add(1, 2, 3); // 6

---

### 46. 周一算法题之「两数之和」
>给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
>你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
>示例：

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

---

### 47. 跳出双重for循环

```js  // 带有标签的for 循环
outerloop: for (let index = 0; index < 10; index++) {
    console.log("外", index);
    for (let j = 0; j < 10; j++) {
        console.log("里", j);
        if (j === 5) {
            break outerloop;
        }
    }
}
```

--- 

### 48. 判断是不是正确网址
```js
   try {
        new URL(url);
        return true;
    } catch (err) {  // err :Invalid URL
        return false;
    }
```

---

### 49. 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
***

---

### 50. 设计并实现 Promise.race()
Promise.all([p1, p2])
Promise.race([p1, p2])

---

### 51. 实现模糊搜索高亮显示

---

### 52. 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
 <!-- [
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
    }
] -->

---

### 53. 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))

---



