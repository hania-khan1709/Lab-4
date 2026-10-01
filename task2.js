let givenPrime = 11;

let nextCandidate = givenPrime + 1;

while (true) {
    let isPrime = true;

    for (let i = 2; i < nextCandidate; i++) {
        if (nextCandidate % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        console.log("Given prime number: " + givenPrime);
        console.log("The next prime number is: " + nextCandidate);
        break; 
    }

    nextCandidate++;
}