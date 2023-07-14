// 1. 生成从2022-12-31到2023-07-01的字符串列表
const dateList = [];
const startDate = new Date("2022-12-31");
const endDate = new Date("2023-07-01");
while (startDate <= endDate) {
  dateList.push(startDate.toISOString().split("T")[0]);
  startDate.setDate(startDate.getDate() + 1);
}
/**
 * 2. 使用第一步生成的列表再生成如下结构数据
 * dateTree = [
 *  {
 *      label: '2023',
 *      value: '2023',
 *      children: [
 *          {
 *              label: '2023-07',
 *              value: '2023-07',
 *              children: [{ label: '2023-07-14', value: '2023-07-14' },{ label: '2023-07-13', value: '2023-07-13' }]
 *         }
 *      ]
 *  }
 * ]
 */
const dateTree = [];
const yearMap = {};
const monthMap = {};
dateList.forEach((date) => {
    const [year, month, day] = date.split("-");
    if (!yearMap[year]) {
        yearMap[year] = {
        label: year,
        value: year,
        children: [],
        };
        dateTree.push(yearMap[year]);
    }
    if (!monthMap[month]) {
        monthMap[month] = {
        label: `${year}-${month}`,
        value: `${year}-${month}`,
        children: [],
        };
        yearMap[year].children.push(monthMap[month]);
    }
    monthMap[month].children.push({
        label: date,
        value: date,
    });
    }
);
console.log(dateTree);


