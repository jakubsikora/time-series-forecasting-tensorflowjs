const fs = require("fs");

const rawdata = fs.readFileSync("./newdata.json");
const data = JSON.parse(rawdata);
const dailyInstalls = {};
const dailyUninstalls = {};

data.forEach((item) => {
  const parsedDate = new Date(item.CreatedAt);
  const year = parsedDate.getFullYear();
  const month =
    parsedDate.getMonth() + 1 < 10
      ? `0${parsedDate.getMonth() + 1}`
      : parsedDate.getMonth() + 1;
  const day =
    parsedDate.getDate() < 10
      ? `0${parsedDate.getDate()}`
      : parsedDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  if (item.Type === "Installed") {
    if (!dailyInstalls[formattedDate]) {
      dailyInstalls[formattedDate] = 1;
    } else {
      dailyInstalls[formattedDate] += 1;
    }
  }

  if (item.Type === "Uninstalled") {
    if (!dailyUninstalls[formattedDate]) {
      dailyUninstalls[formattedDate] = 1;
    } else {
      dailyUninstalls[formattedDate] += 1;
    }
  }
});

// console.log(dailyInstalls);
// console.log(dailyUninstalls);

const now = new Date();
// const daysOfYear = [];

// const parseItems = (items) => {
//   const parsedItems = {};

//   items.forEach((item) => {
//     const parsedDate = new Date(item.atDay);
//     const year = parsedDate.getFullYear();
//     const month =
//       parsedDate.getMonth() + 1 < 10
//         ? `0${parsedDate.getMonth() + 1}`
//         : parsedDate.getMonth() + 1;
//     const day =
//       parsedDate.getDate() < 10
//         ? `0${parsedDate.getDate()}`
//         : parsedDate.getDate();

//     parsedItems[`${year}-${month}-${day}`] = item.count;
//   });

//   return parsedItems;
// };

// const installedParsed = parseItems(installed);

const formattedData = [];
let total = 0;

for (let d = new Date("2019-08-06"); d <= now; d.setDate(d.getDate() + 1)) {
  const year = d.getFullYear();
  const month =
    d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  const installed = dailyInstalls[formattedDate] || 0;
  const uninstalled = dailyUninstalls[formattedDate] || 0;
  total += installed - uninstalled;

  formattedData.push({
    date: formattedDate,
    balance: total,
  });

  // console.log(`${year}-${month}-${day}`);
}

console.log("formattedData", formattedData);

const dataJSON = JSON.stringify(formattedData, null, "\t");

fs.writeFileSync("./data.json", dataJSON);

// // console.log("data", data);
