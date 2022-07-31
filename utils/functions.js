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
	// console.log(bubbleSort(list));
})();
(function () {
	const list = ["A", "B", "C", "A", "B", "D", "A", "E", "F", "G", "D", "A", "C"];
	const list2 = [
		{ name: "A", age: 11 },
		{ name: "B", age: 20 },
		{ name: "C", age: 33 },
		{ name: "A", age: 20 },
		{ name: "C", age: 11 },
		{ name: "D", age: null },
		{ name: "E", age: undefined },
	];
	const res = list.reduce((acc, cur) => {
		if (!acc[cur]) {
			acc[cur] = 0;
		}
		acc[cur]++;
		return acc;
	}, {});
	// console.log(res);
	const res2 = list2.reduce((acc, cur) => {
		if (!acc[cur.name]) {
			acc[cur.name] = {
				amount: 0,
				vlaue: [],
			};
		}
		acc[cur.name]["amount"]++;
		acc[cur.name]["vlaue"].push(cur);
		return acc;
	}, {});
	// console.log(JSON.stringify(res2,'',2));
})();
(function () {
	function uuid(len, radix) {
		const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
		let uuid = [],
			i;
		radix = radix || chars.length;

		if (len) {
			for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
		} else {
			let r;

			uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
			uuid[14] = "4";

			for (i = 0; i < 36; i++) {
				if (!uuid[i]) {
					r = 0 | (Math.random() * 16);
					uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
				}
			}
		}
		return uuid.join("");
	}
	// console.log(uuid(10));
})();
(function () {
	// 随机RGB颜色值
	function Color() {
		this.r = Math.floor(Math.random() * 255);
		this.g = Math.floor(Math.random() * 255);
		this.b = Math.floor(Math.random() * 255);
		this.color = "rgba(" + this.r + "," + this.g + "," + this.b + ",0.8)";
	}
	// console.log(new Color().color);
	// 生成十六进制的颜色值
	function getRandomColor() {
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	}
	// Array.from({length: 10}).map(() => {console.log(getRandomColor());})
	function Color2() {
		this.colorAngle = Math.floor(Math.random() * 360);
		this.color = "hsla(" + this.colorAngle + ",100%,50%,1)";
	}
	// console.log(new Color2().color);
})();
