// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  //var fn check first char
  var checkFirst = function(remainder) {
    if (remainder.charAt(0) === '[') {
      return addArray(remainder);
    } 
    if (remainder.charAt(0) === '{') {
      return addObject(remainder);
    } 
  };

  var addArray = function(remainder) {
    var temp = [];

    return temp;
  };
  
  var addObject = function(remainder) {
    var temp = {};
    if (remainder.charAt(1) === '"') {
      var key = addString(remainder.slice(2));
    }
    
    temp[key] = "";//value
    return temp;
  };

  var addString = function(remainder) {
    return remainder.substring(0,remainder.indexOf('"'));
  };

  return checkFirst(json);


};
