// return masked credit card string
function maskify(cc) {
  return cc.split('').reverse().map(function(value, index) {
    return (index > 3) ? "#" : value;
  }).reverse().join('');
}
