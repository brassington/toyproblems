function rowSumOddNumbers(n) {
  var nRowSum = 0;
      lastOdd = 1;

  if (n === 1) return 1;
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j <= i; j++) {
      lastOdd += 2;
      if (i === n-1) {
        nRowSum += lastOdd;
      }
    }
  }
  return nRowSum
}

// Better/simple solution
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }
