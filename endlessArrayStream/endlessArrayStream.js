var Stream = function(start, output, stepping) {
  this.value = start;
  this.output = output;
  this.stepping = stepping;
};

Stream.prototype = {
  head: function() {
    return this.output(this.value);
  },
  tail: function() {
    return new Stream(this.stepping(this.value), this.output, this.stepping);
  },
};
