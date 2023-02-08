//O maior

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = lines.shift().split(" ");
  var A = parseInt(valores.shift());
  var B = parseInt(valores.shift());
  var C = parseInt(valores.shift());

var maiorAB = (A + B + Math.abs(A - B)) / 2;
//A função Math.abs(x) retorna o valor absoluto de um número "x"
//var abs = Math.abs(x);
var maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;
console.log(maiorXC + " eh o maior");