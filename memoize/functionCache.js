function cache(func) {
  var storage = {};
  var cachedFunc = func;

  return function() {
    var args = JSON.stringify(Array.prototype.slice.call(arguments));
    if (!storage.hasOwnProperty(args)) {
      return storage[args] = cachedFunc.apply(this, arguments);
    }
    return storage[args];
  }

}
