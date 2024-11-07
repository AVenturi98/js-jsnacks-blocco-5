const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// console.log(students[1])

// students.forEach( ({ id }) => console.log( id === 2)) // bool

// students.forEach( ({id}) => {
//   const student = id === 2
//   if (student === true) console.log(student)
// })

students.filter(({ id }, i) => {

  let student = students[i]
  if (id === 2 ) return console.log(student)
})


