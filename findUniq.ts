function findUniq(arr) {
  const item1 = arr[0];
  const item2 = arr[1];
  const item3 = arr[2];

  let mainChar = item1 !== item2 && item1 !== item3 ? item2 : item1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== mainChar) {
      return arr[i];
    }
  }
}

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
