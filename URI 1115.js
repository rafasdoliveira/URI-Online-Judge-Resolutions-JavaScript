// Quadrante

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = true;

while (i === true) {
    var line = lines.shift().split(" ");
    var X = parseInt(line.shift());
    var Y = parseInt(line.shift());
  
    if (X === 0 || Y === 0) {
        i = false;
      } else {
          if (X > 0 && Y > 0) {
            console.log("primeiro");
          } else if (X < 0 && Y > 0) {
            console.log("segundo");
          } else if (X < 0 && Y < 0) {
             console.log("terceiro");
          } else if (X > 0 && Y < 0) {
              console.log("quarto")
          }
        }
    }
      
