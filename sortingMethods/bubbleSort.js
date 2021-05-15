const { defaultCompare, swap, compareVar } = require("../helper");

function bubbleSort(arr, compare = defaultCompare) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) === compareVar.BIGGER_THAN) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 2, 5, 7, 9, 1, 11, 77, 34, 22, 54]));
