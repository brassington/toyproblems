function palindrome(string) {
  var reversed = [], cleanString = string.replace(/[^\w]*/ig,'').toLowerCase();
  cleanString.split('').forEach(function(letter){ reversed.unshift(letter); });
  return cleanString === reversed.join('');
}
