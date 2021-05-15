const { defaultCompare, compareVar } = require("../helper");

function insertionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - 1], temp) === compareVar.BIGGER_THAN) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(insertionSort([1, 2, 5, 7, 9, 1, 11, 77, 34, 22, 54]));
