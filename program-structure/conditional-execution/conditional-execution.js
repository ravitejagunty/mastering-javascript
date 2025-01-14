/* conditional execution divides the program and branches out whether or not to execute the program further */

let theNumber = Number(prompt("Pick a number"));
if(!Number.isNaN(theNumber)){
    console.log("square of the number is " + theNumber * theNumber);
}

/*
conditional execution
input: Pick a number pop up - input 10
conditional check whether it is a number or not to display and if it is a number
output: square of the number is 100
if the output fails to be a number, the condition on the line 5 is never executed.
*/

let theNumber = Number(prompt("Pick a number"));
if(!Number.isNaN(theNumber)){
    console.log("square of the number is " + theNumber * theNumber);
} else {
    console.log("The input is not a number");
}

/*
conditional execution
input: Pick a number pop up - input 'master'
conditional check whether it is a number or not to display and if it is a number
since the input isn't a number, the execution moves to next statement which is else and enters the else block of the program
and prints output: The input is not a number
*/

let theNumber = Number(prompt("Pick a number"));
if(theNumber < 100){
    console.log("The input is less than 10^2");
} else if(theNumber >= 100 && theNumber <= 1000){
    console.log("The input is in between 10^2 and 10^3");
} else {
    console.log("The input is greater than 10^3");
}