// Switch statement usecase
// Switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements.
// In this example, we are using a switch statement to print the name of the day based on the value of the variable 'day'.
// The value of 'day' can be 1 to 7, where 1 represents Monday, 2 represents Tuesday, and so on. If the value of 'day' is not between 1 and 7, the default case will be executed.
// The break statement is used to exit the switch statement once a case has been executed. If the break statement is omitted, the next case will be executed regardless of whether its condition is true or not. This is known as "fall-through" behavior.

let day = 2;
// 1 - mon, 2 = tue
switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}