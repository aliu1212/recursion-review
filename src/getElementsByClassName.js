// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// You should use document.body, element.children, and element.classList
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  //start with document.body and an empty array
  //iterate through the classlist, add node if it matches classname
  //iterate through the children, recurse.

  var results = [];
  
  var finder = function(myElement) {
    for (var i = 0; i < myElement.classList.length; i++) {
      if (myElement.className === className) {
        results.push(myElement);
      }
    }
    for (var i = 0; i < myElement.children.length; i++) {
      finder(myElement.children[i]);
    }
  };
  
  finder(document.body);
  return results;
};
