const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const Num1 = parseInt(input[0])
const Num2 = parseInt(input[1])
const Num3 = Num2 % 10
const Num4 = parseInt(Num2 % 100 / 10)
const Num5 = parseInt(Num2 / 100)

console.log(Num1 * Num3)
console.log(Num1 * Num4)
console.log(Num1 * Num5)
console.log(Num1 * Num2)