function roundMe(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    
    if (numbers.length === 1) {
        return Math.round(numbers[0]);
    }
    
    let roundedArray = [];
    for (let i = 0; i < numbers.length; i++) {
        roundedArray.push(Math.round(numbers[i]));
    }
    return roundedArray;
}

console.log(roundMe());            
console.log(roundMe(4.7));         
console.log(roundMe(4.7, 4.4));   

console.log(roundMe(1.2, 2.8, 9.5)); 