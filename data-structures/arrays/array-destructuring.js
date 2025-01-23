/**
 * Destructuring is better way to assign values of array to required binding
 * consider an array of user name, age, sex and birth month
 */
let person = ['masteringjs',21,'M',05];
const [name,age,sex,birthMonth] = person
/**
 * Accessing the values inside the array are now simpler and can be labelled
 */
name //output: 'mastering'
age //output: 21
sex //output: 'M'
birthMonth //output: 5

/**
 * This is very useful incase of array is big and requires calculation to be made with each person in array
 */

//example
let persons = [['masterOne',21,'M',05],['masterTwo',22,'F',11],['masterThree',23,'M',08],['masterFour',24,'M',03],['masterFive',25,'F',01]];
let results = []
for (let person=0; person <= persons.length; person++){
    const [name,age,sex,birthMonth] = person[i]
    reuslts.push({
        name: name,
        age: age,
        sex: sex
        birthMonth: birthMonth
    });
}

/** ouput of result array: [
  { name: 'masterOne', age: 21, sex: 'M', birthMonth: 5 },
  { name: 'masterTwo', age: 22, sex: 'F', birthMonth: 11 },
  { name: 'masterThree', age: 23, sex: 'M', birthMonth: 8 },
  { name: 'masterFour', age: 24, sex: 'M', birthMonth: 3 },
  { name: 'masterFive', age: 25, sex: 'F', birthMonth: 1 }
]
*/

/**
 * Note: There is no destruturing null or undefined
 */