// Tabuada

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
for(var i = 1; i <= 10; i++)
    console.log(i + " x " + valor + " = " + (i * valor));
