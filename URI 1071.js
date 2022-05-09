// Soma de Impares Consecutivos I

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

x = parseInt(lines.shift());
y = parseInt(lines.shift());
soma = 0; 

if (x > y) {
        aux = x;
        x = y;
        y = aux;
}

for(i = x+1; i < y; i++) {
        if((i % 2) !== 0) {
                soma += i;            
        }
}

console.log(soma);

