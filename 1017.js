//Distância

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var horas = parseInt(lines.shift());
var kmh = parseInt(lines.shift());
var kml = 12;

var litros = (horas * kmh) / kml;
console.log(litros.toFixed(3));