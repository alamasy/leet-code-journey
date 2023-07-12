runningSum([1, 2, 3, 4]); // expected output [1,3,6,10]
runningSum([1, 1, 1, 1, 1]); // expected output [1,2,3,4,5]
runningSum([3, 1, 2, 10, 1]); // expected output [3,4,6,16,17]

// Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

function runningSum(numbers) {
  let temp = 0;
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    temp += numbers[i];
    result.push(temp);
  }

  console.log(result);
}
