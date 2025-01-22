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
 * output: 2
 * 2 is removed from the index 0 and as first element and the array is now [14, 57, 43, 2345, 12]
 */


/**
 * Adding the first element in the array
 */
array.unshift(4)
/**
 * output: 6, which is the length of the array
 * 3 is now added at the index 0 and as first element and the array is now [3, 14, 57, 43, 2345, 12]
 */

/**
 * Removing the element at certain location in the array
 * array.splice(start, deleteCount, item1, item2, ..., itemN);
 * with splice method original array is altered
 */
array.splice(1,2)
/**
 * output of splice: [14,57]
 * output of array: [3,43,2345,12], splice allow to remove, add or replace the elements in array
 * In the above example we have removed the elements at index 1 and 2 which is 57 and 43
 * Other way one can use splice is to add elements
 * add: array.splice(2, 0, 'a', 'b');  No elements removed, adds 'a' and 'b' at index 2
 * output: [14,2345,'a','b',12]
 * replace: array.splice(1, 2, 'x', 'y');
 * output: [14,'x','y','b',12]
 */


/**
 * finding the index of the element in an array from beginning
 */
array.indexOf('y')
/**
 * output: 2, as the first occurrence of 'y' comes at index 2 in the array
 */

/**
 * finding the index of the element from reverse
 */
array.lastIndexOf('y')
/**
 * output: 2, as the first occurrence of 'y' from the reverse side of the array is also 2 in this case
 * However if the array has multiple occurrences of 'y' example: [14,'x','y','b','y',12]
 */
array.lastIndexOf('y')
/**
 * output: 4, as the first occurrence of 'y' is at index 4 now coming from the reverse of the array.
 */


/**
 * slicing the array to desired values using .slice method
 * slice(startIndex, endIndex)
 * slice method takes two parameters startIndex which is inclusive and endIndex which is exclusive
 * endIndex is optional and if only start index is provided the method will return all elements starting from the index value provided 
 * [14,'x','y','b','y',12]
 * with slice method original array is not altered
 */
array.slice(2,4)
/**
 * output of slice method: [14,'x','y',12],  in this scenario element at index 2 is retained but elements at index 3 and 4 are removed from the array.
 * output of array: [14,'x','y','b','y',12] array still stays the same as with slice method the array is not altered
 */
array.slice(2)
/**
 * output: ['y',12]. in this scenario array removes elements from 0 and 1 index as the start of array is from 2 element.
 */
