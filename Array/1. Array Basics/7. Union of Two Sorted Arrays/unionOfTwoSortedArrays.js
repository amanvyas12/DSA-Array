/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr1 = [1, 2, 3, 4, 5, 5, 6, 7, 7];
let arr2 = [2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10];
let unionArray = [];
function unionOfSortedArray(arr1, arr2, unionArray) {
  let s1 = arr1.length;
  let s2 = arr2.length;
  let i = 0;
  let j = 0;
  while (i < s1 && j < s2) {
    if (arr1[i] < arr2[j]) {
    }
  }
  return unionArray;
}
unionOfSortedArray(arr1, arr2, unionArray);
