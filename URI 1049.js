// Animal

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();

if(a === "vertebrado" && b === "ave" && c === "carnivoro") {
    console.log("aguia");
} else if(a === "vertebrado" && b === "ave" && c === "onivoro") {
    console.log("pomba");
} else if(a === "vertebrado" && b === "mamifero" && c === "onivoro") {
    console.log("homem");
} else if(a === "vertebrado" && b === "mamifero" && c === "herbivoro") {
    console.log("vaca");    
} else if(a === "invertebrado" && b === "inseto" && c === "hematofago") {
    console.log("pulga");
} else if(a === "invertebrado" && b === "inseto" && c === "herbivoro") {
    console.log("lagarta");
} else if(a === "invertebrado" && b === "anelideo" && c === "hematofago") {
    console.log("sanguessuga");
} else if(a === "invertebrado" && b === "anelideo" && c === "onivoro") {
    console.log("minhoca");
}
    
