const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split(" ");

const num = parseInt(input[0]);

const fibonacci = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

console.log(fibonacci(num));