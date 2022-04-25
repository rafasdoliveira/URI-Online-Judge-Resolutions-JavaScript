// Consumo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseFloat(lines.shift());
var combustivel = parseFloat(lines.shift());

var kml = distancia / combustivel;

console.log(kml.toFixed(3) + " km/l");
