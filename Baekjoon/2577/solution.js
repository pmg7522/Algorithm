const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const totalNum = String(input.reduce((acc, cur) => (acc *= cur)));

for (let i = 0; i <= 9; i++) {
  console.log(totalNum.split(i).length - 1);
}
