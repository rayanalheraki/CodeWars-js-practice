function sumDigPow(a: number, b: number) {
  const resArray: Array<number> = [];
  for (let number = a; number <= b; number++) {
    const numberAsText = number.toString();
    const digitLen = number.toString().length;
    if (digitLen === 1) resArray.push(number);
    else {
      let sum = 0;
      for (let i = 0; i < digitLen; i++) {
        sum += Math.pow(+numberAsText[i], i + 1);
      }
      if (sum === number) resArray.push(number);
    }
  }
  return resArray;
}
