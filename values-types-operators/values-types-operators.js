/*
Values are in memory declarations, computer needs space to set a value, they are temporary and the memory is cleared as soon as the value is read.
A negative number requires a bit to store the symbol/sign of the nmber.
A decimal number uses  a bit to store the location of the point in the given number
*/

/* Numbers */

13 /* positive number */
    - 13 /* negative number */
1.2305 /* decimal number */
2.567e9 /* e indicates the exponent and time 10 to the power of number followed by it, the number 2.567e9 converts to 2.567 * 10^9 = 2,567,000,000,000 */

/* Arithmatic */

/* Following the PEDMAS rule, Paranthesis, Exponential, Division, Multiplication, Additiona and SUbtraction */

110 + 5 * 92 /* output = 570,
the statement first executes multiplication 5 *92 and then adds 110 to it */

/* symbols for arithmatic operations

+ : Addition
- : Substraction
* : Multiplication
/ : Division
() : Parenthesis
% : Reminder in division
NaN : Not a number, example: 10 / 0  its infinity but javascript cannot process infinity so it is defined as NaN
*/

/* Strings 
Best way to represent a string inn javascript is by using single quotes '', double quotes"", back ticks ``
example: "Mastering javascript" is a  string which can also be written as
'Mastering javascript' or `Mastering javascript`

\n : Introducing \n anywhere in the string which allow string to be printed in the next line, example: "Mastering\nJavascript" will print the output as
Mastering
Javascript

+ in strings: + in string have similar to + in numbers, using + would concat two string together
example: 'Mastering' + 'javascript'
ouput: Mastering javascript
very useful when you want to combine firstname and lastname of a person etc.,

template literals or back ticks ``
`` are similar to '' or "" however `` can also inject dynamic values or direct oprations into string unlike '' or ""
example: `divide 5 by 2: ${5 / 2}`
ouput: divide 5 by 2: 2.5
anything that is enclosed in ${} can be a binding value or an execution that returns a value which is computed.
*/

/* Unary Operators
example: typeof 'y'
output: string

not all the operator in javascript are symbols and some are words
*/


/* Boolean values
there are only two boolean values available in javascript
true and false
example: 5 > 4
output: true
example: 5 > 9
output: false

these values can be used to compare a number vs another or a string vs another string etc.,
*/

/* Locgical Operators
&&,|| and ? are two logical operators used in javascript, both of them compare the boolean values to provide the output
example: true && true, output: true
example: true && false, output: false
example: true || true, output: true
example: true || false, output: true
Used in situation where you have perform operation based on multiple condition instead of just one

? represent the ternary operation in javascript
example: true ? 1 : 2
output: 1

example: false ? 1 : 2
output: 2

Ternary operator executes the condition and outputs based on the executed condition, if the condition is true the first of the declaration is provided as output,
if the condition is false the second part or the declaration after : is provided as output.
*/

/* Empty values
There are two of these values 'null' and 'undefined', they themselves are values and take the space however if a program cannot provide a meaning full value thats when
we use null or undefined, most of the time it doesn't matter if you use null or undefined as they are interchangeable
*/

/* Automatic type conversion

This is some of the weird javascript executions I can never understand, however javascript have a auto convert some types based on the next value in the operation
example: 11 * null, output: 0
example: "15" - 1, output: 14 - In here javascript auto converted the "5" into 5 as number
example: "15" + 1, output: 151 - In here javascript left 5 as string without converting into a number and concatnated 1 to 5
example: "five" * 2, output: Nan - Javascript couldn't understand what to perform here and hence it has provided the output as NaN which is occur when output is not a number

*/