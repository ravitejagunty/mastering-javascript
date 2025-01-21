/**
 * A recursive function is a function that return itself until a condition is met
 *  */ 

function factorial(n){
    if(n == 0){
        return 1
    } else {
        return n * factorial(n-1)
    }
}

/**
 * factorial(5) returns the output of 120
 * In recursive functions like factorial, the previous values are stored in the function call stack. The call stack is a data structure used by JavaScript (and other programming languages) to keep track of function calls.
 * A function is repeating itself within and creating a stack of previous exection
 * Once the base case is reached which is n == 0 in this case, the call stack will start unwinding
 * with the values return from each execution
 * stacks pushed
 * factorial(3), factorial(2), factorial(1) and base case factorial(0)
 * Execution starts from factorial(0) * factorial(1) returns 1, 
 * factorial(2) = 2 * 1 returns 2
 * factorial(3) = 3 * 2 returns 6 and exists the execution.
 */