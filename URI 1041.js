// Coordenadas de Ponto

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var x = parseFloat(line.shift());
var y = parseFloat(line.shift());

if(x === 0 && y === 0) {
    console.log("Origem");
} else if(x !== 0 && y === 0) {
    console.log("Eixo X");
} else if(x === 0 && y !== 0) {
    console.log("Eixo Y");
} else if(x > 0 && y > 0) {
    console.log("Q1");
} else if(x < 0 && y > 0) {
    console.log("Q2");
} else if(x < 0 && y < 0) {
    console.log("Q3");
} else if(x > 0 && y < 0) {
    console.log("Q4");
}
