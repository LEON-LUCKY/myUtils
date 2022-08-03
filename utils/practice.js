// 循环打印红绿灯
(function () {
	function red() {
		console.log("当前是红灯 5秒后 显示绿灯");
		return new Promise(resolve => {
			let item = setInterval(() => {
				console.log("..v..");
			}, 1000);
			setTimeout(() => {
				clearInterval(item);
				const greenPromise = green();
				resolve(greenPromise);
			}, 5000);
		});
	}
	function green() {
		console.log("当前是绿灯 3秒后 显示黄灯");
		return new Promise(resolve => {
			let item = setInterval(() => {
				console.log("..v..");
			}, 1000);
			setTimeout(() => {
				clearInterval(item);
				const yellowPromise = yellow();
				resolve(yellowPromise);
			}, 3000);
		});
	}
	function yellow() {
		console.log("当前是黄灯 1秒后 显示红灯");
		return new Promise(resolve => {
			setTimeout(() => {
				const redPromise = red();
				resolve(redPromise);
			}, 1000);
		});
	}
	// 优化后
	function time(color, delay, next) {
		console.log(`当前是${color}灯 ${delay}秒后 显示${next}灯`);
		return new Promise(resolve => {
			setTimeout(() => {
				resolve();
			}, delay * 1000);
		});
	}
	async function run() {
		await time("红", 5, "绿");
		await time("绿", 3, "黄");
		await time("黄", 1, "红");
		await run();
	}
	// run();
})();
// 终止for循环
(function () {
	// 找到第一个吃香蕉的人
	const person = [
		{
			name: "李四",
			fruit: ["苹果", "香蕉"],
		},
		{
			name: "张三",
			fruit: ["苹果", "葡萄"],
		},
		{
			name: "王五",
			fruit: ["香蕉", "芒果"],
		},
	];
	let personName;
	loop1: for (let i = 0; i < person.length; i++) {
		loop2: for (let p = 0; p < person[i].fruit.length; p++) {
			let fruit = person[i].fruit[p];
			if (fruit === "香蕉") {
				personName = person[i].name;
				console.log(personName);
				break loop1;
			}
		}
	}
	console.log("外层输出：", personName);
})();
// 生成树状结构
(function () {
	const list = [
		{
			id: 1,
			name: "目录1",
			parentId: 0,
		},
		{
			id: 2,
			name: "目录2",
			parentId: 0,
		},
		{
			id: 3,
			name: "目录1-1",
			parentId: 1,
		},
		{
			id: 4,
			name: "目录1-2",
			parentId: 1,
		},
		{
			id: 5,
			name: "目录2-1",
			parentId: 2,
		},
	];
	const maps = {};
	const result = [];
	list.forEach(item => {
		maps[item.id] = item;
	});

	list.forEach(item => {
		const parent = maps[item.parentId];
		if (parent) {
			// 有父元素
			parent.children = parent.children || [];
			parent.children.push(item);
		} else {
			// 没有父元素，代表是第一级
			result.push(item);
		}
	});
	console.log(JSON.stringify(result, "", 2));
})();
