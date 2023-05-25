/*
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter
  nome
  idade
  peso
  altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

let patients = [
  {
    name: "Fernanda",
    age: 23,
    weight: 60,
    height: 160
  },
  {
    name: "Rafael",
    age: 28,
    weight: 75,
    height: 168
  },
  {
    name: "Mônica",
    age: 20,
    weight: 59,
    height: 164
  },
]

let patientsName = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for(let patient of patients) {
  patientsName.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(`Os pacientes ${patientsName} tem a idade de ${patientsAge} anos, pesam ${patientsWeight} e medem ${patientsHeight}`)