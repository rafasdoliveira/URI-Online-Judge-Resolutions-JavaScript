//Distância

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var qtdMinutos = (60 * distancia) / 30;
console.log(qtdMinutos + " minutos");