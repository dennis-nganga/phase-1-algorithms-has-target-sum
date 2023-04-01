function hasTargetSum(array, target) {
  // check if array has at least two elements
  if (array.length < 2) {
    return false;
  }

  // initialize a set to keep track of seen numbers
  let seen = new Set();

  // iterate through the array
  for (let num of array) {
    // calculate the complement needed to reach the target
    let complement = target - num;
    // if the complement has been seen, then a pair has been found
    if (seen.has(complement)) {
      return true;
    }
    // add the current number to the set
    seen.add(num);
  }

  // no pairs found
  return false;
}

/*
  Time complexity: O(n), where n is the number of elements in the array. 
    We iterate through the array once, and the set operations are constant time.
  Space complexity: O(n), where n is the number of elements in the array.
    In the worst case, all elements in the array are unique, so we need to store
    them all in the set.
*/

/*
  Pseudocode:
  1. If the array has less than 2 elements, return false
  2. Initialize a set to keep track of seen numbers
  3. For each number in the array:
       a. Calculate the complement needed to reach the target
       b. If the complement has been seen, return true
       c. Add the current number to the set
  4. If no pairs found, return false
*/

/*
  Solution explanation:
  The approach we take is to use a set to keep track of seen numbers as we iterate through the array.
  For each number in the array, we calculate the complement needed to reach the target, and check
  if the complement has been seen. If it has, then we've found a pair that adds up to the target.
  If we iterate through the entire array and no pairs are found, then we return false.
  This approach has a time complexity of O(n), where n is the number of elements in the array,
  since we iterate through the array once. The space complexity is also O(n), since in the worst case
  we need to store all elements in the set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
