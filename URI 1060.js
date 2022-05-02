// Números positivos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var D = parseFloat(lines.shift());
var E = parseFloat(lines.shift());
var F = parseFloat(lines.shift());

var cont = 0;

if(A > 0) {
    cont++;
} else if(B > 0) {
    cont++;
} else if(C > 0) {
    cont++;
} else if(D > 0) {
    cont++;
} else if(E > 0) {
    cont++;
} else if(F >0) {
    cont++;
}
    console.log(cont + " valores positivos");
