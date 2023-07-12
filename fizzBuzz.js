/**
 * @param {number} n
 * @return {string[]}
 * 
 Input: n = 3
Output: ["1","2","Fizz"]

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
 */
const fizzBuzz = function (n) {
  const res = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i);
    }
  }
  console.log(res);
};

fizzBuzz(3);
