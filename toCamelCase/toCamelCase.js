function toCamelCase(str){
  return str.split('').map(function(value, index, array) {
    var lastVal = array[index-1] || '';
    return (value === '_' || value === '-') ?
      '' :
      (lastVal === '_' || lastVal === '-') ?
        value.toUpperCase() :
        value;
  }).join('');
}
