/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 4, 5];
let n = 5;
function missingNumber(arr, n) {
    let sum = n * (n + 1) / 2;
    let s2 = 0;
    for (let i = 0; i < arr.length; i++) {
        s2 += arr[i];
    }
    let missingNumber = sum - s2;
    console.log(missingNumber)
}
missingNumber(arr, n);