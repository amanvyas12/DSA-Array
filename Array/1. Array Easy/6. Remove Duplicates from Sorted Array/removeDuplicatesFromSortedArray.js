/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

function removeDuplicatesFromSortedArray(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return (arr.length = i + 1);
}
removeDuplicatesFromSortedArray(arr);
console.log(arr);
