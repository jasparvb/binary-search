function findFloor(arr, num) {
  let start = 0;
  let end = arr.length -1;
  if (num >= arr[end]) return arr[end];

  while (start <= end) {
    // find the mid value
    let midIdx = Math.floor((start + end) / 2);
    let midVal = arr[midIdx];

    if (midVal === num) {
      return midVal;
    } else if (arr[midIdx - 1] <= num && num < arr[midIdx]) {
      return arr[midIdx - 1];
    } else if (num < arr[midIdx]) {
      end = midIdx - 1;
    } else {
      start = midIdx + 1;
    }
  }
  return -1;
}

module.exports = findFloor