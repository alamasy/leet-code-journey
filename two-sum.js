twoSum([2, 7, 11, 15], 9); // expected output [0,1]
twoSum([3, 2, 4], 6); // expected output [1, 2]
twoSum([3, 3], 6); // expected output [0,1]

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  let temp = 0;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num + temp === target) {
      res.push(i - 1);
      res.push(i);
    }

    temp = num;
  }
  return res;
}
