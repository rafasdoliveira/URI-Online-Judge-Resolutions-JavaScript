// Salário

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nFun = parseInt(lines.shift());
var nHr  = parseInt(lines.shift());
var valR = parseFloat(lines.shift());

var salario = nHr * valR;

console.log("NUMBER = " + nFun);
console.log("SALARY = U$ " + salario.toFixed(2));
