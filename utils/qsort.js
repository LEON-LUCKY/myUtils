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