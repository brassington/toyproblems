function maxContiguousSum (arr) {
  var results = [];
  var add = function(prev, curr){
    return prev + curr;
  };
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var reduced = arr.slice(i,j+1).reduce(add, 0);
      results.push(reduced);
    }
  }
  return results.sort(function(a, b){ return a - b; })[results.length-1];
}
