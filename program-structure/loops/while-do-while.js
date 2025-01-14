/* while loop, a keyword with while creates a loop and condition of the loop execution goes into the parathesis after the while keyword */

let number = 0
while(number < 50){
    console.log(number)
    number += 2
}

/*
Execution
On first iteration console prints 0, and adds 2 to 0 making number = 2 ready for the next iteration
On second iteration console prints 2, and adds 2 to 2 making number = 4 ready for the next iteration
.
.
.
.
On 24th iteration console prints 48, and adds 2 to 48 making number = 50 ready for the next iteration
On 25th iteration the condition number < 50 will become false as number is now = 50 and the loop stop executing further and exits
*/

/* do while loop, do while is almost similar to while loop... only difference is that the statements in do block are executed at least once,
and then while loop starts checking for the condition after each iteration */

let theNumber = 1;

do {
    console.log("The number is: " + theNumber);
    theNumber++;
} while (number <= 5);

/*
output:
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
*/