/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let d = 3;

function rotateDPlace(arr, d) {
  d = d % arr.length; // handle d > arr.length
  let temp = arr.slice(0, d); // store first d elements
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i]; // shift the rest to the left
  }
  for (let i = 0; i < temp.length; i++) {
    arr[arr.length - d + i] = temp[i]; // put the stored elements at the end
  }
  console.log(arr);
}
rotateDPlace(arr, d);

