/**
 * Destructuring is better way to assign values of object preperty to required binding
 * consider an object of user name, age, sex and birth month
 */
let person = {
    name: 'maserting javascript',
    age: 23,
    sex: 'F',
    birthMonth: 05
}

let {name} = person
let {age} = person
let {sex} = person
let {birthMonth} = person

//accessing name will output: 'mastering javascript'
//accessing age will output: 23
//accessing sex will output: 'F'
//accessing birthMonth will output: 5

let {name,age,sex,birthMonth} = person //would also yield the same results and the order inside {} doesn't matter when it comes to object destructuring.

/**
 * Note: There is no destruturing null or undefined
 */