/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

// let arr = [1, 23, 4, 3, 2, 14, 54, 2, 4, 234];
let arr = [1, 2, 3, 4, 5, 6];
function sortedArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
}
const sorted = sortedArray(arr);
console.log(sorted);

// Optimal Soultion will have
// Time Complexity = O(n)
// Space Complexity = O(n)
