//Distância Entre Dois Pontos

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var p1 = lines.shift().split(" ");
  var x1 = parseFloat(p1.shift());
  var y1 = parseFloat(p1.shift());
  
var p2 = lines.shift().split(" ");
  var x2 = parseFloat(p2.shift());
  var y2 = parseFloat(p2.shift());

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y1 - y2), 2));
console.log(distancia.toFixed(4));
