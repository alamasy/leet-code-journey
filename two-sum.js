twoSum([2, 7, 11, 15], 9); // expected output [0,1]
twoSum([3, 2, 4], 6); // expected output [1, 2]
twoSum([3, 3], 6); // expected output [0,1]

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(numbers, treshold) {
  let temp = 0;
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (temp + number === treshold) {
      result.push(i - 1);
      result.push(i);
    }

    temp = number;
  }

  console.log(result);
}
