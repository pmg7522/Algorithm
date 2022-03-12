const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split(" ");

let num = parseInt(input[0]);
let count = 0;

while (num > 0) {
  if (num % 5 === 0) {
    num -= 5;
    count++;
  } else if (num % 3 === 0) {
    num -= 3;
    count++;
  } else if (num > 5) {
    num -= 5;
    count++;
  } else {
    count--;
    break;
  }
}
console.log(count);
