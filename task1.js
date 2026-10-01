var fullName = "Hania Khan";        
var age = 21;                       
var isStudent = true;               
var currentCity = "Islamabad";          

var biography = {
    name: fullName,
    age: age,
    isStudent: isStudent,
    address: {
        city: currentCity,
        country: "Pakistan"
    },
    degreePrograms: {
        intermediate : "Pre-Medical",
        current: "BS Computer Science"
    }
};

console.log("-MY BIOGRAPHY-");
console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Status: " + (biography.isStudent ? "Current Student" : "Under-Grad"));
console.log("Location: " + biography.address.city + ", " + biography.address.country);
console.log("Academic Background:");
console.log(" - Completed Degree: " + biography.degreePrograms.intermediate);
console.log(" - Current Program: " + biography.degreePrograms.current);