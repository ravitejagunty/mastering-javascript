/**
 * any mistake or issue araised in computer progrmamming are called bugs
 */

/**
 * a stricter js code can be written using "use strict" with in the function or at the top of file
 */

function printCount(){
    'use strict'
    for(count=0; count < 10; count++){
        console.log(`the number is ${count}`);
    }
}

printCount();
// ReferenceError: count is not defined, because we forgot to use 'let' or 'var' before the count in for loop

/**
 * types are used to define the type of binding
 */

function person(name){
    console.log(`Hi, my name is ${name}`)
}

/**
 * ideally we haven't given a type to the input argument in the function person for name
 * we can defined name: string
 */

/**
 * Testing
 * Testing the application helps immediately to identify the problem in your code at scale
 */
function person(name,age){
    console.log(`Hi my name is ${name} of age ${age}`);
}

test('convert name and age to uppercase', () => {
    return 'ravi'.toUpperCase() == 'RAVI';
});

/**
 * Exceptions
 * If a function is not behaving as expected, we should be able to stop the execution and navigate
 * to the place where the problem occurred to handle that, this is what we call exception handling.
 */

function direction(direct){
    if(direct.toLowerCase() == 'left') return 'L';
    if(direct.toLowerCase() == 'right') return 'R';
    throw new Error(`Invalid direction: ${direct}`);
}

console.log(direction('left')) // outputs: 'L'
console.log(direction('up')) //outputs: Uncaught Error: Invalid direction: up

/**
 * try catch
 * one way to overcome Exceptions is to use try catch blocks
 * Exception always occurs in try block and never reaches catch block
 * If the execution reaches catch block, the exception has already occurred and printed
 */

    try{
    console.log(direction('left'));
    } catch(error){
    console.log(`something went wrong: ${error}`);
    }



/**
 * Example from eloquent JS
 */

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let wasLocked = box.locked;  // Check if the box was locked before
  
    if (wasLocked) box.unlock(); // Unlock if necessary
  
    try {
      body();  // Execute the provided function
    } finally {
      if (wasLocked) box.lock();  // Lock it back if it was originally locked
    }
  }
  
  // ✅ Example Usage (Success Case)
  withBoxUnlocked(() => {
    box.content.push("gold coin");
  });
  console.log(box);
  
  // ❌ Example with an Error (Still Ends Up Locked)
  try {
    withBoxUnlocked(() => {
      throw new Error("Something went wrong!");
    });
  } catch (e) {
    console.log("Error caught:", e);
  }
  
  console.log(box.locked); // ✅ Should always be true