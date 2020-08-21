function findRotationCount(arr) {
  let start = 0;
  let end = arr.length -1;
  while (start <= end) {
    // find the mid value
    let midIdx = Math.floor((start + end) / 2);
    let midVal = arr[midIdx];

    if (midVal > arr[midIdx + 1]) {
      return midIdx + 1;
    } else if (arr[start] <= midVal) {
      start = midIdx + 1;
    } else {
      end = midIdx - 1;
    }
  }
  return 0;
}

module.exports = findRotationCount