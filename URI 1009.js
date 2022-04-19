// Salário com bônus

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Fname  = lines.shift();
var salary = parseFloat(lines.shift());
var sales  = parseFloat(lines.shift());

var comissao = sales * 0.15;
var valorTotal = salary + comissao;

console.log("TOTAL = R$ " + valorTotal.toFixed(2));

