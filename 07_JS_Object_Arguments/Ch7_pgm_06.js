// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
 
var spaces = function (numSpaces) {
  var spaces = "                                        "; // 40 spaces
  numSpaces = Math.max(0, numSpaces);
  numSpaces = Math.min(40, numSpaces);
  return spaces.substr(0, numSpaces);
};

var emptyBox = function (width) {
  width = Math.max(0, width);
  width = Math.min(40, width);

  if (width === 0) {
      return;
  }

  var topBottom = line(width);
  var middle = "|" + spaces(width - 2) + "|";

  console.log(topBottom);
  for (var i = 0; i < 3; i++) {
      console.log(middle);
  }
  console.log(topBottom);
};

// Testing line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("line(" + i + "): " + line(i));
}

console.log("spaces(10): '" + spaces(10) + "'");
console.log("spaces(0): '" + spaces(0) + "'");
console.log("spaces(40): '" + spaces(40) + "'");
console.log("spaces(50): '" + spaces(50) + "'");

// Drawing empty boxes with different widths
console.log("emptyBox(12):");
emptyBox(12);

console.log("emptyBox(5):");
emptyBox(5);

console.log("emptyBox(0):");
emptyBox(0);

console.log("emptyBox(40):");
emptyBox(40);

console.log("emptyBox(45):");
emptyBox(45);
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */