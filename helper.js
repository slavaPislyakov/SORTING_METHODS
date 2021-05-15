function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const compareVar = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? compareVar.LESS_THAN : compareVar.BIGGER_THAN;
}

module.exports = {
  defaultCompare,
  compareVar,
  swap
};
