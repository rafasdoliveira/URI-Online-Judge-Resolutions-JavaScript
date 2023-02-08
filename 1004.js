//Produto Simples

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var Produto = A*B;
console.log("PROD = " + Produto); 