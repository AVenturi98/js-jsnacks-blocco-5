const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numberPlus = []; 

// for (i = 0; i < numbers.length; i++) {

//     const elements = numbers[i] + 1;

//     console.log(elements)
// }

numbers.forEach((num) => numberPlus.push( num + 1 ))

console.log(numberPlus)