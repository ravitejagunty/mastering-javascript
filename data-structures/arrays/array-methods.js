/**
 * There are numerous array methods and this file will probably be increasing its size from initial commit
 */


//Example
let array  = [2,14,57,43,2345,12];

/**
 * Array length
 */
array.length
/**
 * ouput: 6
 */

/**
 * Pushing an element into an array could be string, number or function value
 */
array.push(178)
/**
 * output:  [2,14,57,43,2345,12,178]
 * push method always add the element at the end of the array
 * If the length of the array before push is n, the length of the array post push is n+1
 */


/**
 * Removing the last element in the array
 */
array.pop()
/**
 * output: [2,14,57,43,2345,12]
 * 178 is removed the array because .pop() always removes the last element of the array
 * if the array is empty the removed element is type undefined.
 */

/**
 * Removing the first element in the array
 */
array.shift()
/**
 * output: [14,57,43,2345,12]
 * 2 is removed from the index 0 and as first element
 */

/**
 * Removing the element at certain location in the array
 * array.splice(start, deleteCount, item1, item2, ..., itemN);
 */
array.splice(1,2)
/**
 * output: [14,2345,12], splice allow to remove, add or replace the elements in array
 * In the above example we have removed the elements at index 1 and 2 which is 57 and 43
 * Other way one can use splice is to add elements
 * add: array.splice(2, 0, 'a', 'b');  No elements removed, adds 'a' and 'b' at index 2
 * output: [14,2345,'a','b',12]
 * replace: array.splice(1, 2, 'x', 'y');
 * output: [14,'x','y','b',12]
 */

