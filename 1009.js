//Salário com Bônus

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var nome = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var comissao = .15;

var salarioTotal = (vendas * comissao) + salario;
console.log(nome);
console.log("TOTAL = R$ " + salarioTotal.toFixed(2));
