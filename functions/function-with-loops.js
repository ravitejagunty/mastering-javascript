/* A function can have any kind of statements with in to be executed */

//example
let log = function(x){
    for(let i=1;i<=x;i++){
    let result = Math.log(i)
    console.log(result)
    }
}

log(10);

/*
output:
0
0.6931471805599453
1.0986122886681096
1.3862943611198906
1.6094379124341003
1.791759469228055
1.9459101490553132
2.0794415416798357
2.1972245773362196
2.302585092994046

In the above function we are taking x as input parameter just like in f(x) we have observed in function.js and calculating the log of x using in built javascript Math class
and printing the result to console.
Unlike the function.js where we only calculating the log value for one x input, in here we are taking x as input and looping the value to find out log value of each number
until the condition inside the loop is met which is i<=x.

In this loop we have started i from 1 as log(0) is -Infinity

The binding 'result' is only available with in the loop and cannot be accessible outside the loop if we write the console statement after the exit } of for loop javascript
will throw error saying result is not defined.
*/