function rgb(r, g, b){
  var result = [r, g, b].map(function(value){
    if (value > 255) return 255;
    if (value < 0) return 0;
    return value;
  });
  return result.reduce(function(prev, curr){
    var converted = curr.toString(16);
    if (converted.length === 1) converted = '0' + converted;
    return prev + converted.toUpperCase();
  }, '');
}
