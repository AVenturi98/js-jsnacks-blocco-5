const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    classe: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    classe: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classe: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// console.log(students[0].class)

students.forEach(({ classe, name  }) => {
  if (name === 'Marco Lanci') return console.log(classe)
})


