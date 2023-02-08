//Área 

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = lines.shift().split(" ");
  var valorA = parseFloat(valores.shift());
  var valorB = parseFloat(valores.shift());
  var valorC = parseFloat(valores.shift());

var triRet =  (valorA * valorC) / 2;
var circulo = 3.14159 * Math.pow(valorC, 2);
var trapezio = ((valorA + valorB) * valorC) / 2;
var quadrado = Math.pow(valorB, 2);
var retangulo = valorA * valorB;

console.log("TRIANGULO: " + triRet.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));