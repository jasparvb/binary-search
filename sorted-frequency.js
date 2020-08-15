function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let leftIdxFinal = -1;
  let rightIdxFinal = -1;
  
  //Find left index
  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else if (middleVal === val && (arr[middleIdx - 1] < val || !arr[middleIdx - 1])) {
      // middleVal is too large, look at the left half
      leftIdxFinal = middleIdx;
      leftIdx = rightIdx + 1;
    } else {
      // we found our value!
      rightIdx = middleIdx - 1;
    }
  }
  //Find right index
  leftIdx = leftIdxFinal;
  rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === val && (arr[middleIdx + 1] > val || !arr[middleIdx + 1])) {
      // middleVal is too small, look at the right half
      rightIdxFinal = middleIdx;
      leftIdx = rightIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // middleVal is too large, look at the left half
      leftIdx = middleIdx + 1;
    }
  }

  if (leftIdxFinal === -1) return -1;
  
  return rightIdxFinal - leftIdxFinal + 1;
}


module.exports = sortedFrequency