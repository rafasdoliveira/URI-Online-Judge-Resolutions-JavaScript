// Cálculo Simples

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    var linha1 = lines.shift().split(" ");
        var cod1 = parseInt(linha1.shift());
        var qtd1 = parseInt(linha1.shift());
        var val1 = parseFloat(linha1.shift());
        var v1 = qtd1 * val1;
        
    var linha2 = lines.shift().split(" ");
        var cod2 = parseInt(linha2.shift());
        var qtd2 = parseInt(linha2.shift());
        var val2 = parseFloat(linha2.shift());
        var v2 = qtd2 * val2;
        
    var pagar = v1 + v2;
        console.log("VALOR A PAGAR: R$ " + pagar.toFixed(2));
