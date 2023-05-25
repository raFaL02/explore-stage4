/*

Faça um programa que tenha um menu e apresente a seguinte mensagem: 

Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

___

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar mensagem: 
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let object;
let items = [];

while(object != 3) {

  object = Number(prompt(`
  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch(object) {
    case 1:
      let item = prompt('Cadastrar um item')
      items.push(item)
      break;
    case 2:
      if(items == 0) {
        alert('Não existem itens cadastrados')
      } else {
        alert(items)
      }
      break;
    case 3:
      alert('See you!')
      break;
    default:
      alert("Opção inválida. Tente novamente.")
  }
}