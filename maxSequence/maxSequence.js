var maxSequence = function(arr){
  var maxSum = 0;
  var allNegative = arr.reduce(function(prev, curr) { return (curr < 0) ? prev : curr + prev }, 0);
  if (arr.length === 0 || allNegative === 0) return 0;
  arr.forEach(function(value, index, array){
    var total = array.slice(index).reduce(function(prev, curr) {
      if(prev > maxSum) maxSum = prev;
      return prev + curr;
    });
    if (total > maxSum) maxSum = total;
  });
  return maxSum;
}
