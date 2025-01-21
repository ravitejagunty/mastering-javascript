/* I'm sure if you are here you might have heard of f(x) at some point of the time in your life where f represent a function and x represents the paramenter inside
the function and a small mathematical example of f(x):

f(x) = x^2 + 2x + 12
f(3) = 3^2 + 2 * 3 + 12, output: 27

Javascript functions are no different and they work the same way */

//example
let log = function(x){
    let result = Math.log(x)
    console.log(result)
}

log(10);

/*
output: 2.302585092994046
In the above function we are taking x as input parameter just like in f(x) and calculating the log of x using in built javascript Math class
and printing the result to console.
log is binding name which holds the function of x where function being the keyword and x being the parameter
*/