// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "number" || typeof obj === 'boolean') {
    return '' + obj ;
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else if (obj.length > 0) {     
      var results = [];
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results + ']';
    }
  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var results = [];
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== "undefined") {
          results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + results + '}';
    }
  }
};
