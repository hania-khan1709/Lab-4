function absMe(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return Math.abs(numbers[0]);
    
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.abs(numbers[i]));
    }
    return result;
}

function ceilMe(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return Math.ceil(numbers[0]);
    
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.ceil(numbers[i]));
    }
    return result;
}

function floorMe(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return Math.floor(numbers[0]);
    
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.floor(numbers[i]));
    }
    return result;
}

console.log("- absMe -");
console.log(absMe());             
console.log(absMe(-4.7));         
console.log(absMe(-4.7, -3.2, 5));

console.log("\n- ceilMe -");
console.log(ceilMe());            
console.log(ceilMe(4.1));         
console.log(ceilMe(4.1, 2.3));    

console.log("\n- floorMe -");
console.log(floorMe());           
console.log(floorMe(4.9));        
console.log(floorMe(4.9, 2.8));   