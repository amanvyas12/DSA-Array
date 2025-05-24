/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 3, 5, 3, 5, 2, 3335, 3, 2, 234, 532];

function largestElementInArray(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
largestElementInArray(arr);

// Time Complexity = O(n)
// Space Complexity = O(n)
