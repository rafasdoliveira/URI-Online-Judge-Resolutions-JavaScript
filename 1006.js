//Média 2

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var pesoA = 2;
var B = parseFloat(lines.shift());
var pesoB = 3;
var C = parseFloat(lines.shift());
var pesoC = 5;

var media = ((A*pesoA) + (B*pesoB) + (C*pesoC)) / 10;
console.log("MEDIA = " + media.toFixed(1));