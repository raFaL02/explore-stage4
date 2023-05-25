let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

xAttempst = 1

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempst++
}

if(xAttempst > 1) {
  alert(`Parabens! O número que eu pensei foi ${randomNumber} e você acertou em ${xAttempst} tentativas`)

}else {
  alert(`Parabens! O número que eu pensei foi ${randomNumber} e você acertou em ${xAttempst} tentativa`) 
}