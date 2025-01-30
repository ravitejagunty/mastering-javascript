/**
 * Methods are nothing but properties of an object that holds function values
 */

let dog = {}

dog.speak = function(say){
    console.log(`The dog says ${say}`)
}

dog.speak('woof!') //output: The dog says woof!

/**
 * Any property of the object can be referenced by this.propertyName when called by object initialization
 */

//example
function speak(say){
    console.log(`The dog says ${say} and ${this.sayMore}`)
}
let dog = { sayMore: 'go away!', speak}

dog.speak('woof') // The dog says woof and go away

/**
 * as you can see in the above example this.sayMore directly referenced to the value of the property sayMore in dog object
 */

/**
 * Another way to explicitly represent this is to pass the object and input argument into function call method
 */
speak.call(dog, 'woof') // The dog says woof and go away