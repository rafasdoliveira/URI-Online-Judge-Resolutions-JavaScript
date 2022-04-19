// Esfera

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var pi = 3.14159;

var volume = 4.0/3.0 * pi * Math.pow(R,3);

console.log("VOLUME = " + volume.toFixed(3));var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var pi = 3.14159;

var volume = 4.0/3.0 * pi * Math.pow(R,3);

console.log("VOLUME = " + volume.toFixed(3));
