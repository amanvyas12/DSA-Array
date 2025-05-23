/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 3, 4, 5, 0, 7, 5, 3, 0, 0, 0, 3, 3, 5, 5, 3]
function moveZerosToEnd(arr) {
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
    }
    if (j == -1 ) return arr;
    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
    
}
moveZerosToEnd(arr);
console.log(arr);