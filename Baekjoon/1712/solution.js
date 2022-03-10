const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log(B >= C ? -1 : Math.floor(A / (C - B) + 1));
