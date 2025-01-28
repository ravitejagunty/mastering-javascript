/**
 * One of the core concepts of object oriented programming is encapsulation
 * the intent of programming is to write smaller chuncks and have no impact on other programers programming
 * Encapsulation is a method to hide details or separate implementation vs interface
 * In the below program, the implementation details of getCount, increment and reset are hidden and are only accessible via createCounter()
 */

function createCounter() {
    // A private variable that's not directly accessible from outside
    let count = 0;
  
    return {
      // A public method to get the current count
      getCount: function() {
        return count;
      },
      // A public method to increment the count
      increment: function() {
        count++;
      },
      // A public method to reset the count
      reset: function() {
        count = 0;
      }
    };
  }
  
  // Using the counter
  const counter = createCounter();
  console.log(counter.getCount()); // 0
  counter.increment();
  console.log(counter.getCount()); // 1
  counter.reset();
  console.log(counter.getCount()); // 0