let student = prompt('Insira o nome do aluno:')
let n1 = prompt('Insira a primeira nota:')
let n2 = prompt('Insira a segunda nota:')
let n3 = prompt('Insira a terceira nota:')

const sum = (Number(n1) + Number(n2) + Number(n3)) / 3

const average = sum.toFixed(2)

  if(sum >= 6) {
    alert('Parabéns, ' + student + '! Sua média foi: ' + average)
  }else {
    alert(student + ' estude mais para a prova de recuperação! Sua média foi: ' + average)
  }
  