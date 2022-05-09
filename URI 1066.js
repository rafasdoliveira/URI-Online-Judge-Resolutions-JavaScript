// Pares, Ímpares, Positivos e Negativos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

pares = 0;
impares = 0;
positivos = 0;
negativos = 0;

for(i =0; i < 5; i++) {
    
        x = parseInt(lines.shift());
        if (x > 0) {
            positivos++;
        } else if (x < 0){
            negativos++;
        }
        if ((x % 2) === 0) {
            pares++;
        } else {
            impares++;
        }
    }
console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");
