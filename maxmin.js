function getMaxMin(arr) {
  let currentMin = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
    } else if (arr[i] > currentMax) {
      currentMax = arr[i];
    }
  }

  return [currentMin, currentMax];
}

console.log(getMaxMin([2, 4, 1, 0, 2, -1]));
