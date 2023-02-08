//Média 1

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var pesoA = 3.5;
var B = parseFloat(lines.shift());
var pesoB = 7.5;

var media = ((A*pesoA) + (B*pesoB)) / 11;
console.log("MEDIA = " + media.toFixed(5));