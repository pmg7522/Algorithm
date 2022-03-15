const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const length = parseInt(input[0]);
const numbers = input[1].split(" ").map((res) => parseInt(res));
let count = 0;

for (let i = 0; i < length; i++) {
  if (numbers[i] <= 2) {
    continue;
  } else {
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        continue;
      }
    }
    count++;
  }
}
console.log(count);
