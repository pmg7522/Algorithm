const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().split(" ");

const Number = parseInt(input[0]);

const factorial = (params) => {
  if (params === 0) {
    return 1;
  }
  return params * factorial(params - 1);
};

console.log(factorial(Number));
