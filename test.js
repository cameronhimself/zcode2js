var fs = require('fs');
var zcode2js = require('./zcode2js');

var buffer = fs.readFileSync('minizork.z3');
var converted = zcode2js(buffer);

# TODO: write less stupid tests
if (converted.length > 100) {
  console.log('test passed');
} else {
  console.log('test failed');
}
