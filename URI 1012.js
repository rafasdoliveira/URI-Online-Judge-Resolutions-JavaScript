// Área

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift().split(" ");
    var A = parseFloat(linha1.shift());
    var B = parseFloat(linha1.shift());
    var C = parseFloat(linha1.shift());
        
        var tri = (A * C) / 2;
        var cir = 3.14159 * Math.pow(C,2);
        var tap = ((A + B) * C) / 2;
        var qua = Math.pow(B,2);
        var ret = A * B;
        
            console.log("TRIANGULO: " + tri.toFixed(3));
            console.log("CIRCULO: " + cir.toFixed(3));
            console.log("TRAPEZIO: " + tap.toFixed(3));
            console.log("QUADRADO: " + qua.toFixed(3));
            console.log("RETANGULO: " + ret.toFixed(3));
            
