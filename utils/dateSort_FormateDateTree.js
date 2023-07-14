const originData = [
  "2023-07-14",
  234,
  undefined,
  "2023-07-13",
  "2023-07-12",
  "2023-06-25",
  "2023-07-11",
  "2023-07-10",
  "2023-07-09",
  "2023-06-30",
  "2023-07-08",
  "2023-07-07",
  "2023-07-06",
  "2023-07-05",
  "2023-07-03",
  "2023-07-02",
  "2023-07-01",
  "2023-06-29",
  "2023-06-28",
  "2023-06-27",
  "2023",
  "2021",
  null,
  123,
  {},
  "2023-06-26",
  "2023-07-04",
];

// 1. 对dateList进行时间的降序排序
const dateList = originData
    .filter(item => typeof item === "string" && item.split("-").length === 3 && new Date(item) !== "Invalid Date")
    .sort((a, b) => new Date(b) - new Date(a));

/**
 * 2. 使用dateList列表再转化成如下结构数据
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
});

console.log(JSON.stringify(dateTree, null, 2));
