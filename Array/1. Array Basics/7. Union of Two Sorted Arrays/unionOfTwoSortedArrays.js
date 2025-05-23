let arr1 = [1, 2, 3];
let arr2 = [2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10];
let unionArray = [];

function unionOfSortedArray(arr1, arr2, unionArray) {
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    } else if (arr2[j] < arr1[i]) {
      if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
    } else {
      // arr1[i] === arr2[j]
      if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
      unionArray.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
      unionArray.push(arr2[j]);
    }
    j++;
  }

  return unionArray;
}

unionOfSortedArray(arr1, arr2, unionArray);
console.log(unionArray);
