// Variables Challenges

// Gold Level

// Write 3 lines of JavaScript, each with their own variable.
// The first variable should be your current age
// The second variable should be the number of years of experience you have
// The third variable should be your desired annual salary
// Print the value of all three variables to the console.

let currentAge = 36;
let experienceYears = 21;
let desiredSalary = 50000;

console.log(currentAge, experienceYears, desiredSalary);
console.log(`Age: ${currentAge} \nExperience: ${experienceYears} \nSalary: ${desiredSalary}`);


// Blue Level

// Perform the Gold challenge, and then write more JavaScript to manipulate these variables.
// Add 2 years to your age
// Multiply the number of years of experience by 3
// Create a new variable to represent how many times higher your salary is than the government-recognized poverty line (for a 4-person household in 2017 = $24,600)... (Divide your desired salary by 24600)
// Log these new values to the console.


let modifiedAge = (currentAge + 2);
let modifiedExperience = (experienceYears * 3);
let salaryVsPoverty = (desiredSalary / 24600);

console.log(modifiedAge);
console.log(modifiedExperience);
console.log(salaryVsPoverty);


// Red Level

// Perform the Blue challenge, and then write more code that will print the value of these variables in a sentence. For example:
// I am now 35 years old.
// I how have 6 years of experience.
// I will be 2.4 times richer than the poverty level.


console.log(`I am now ${modifiedAge} years old.`);
console.log(`I now have ${modifiedExperience} years of experience`);
console.log(`I will be ${salaryVsPoverty} times richer than the poverty level.`);



