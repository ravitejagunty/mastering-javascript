/**
 * regex in long - regular expression, are a way to interpret patters in a given string
 * It can be initialized in two ways
 * 1. new RegExp as object
 * 2. enclose the string in /stringValue/
 */

let twentyOnePlus = /twentyOne\+/;
/**
 * The / forward slashed usually ends the pattern so we have input \ if we want the character to be part of the string
 */

/**
 * Matching test
 * Regex have many methods
 * general method is to test and see if the given string contains the expression and return a boolean
 */

console.log(/mastering/.test('mastering javascript'));
//output: true

console.log(/python/.test('mastering javascript'));
//output: false

/**
 * the above can just be achieve by using indexOf but regex allows to do it for more complex patters
 * we just need to enclose the expression to be test against inside []
 */

console.log(/[0123456789]/.test('in 1992'));
//output: true

console.log(/[0-9]/.test('in 1992'));
//output: true, 0-9 inside the brackets defines the range, similar a-z, A-Z etc.,

/**
 * \d - for any digit
 * \w - any alphanumeric character
 * \s - any whitespace char (space, tab, newline or similar)
 * \D - any char other than digit
 * \W - any char other than non-alphanumeric
 * \S - any nonwhitespace char
 * . - Any char except for newline
 */

/**
 * if you want to invert the selection for example not to find the pattern exisitng in string and return boolean
 */
console.log(/[^ye]/.test('new year'));
//true , because there are other characters in 'new year'
console.log(/[^ye]/.test('yeeyeye'));
//false, because there are no other characters in 'yeeyeye' except ye

/**
 * repeating pattern
 */
console.log(/'\d+'/.test("'123'"));
//true
console.log(/'\d+'/.test("''"));
//false
console.log(/'\d*'/.test("'123'"));
//true, a * indicates whether the expression can occur one time, many times or zero times so
console.log(/'\d+'/.test("''"));
//will also return true

/**
 * a ? indicates that the pattern is optional to be matched
 */
console.log(/hellowor?ld/.test('helloworld'));
//true
console.log(/hellowor?ld/.test('hellowold'));
//true, as we removed r but the condition doesn't complain

/**
 * we can enclose {} to define how many times a char/digit should occur
 * a single digit defines it has to occur the value of single digit all the time
 * a range defines the lower limit and the higher limit
 * we can omit the hihger limit but just declaring {4,} which means atleast 4 chars are expected and can be any higher limit after that
 */
console.log(/\d{1,2}-\d{1,2}-\d{4}/.test('02-04-2025'));
//true
console.log(/\d{1,2}-\d{1,2}-\d{4}/.test('2-4-2025'));
//true
console.log(/\d{1,2}-\d{1,2}-\d{4}/.test('2-4-202'));
//false, since we have remove 5 from year and the expression is expecting it to have {4} digits


/**
 * exec method will return the value if the pattern matches
 */
console.log(/\d+/.exec('there is 100 dollars'));
//[100], as there is number 100 in the string
/**
 * insdie the ouput of above there is property of groups, index
 */

/**
 * vice versa strings do have match method that behaves the same way
 */
console.log('there is 100 dollars'.match(/\d+/));
//[100] returns all the properties as exec

/**
 * replace method
 */

console.log('hello world'.replace('world','there!'));
//output: hello there!, replace method takes two arguments and loops to find the word or char in string and replace it

/**
 * There are plenty methods out there for regex,can be explored at https://debuggex.com
 */