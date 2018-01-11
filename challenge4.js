// Conditionals (switch) Challenges

// Gold Level

// Write a basic switch statement to determine how much you earn per hour. There are 4 positions in the company, 
// each with their own pay rate:
// Cashier gets paid $8/hr
// Cook gets paid $10/hr
// Manager gets paid $14/hr
// Owner gets paid $50/hr.
// Create two variables: position and payRate. Based on the value of position, set the correct value of payRate, 
// and then console.log() a sentence like:
// I work as a Cook, so I earn $10 per hour.


// let position = 'cook';

// let payRate ;

// switch (position.toLowerCase()) {
//     case 'cashier':
//         payRate = 8
//         break;
//     case 'cook':
//         payRate = 10
//         break;
//     case 'manager':
//         payRate = 14
//         break;
//     case 'owner':
//         payRate = 50
//         break;
//     default:
//         break;
// }

// console.log(`I work as a ${position}, so I earn $${payRate} per hour`);



// Blue Level

// Perform the Gold challenge, and now re-write your code to handle invalid positions. An unrecognized position gets $0/hr.

// let position = 'soldier';

// let payRate ;

// switch (position.toLowerCase()) {
//     case 'cashier':
//         payRate = 8
//         break;
//     case 'cook':
//         payRate = 10
//         break;
//     case 'manager':
//         payRate = 14
//         break;
//     case 'owner':
//         payRate = 50
//         break;
//     default:
//         payRate = 0
//         break;
// }

// console.log(`I work as a ${position}, so I earn $${payRate} per hour`);

// Red Level

// Perform the Blue challenge, and now re-write your code to include amountOfWork and hoursWorked variables. 
// amountOfWork determines how many hours per week the employee works. You should use a 2nd switch statement in your 
// code. Finally, write a message to the console that looks like:
// I work as a Cook, so I earn $10 per hour. I work 20 hours per week, so I make $200 weekly.
// The choices for amountOfWork are:
// 'none' works 0 hours per week
// 'little' works 10 hours per week
// 'part-time' works 20 hours per week
// 'medium' works 30 hours per week
// 'full-time' works 40 hours per week
// 'insane' works 50 hours per week


let position = 'cook';

let payRate;

let amountOfWork = 'full-time';

let hoursWorked;



switch (position.toLowerCase()) {
    case 'cashier':
        payRate = 8
        break;
    case 'cook':
        payRate = 10
        break;
    case 'manager':
        payRate = 14
        break;
    case 'owner':
        payRate = 50
        break;
    default:
        payRate = 0
        break;
}

switch (amountOfWork.toLowerCase()) {
    case 'none':
        hoursWorked = 0
        break;
    case 'little':
        hoursWorked = 10
        break;
    case 'part-time':
        hoursWorked = 20
        break;
    case 'medium':
        hoursWorked = 30
        break;
    case 'full-time':
        hoursWorked = 40
        break;
    case 'insane':
        hoursWorked = 50
        break;
    default:
        break;
    }
    
let weeklySalary = hoursWorked * payRate;

console.log(`I work as a ${position}, so I earn $${payRate} per hour. \nI work ${hoursWorked} hours per week, so I make $${weeklySalary} weekly.`);