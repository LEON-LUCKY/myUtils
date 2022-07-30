let list = [
	{ name: "A", age: 11 },
	{ name: "B", age: 20 },
	{ name: "C", age: 33 },
	{ name: "B", age: 20 },
	{ name: "A", age: 11 },
];
/**
 * {
 *  A: [{name:"A"}],
 *  B: [{name:"B"},{name:"B"}]
 * }
 */
// 按 Key 分类为数组
function classificationHandler(list = [], key = "") {
	return list.reduce((acc, cur) => {
		if (!acc[cur[key]]) {
			acc[cur[key]] = [];
		}
		acc[cur[key]].push(cur);
		return acc;
	}, {});
}

// 数组中元素是 Object 类型时的去重方法
function notRepetitHandler(list = [], key = "") {
	return list.reduce((acc, cur) => {
		if (acc.length === 0) {
			acc.push(cur);
		}
		const exist = acc.findIndex(item => item[key] === cur[key]);
		if (exist === -1) {
			acc.push(cur);
		}
		return acc;
	}, []);
}
