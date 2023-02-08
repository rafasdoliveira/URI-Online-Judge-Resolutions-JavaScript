//Salário

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var cod = parseInt(lines.shift());
var horas= parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = horas * valorHora;

console.log("NUMBER = " + cod);
console.log("SALARY = U$ " + salario.toFixed(2));