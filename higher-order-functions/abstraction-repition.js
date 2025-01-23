/**
 * Consider a situation where you have to make a sandwich
 * There are two ways we can go by it
 * First one: Take a pan, put a spoon of butter in it and take two slices of bread
 * and toast them on the pan for about three min and the first put the lettuce and then tomatoes
 * and protien if required, onions and sauce
 * Second one: Make a sandwich with two slices of bread, lettuce, onions, protien and sacuce, toast the bread for 3mins in the pan
 */

/**
 * Abstraction allow to hide the details of the execution, but allow to perform same operation.
 */

//example
for(let i=0; i<10; i++){
    console.log(i)
}
//output: 1,2,3,4,5,6,7,8,9 : console.log is another function inside the loop that is being executed

//Now lets write a function instead of manually setting where the loop to stop

function recursiveLog(n){
    for(let i=0; i<n; i++){
        console.log(i)
    }
}
/**
 * calling recursiveLog(10)
 * outputs: 1,2,3,4,5,6,7,8,9
 * Now we have ability to call with any value inside the argument of the function
 */

//What if we want the console.log to be something else ? instead of console.log we want sqaures of numbers or cube value of numbers ?

/**
 * lets first write a simple function to accept the action as console.log inside the existing one
 */

function recursiveLog(n, action){
    for(let i=0; i<n; i++){
        action(i)
    }
}
/**
 * calling recursiveLog(10, console.log)
 * outputs: 1,2,3,4,5,6,7,8,9
 * Now we have ability to call with any value inside the argument of the function and also send any action that is required
 */


/**
 * lets modify the existing function to pass sqaure as action
 */
recursiveLog(10,square) //but do we have a square function defined ? No

//lets write one
function square(number){
    console.log(number * number);
}

//Now when we run
recursiveLog(10,sqaure)
//output: 0 1 4 9 16 25 36 49 64 81
//Hiding the implementation of the square function in the dark but giving the desire output of sqaures of each number.