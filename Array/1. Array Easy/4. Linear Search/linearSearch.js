/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 4, 5, 6, 8, 1, 9];
let num = 8;
let index = 0;
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return (index = i);
    }
  }
  return -1;
}
linearSearch(arr, num);
console.log(index);
