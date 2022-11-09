let data = [{ name: "echo" }, { name: "听风是风" }, { name: "天子笑" }],
	val = { name: "天子笑" };
console.log(JSON.stringify(data).indexOf(JSON.stringify(val)) !== -1);
// console.log(data.indexOf(val) !== -1);
//因为数组和对象是引用值不能比较，所以需要序列化一下转成字符串
let a = [1,2,{name: 'A'}],
b = [1,2,{name: 'A'}];
console.log(JSON.stringify(a) === JSON.stringify(b));//true