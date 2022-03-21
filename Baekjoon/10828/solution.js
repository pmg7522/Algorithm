const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split("\n");

const length = parseInt(input.shift(), 10);
const stack = [];
const result = [];

for (let i = 0; i < length; i++) {
  switch (input[i]) {
    default:
      stack.push(input[i].split(" ")[1]);
      break;

    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}
console.log(result.join("\n"));
