/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 * Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
 */
const maximumWealth = function (accounts) {
  let temp = 0;
  for (let i = 0; i < accounts.length; i++) {
    const accountsWealthTotal = accounts[i].reduce((a, b) => a + b);
    if (accountsWealthTotal >= temp) {
      temp = accountsWealthTotal;
    }
  }
  console.log(temp);
};

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
