# zcode2js

Convert from zcode files to JS files for use with [Parchment](https://github.com/curiousdannii/parchment).


## API

### `zcode2jS(buffer)`

`buffer` must be an instance of `Buffer`. Returns a string suitable for writing to a `.z*.js` file.

## Example
    var fs = require('fs');
    var zcode2js = require('zcode2js');

    var buffer = fs.readFileSync('minizork.z3');
    fs.writeFileSync('minizork.z3.js', zcode2js(buffer));
