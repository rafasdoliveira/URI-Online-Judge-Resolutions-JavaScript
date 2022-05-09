// Maior e Posição

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

maior = 0;
posicao = 0;

for(i = 1; i <= 100; i++) {
    
        x = parseInt(lines.shift());
        if(x > maior) {
            maior = x;
            posicao = i;
        }
}

console.log(maior);
console.log(posicao);
