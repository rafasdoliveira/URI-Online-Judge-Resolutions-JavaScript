// Gasto de combustível

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines.shift());
var velo = parseInt(lines.shift());
var kml = 12;

var litros = (velo / kml) * time;
console.log(litros.toFixed(3));
