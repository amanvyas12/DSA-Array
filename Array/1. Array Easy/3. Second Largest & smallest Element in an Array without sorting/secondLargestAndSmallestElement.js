/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let arr = [1, 2, 3, 5, 7];

// Second Largest Element in Array
function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log('Second Largest Element is ' + secondLargest);
}
secondLargest(arr);

// Second Smallest Element in Array
function secondSmallest(arr) {
  let smallest = arr[0];
  let secondSmallest = Number.MAX_SAFE_INTEGER; //9007199254740991

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  console.log('Second Largest Element is ' + secondSmallest);
}
secondSmallest(arr);

// Brute Force will have
// Time Complexity = O(nlogn)
// Space Complexity = O(nlogn)

// Better solution will have
// Time Complexity = O(2n)
// Space Complexity = O(2n)

// Optimal Soultion will have
// Time Complexity = O(n)
// Space Complexity = O(n)
