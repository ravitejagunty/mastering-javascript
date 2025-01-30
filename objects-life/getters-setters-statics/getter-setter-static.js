/**
 * getters
 * Some of the Objects have default property like size in Map, this is predefined and accessible via .size once the Map is initiated
 * Properties that are accessed directly may hide a method call and such methods are called getters
 */

let differentSize = {
    get size () {
        return Math.floor(Math.random() * 20);
    }
};

console.log(differentSize.size);
//output: 67


/**
 * setters
 * same thing that can set value into the hidden method call.
 */

class Calculate {
    constructor(numberOne, numberTwo, calculatedValue){
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.calculatedValue = calculatedValue;
    }

    set addition(value){
        this.calculatedValue =  this.numberOne * value + this.numberTwo * value;
    }

    get additionValue(){
        return this.calculatedValue;
    }
}

let cal = new Calculate(3,4)
cal.addition = 5
cal.additionValue; //output: 35 - 3*5 + 4*5