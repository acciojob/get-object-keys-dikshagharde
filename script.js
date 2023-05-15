//your JS code here. If required.
//your JS code here. If required.
// Creating the student object
var student = {
  name: "John Doe"
};

// Adding getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Using getKeys() method on the student object
var keys = student.getKeys();

// Printing the keys
console.log(keys);

console.log(student.getKeys());