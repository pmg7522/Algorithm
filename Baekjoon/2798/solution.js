const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const numbers = input[1].split(" ").map((res) => parseInt(res));
const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
let max = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
      if (max === M) {
        break;
      }
    }
  }
}
console.log(max);
