const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split(" ");

let num = parseInt(input[0]);
let star = "";

for (let i = 1; i <= num; i++) {
  star += " ".repeat(num - i) + "*".repeat(i * 2 - 1) + "\n";
}
console.log(star);
