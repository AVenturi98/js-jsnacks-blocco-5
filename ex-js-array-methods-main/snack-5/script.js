const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const newNum = [];

for (i = 0; i < nums.length; i++) {

    const even = nums[i];

    const isEven = even % 2;

    if (isEven === 0) {
        newNum.push(even)
    }
    
}

console.log(newNum)