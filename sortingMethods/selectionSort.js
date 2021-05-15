const { defaultCompare, swap, compareVar } = require("../helper");

function selectionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (compare(arr[minIndex], arr[j]) === compareVar.BIGGER_THAN) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

console.log(selectionSort([1, 2, 5, 7, 9, 1, 11, 77, 34, 22, 54]));
