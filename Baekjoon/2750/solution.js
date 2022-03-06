const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

input.shift();
console.log(input.sort((a, b) => a - b));
