(function () {
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
})();
(function () {
	const arr = ["", "A", "B", "C", 0, false, undefined, null, NaN];
	// 过滤 Boolean 类型的值
	const res = arr.filter(Boolean);

	const list = [
		{ name: "A", age: 11 },
		{ name: "B", age: 20 },
		{ name: "C", age: 33 },
		{ name: "", age: 20 },
		{ name: "", age: 11 },
		{ name: "D", age: null },
		{ name: "E", age: undefined },
	];

	const res2 = list.filter(item => item.name && item.age);
})();
(function () {
	let list = [1, 3, 2, 0];
	function bubbleSort(list = [], order = "DOWN") {
		
		for (let i = 0; i < list.length; i++) {
			for (let p = i + 1; p < list.length; p++) {
				let diff1, diff2;
				switch (order) {
					case "UP":
						diff1 = list[p];
						diff2 = list[i];
						break;
					case "DOWN":
						diff1 = list[i];
						diff2 = list[p];
						break;
				}
				if (diff1 > diff2) {
					let tep = null;
					tep = list[i];
					list[i] = list[p];
					list[p] = tep;
				}
			}
		}
		return list;
	}
	console.log(bubbleSort(list));
})();
