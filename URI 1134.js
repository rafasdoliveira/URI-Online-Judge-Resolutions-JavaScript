// Tipo de combustível

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var alcool = 0;
var diesel = 0;
var gasolina = 0;

var i = 1;

while (i != 4) {
   i = parseInt(lines.shift());
    if (i === 1) {
        alcool++;
    } else if (i === 2) {
        gasolina++;
    } else if (i === 3){
        diesel++;
    } else if (i === 4)
        break;
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);
