function createPakistaniPhoneNumberIntl(numbers) {
    let networkCode = numbers.slice(0, 3).join('');
    
    let subscriberNumber = numbers.slice(3, 10).join('');
    
    return `+92 ${networkCode} ${subscriberNumber}`;
}

let numbers = [3, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPakistaniPhoneNumberIntl(numbers)); 