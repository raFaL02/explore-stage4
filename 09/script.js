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

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for(let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}