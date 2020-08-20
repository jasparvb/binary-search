function findRotatedIndex(arr, num) {
  let start = 0;
  let end = arr.length -1;
  let pivot = 0;

  while (start <= end) {
    // find the mid value
    let midIdx = Math.floor((start + end) / 2);
    let midVal = arr[midIdx];

    if (midVal > arr[midIdx + 1 ]) {
      pivot = midIdx + 1;
      start = end + 1;
    } else if (arr[start] <= midVal) {
      start = midIdx + 1;
    } else {
      end = midIdx - 1;
    }
  }

}

module.exports = findRotatedIndex