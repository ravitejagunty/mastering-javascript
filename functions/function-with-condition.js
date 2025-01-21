/* A function can have any kind of statements with in to be executed */

//example
let log = function(x){
 if(Math.log(x) > 2){
    console.log(`Logrithm value is greater than 2 for log(${x})`);
 } else {
    console.log(`Logrithm value is less than 2 log(${x})`);
 }
}

log(10);
log(5);

/*
output for log(10): "Logrithm value is greater than 2 for log(10)"
output for log(5): "Logrithm value is less than 2 log(5)"
Inside a function we are checking a condition to see what statement need to be printed to console,
in case of log(10) the value is 2.302585092994046 which is greater than 2 so the statement inside 'if' is executed
in case of log(5) the value is 1.6094379124341003 which is lesser than 2 so the statement inside 'else' is executed
*/