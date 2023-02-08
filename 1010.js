//Cálculo Simples

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');
//Recebe a primeira linha de dados
var p1 = lines.shift().split(" ");
//O método split() divide uma String em uma lista ordenada de substrings.
//Coloca essas substrings em um array e retorna o array.
//Os arrays são estruturas que servem para guardar dados, e organizá-los.  
  var cod1 = parseInt(p1.shift());
  //Exemplo: "12 1 5.30"; O primeiro a ser puxado será o inteiro 12
  var qtd1 = parseInt(p1.shift());
  //Exemplo: "12 1 5.30"; O primeiro a ser puxado será o inteiro 1
  var valor1 = parseFloat(p1.shift());
  //Exemplo: "12 1 5.30"; O primeiro a ser puxado será o ponto flutuante 5.30
  var valorTotal1 = qtd1 * valor1;

//Recebe a segunda linha de dados 
var p2 = lines.shift().split(" ");
  var cod2 = parseInt(p2.shift());
  var qtd2 = parseInt(p2.shift());
  var valor2 = parseFloat(p2.shift());
  var valorTotal2 = qtd2 * valor2;
var valorTotal = valorTotal1 + valorTotal2; 
console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));

