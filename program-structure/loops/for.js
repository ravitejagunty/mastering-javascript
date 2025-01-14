/* For loop basically follows the inner logic for of the while to create a binding with name and then check the condition is being satisfied or not on
every iteration to exit the loop */

//example
for(let i=0; i<=25; i++){
    console.log(i);
}

/*
output: 0
1
2
3
4
5
.
.
.
.
25

execution: Each iteration is printing the value of i beginning from 0 as the initial value of i is declared as 0
and after each iteration i is incremented by 1 with statement 'i++' or can also be written as 'i = i + 1' or 'i += 1'
all of these serve the same purpose of incrementing i.

The loop is execute until the condition inside the loop is true which is until i less than or equal to 25 'i<=25'
*/


//Breaking out of a loop

/* There is another way of breaking out from a loop, if we were to find the intended number we are looking for in the incremental process
we can break out of the loop using 'break;' statement with in the loop */

//example
for(i=0; i<=25; i++){
    if(i ** i == 4){
        console.log(i);
        break;
    }
}

/*
output: 2
In the above loop we are looking to check what number to the power of its own is equal to 4
Iteration 1: 0^0 is 0 and not equal to 4 so console won't print anything
Iteration 2: 1^1 is 1 and not equal to 4 so console won't print anything
Iteration 3: 2^2 is 4 which is equal to 4 so console will print 2 which is the value of i in the third iteration.
*/