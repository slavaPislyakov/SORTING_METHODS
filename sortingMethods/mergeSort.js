const { defaultCompare, compareVar } = require("../helper");

function mergeSort(arr, compare = defaultCompare) {
  if (arr.length > 1) {
      const { length } = arr;
      const middle = Math.floor(length / 2);
      const left = mergeSort(arr.slice(0, middle), compare);
      const right = mergeSort(arr.slice(middle, length), compare);
      arr = merge(left, right, compare);
  }
  return arr;
}
function merge(left, right, compare) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
      result.push(compare(left[i], right[j]) === compareVar.LESS_THAN ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}


console.log(mergeSort([1, 2, 5, 7, 9, 1, 11, 77, 34, 22, 54]));
