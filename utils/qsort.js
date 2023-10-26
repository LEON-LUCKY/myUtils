const qsort = arr => {
	if (arr.length <= 1) return arr; // 基线条件
	// 用于储存分割数组
	const left = [];
	const right = [];
	const pivotIndex = 0;
	const [pivot] = arr.splice(pivotIndex, 1); // 选取基准值
	// 分割数组
	arr.forEach(i => {
		if (i < pivot) {
			left.push(i);
		} else {
			right.push(i);
		}
	});
	// 递归分割已分割数组
	return [...qsort(left), pivot, ...qsort(right)];
};
// js 选择排序方法
const sortMethods = {
	// 升序
	asc: function (prop) {
		return function (obj1, obj2) {
			var val1 = obj1[prop];
			var val2 = obj2[prop];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 < val2) {
				return -1;
			} else if (val1 > val2) {
				return 1;
			} else {
				return 0;
			}
		};
	},
	// 降序
	desc: function (prop) {
		return function (obj1, obj2) {
			var val1 = obj1[prop];
			var val2 = obj2[prop];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 < val2) {
				return 1;
			} else if (val1 > val2) {
				return -1;
			} else {
				return 0;
			}
		};
	}
};
// 应用选择排序方法
const sortMethodsApply = (arr, prop, method) => {
	return arr.sort(sortMethods[method](prop));
};
