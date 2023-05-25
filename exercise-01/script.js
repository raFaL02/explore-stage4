let numberOne = Number(prompt('Digite o primeiro número'));
let numberTwo = Number(prompt('Digite o segundo número'));

let sum = numberOne + numberTwo;
let resultSum = alert('A soma dos dois números é: ' + sum)
let sub = alert('A subtração dos dois números é: ' +  (numberOne - numberTwo));
let mult = alert('A multiplicação dos dois números é: ' + (numberOne * numberTwo));
let div = alert('A divisão dos dois números é: ' + (numberOne / numberTwo));
let rest = alert('O resto da divsão dos dois números é: ' + (numberOne % numberTwo));

if(sum % 2 == 0) {
  alert('O número é par')
}else {
  alert('O número é impar')
}

if(numberOne != numberTwo) {
  alert('Os números inseridos são diferentes')
}else {
  alert('Os números inseridos são iguais')
}