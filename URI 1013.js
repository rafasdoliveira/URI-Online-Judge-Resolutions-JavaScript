// O maior

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var a = parseInt(line.shift());
var b = parseInt(line.shift());
var c = parseInt(line.shift());

var ab = (a + b + Math.abs(a - b)) / 2;
var abc = (ab + c + Math.abs(ab - c)) / 2;

console.log(abc + " eh o maior");
