const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const result = [];
const firstLine = input[0].split(" ");
const N = parseInt(firstLine[0]);
const X = parseInt(firstLine[1]);
const secondLine = input[1].split(" ");

for (let i = 0; i < N; i++) {
  if (parseInt(secondLine[i]) < X) {
    result.push(parseInt(secondLine[i]));
  }
}

console.log(result);
