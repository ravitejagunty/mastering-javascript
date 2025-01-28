/**
 * Classes in js defines the shape of type of object based on the properties and methods it has.
 * confused yet ? lets put it simple: object is an instance of class
 * prototypes comes into picture to make sure the properties that are defined as shared across all instances of the class
 */

const originalObject = { name: 'Alice' };

function person(gender) {
    let human = Object.create(originalObject);
    human.gender = gender;
    return human;
}

console.log(human('male'))
//output: {gender: 'male'}

/**
 * wait a minute: we have created the human object from originalObject, where is the name gone ????
 * we haven't lost the name anywhere its sitting the prototype, in order to access the name property through human object
 * we have to first assign human object to another temporary object
 */

let tempObj = human('male');
console.log(tempObj.gender) //output: 'male'
console.log(tempObj.name) //output: 'Alice

/**
 * Magic
 */



/**
 * Notation of class in javascript
 * Classes can further sinmplified by the concept of constructors, consider constructor as something that is associate with only class name
 */

class personOne {
    constructor(gender){
        this.gender = gender; //this is a property that is initialized at class level and available for all the instance in the class
    }

    humanName(name){ //One can have infinite number of method with in the class, pretty cool huh!
        console.log(`I'm a ${this.gender} and my name is ${name}`);
    }
}

let personDetail = new personOne('male') //Instantiating the class with the constructor property 
console.log(personDetail.humanName('mastering javascript')); // Accessing the method inside the class
//output: I'm a male and my name is mastering javascript