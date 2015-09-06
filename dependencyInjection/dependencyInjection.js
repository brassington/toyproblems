/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  var that = this;
  var funcArgs = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var args = [];
  var dependancies = func
    .toString()
    .match(funcArgs)[1]
    .replace(/\s/ig,"")
    .split(',');

  dependancies.forEach(function(key){
    if (that.dependency[key]) {
      args.push(that.dependency[key]);
    }
  });

  return function() {
    return func.apply(this, args);
  };
}
