// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
// in this example, we are using a switch statement to print the name of the day based on the value of the variable 'day'.
// tricky interesting example of switch statement, where we are not using break statement, so all the cases will be executed after the matching case is found. This is known as "fall-through" behavior.
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}