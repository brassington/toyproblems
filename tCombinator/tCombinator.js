var compose = function(val) {
  return [].slice.call(arguments, 1).reduce(function(previousVal, currentFunc) { return currentFunc(previousVal); }, val);
}
