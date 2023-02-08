//Extremamente Básico

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');
//"var" declara uma variável, e é possível atribuir um valor em sua inicialização
var A = parseInt(lines.shift());
//"parseInt"Transforma um texto(string) em um número (inteiro)
var B = parseInt(lines.shift());
//".shift()" remove o elemento de índice 0, diminui em 1 os indices dos demais valores e retorna o valor removido.
var soma = A + B;

console.log("X = " + soma);
