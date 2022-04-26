// Distância

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = parseInt(lines.shift());
var time = (line * 60) / 30;

console.log(time + " minutos");
