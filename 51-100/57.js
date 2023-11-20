let str1 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33"
let str2 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33"
let str3 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33"


function test(str) {
    let match = str.match(/elective=([^&]+)/)
    if (match) {
        let matchstr = match[0]
        let index = matchstr.indexOf("=")
        let value = matchstr.slice(index + 1)
        let result = value.split(',')
        console.log(match, result);
    } else {
        console.log(match, []);
    }

}

// test(str1)
// test(str2)
// test(str3)



let str4 = "{{name is john}}  {{}} {{haha}}"

let obj = {
    "name is john": 123,
    haha: 456
}

let result = str4.replace(/\{\{(.*?)\}\}/g, (match) => {
    const key = match.slice(2, -2).trim();
    return obj[key] !== undefined ? obj[key] : "";
});

console.log(result);