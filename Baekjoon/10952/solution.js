const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

let i = 0;
let result = "";

while (i < input.length) {
  const A = parseInt(input[i].split(" ")[0]);
  const B = parseInt(input[i].split(" ")[1]);
  if (A === 0 && B === 0) {
    break;
  } else {
    result += `${A + B}` + "\n";
    i++;
  }
}
console.log(result);
