const arr = {
	id: undefined,
	age: null,
	handler: function() {
		return "zs";
	},
	name: "张三",
	children: [{ name: "张四", children: [{ name: "张五" }] }]
};

function deepClone(origin) {
	const TYPELIST = ["number", "string", "boolean", "undefined", "function", "bigint", "symbol"];

	if (origin === null) return origin;
	
	if (TYPELIST.includes(typeof origin)) return origin;

	const result = Array.isArray(origin) ? [] : {};

	for (let key in origin) {
		result[key] = deepClone(origin[key]);
	}

	return result;
}

// console.log(JSON.stringify(deepClone(arr), "", 2));
// console.log('深度拷贝',deepClone(arr));

const res = deepClone(arr);

console.log(res);
