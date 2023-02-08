// Área do Círculo

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var pi = 3.14159;
var area = pi * Math.pow(raio, 2);
//Math.pow(base, expoente)

console.log("A=" + area.toFixed(4));
//O método toFixed() formata um número utilizando notação de ponto fixo.
//numObj.toFixed([dígitos])
