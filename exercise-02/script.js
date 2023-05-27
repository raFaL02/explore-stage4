let students = [
  {
    name: "Ana",
    n1: 7,
    n2: 9,
    n3: 9
  },
  {
    name: "Matheus",
    n1: 4,
    n2: 6,
    n3: 9
  },
  {
    name: "Carlos",
    n1: 3,
    n2: 10,
    n3: 7
  },
  {
    name: "Bianca",
    n1: 6,
    n2: 8,
    n3: 7
  },
]


function mediaStudents (student) {

  if(((student.n1 + student.n2 + student.n3) / 3).toFixed(2) >= 7) {
    return `A média do(a) aluno(a) ${student.name} é: ${((student.n1 + student.n2 + student.n3) / 3).toFixed(2)}
  Parabén, ${student.name}! Você foi aprovado(a) no curso!`
  }else {
    return `A média do(a) aluno(a) ${student.name} é: ${((student.n1 + student.n2 + student.n3) / 3).toFixed(2)}
  Não foi dessa vez, ${student.name}! Tente novamente!`
  }
 
}

for(let student of students) {
  let mediaMessage = mediaStudents(student)
  alert(mediaMessage)
}