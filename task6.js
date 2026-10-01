function sumOfMultiples(x, y, z) {
    let sum = 0;

    for (let i = 1; i < z; i++) {
        // Check if i is a multiple of x OR y
        if (i % x === 0 || i % y === 0) {
            sum += i;
        }
    }
    return sum;
}

let x = 3;
let y = 5;
let z = 10;

let result = sumOfMultiples(x, y, z);
console.log(`Sum of multiples of ${x} or ${y} below ${z} is: ${result}`);
