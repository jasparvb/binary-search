function countZeroes(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if(arr[0] === 0) {
      return arr.length;
    }
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === 1) {
        //look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal === 0 && arr[middleIdx - 1] === 1) {
        // we found our value!
        return arr.length - middleIdx;
      } else {
        // look at the left half
        rightIdx = middleIdx - 1;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return 0;
  }

module.exports = countZeroes