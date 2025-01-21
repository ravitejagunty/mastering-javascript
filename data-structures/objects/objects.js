/**
 * Objects are data types in javascript which starts with { and ends with }
 * if a { comes right after a statement then it is basically beginning the statement block but
 * if a { comes after assignment in this case = then it is an object
 */

let sandwich = {
    cookType: 'grilled',
    temperature: 'medium rare',
    ingredients: ['tomatoes','lettuce','onions','ketchup','mayo']
}

/**
 * Above object defines a sandwich and what is it cookType, temperature and ingredients to be, each binding inside the object can be accessible by
 * either . notation or by the value of binding inside the object using ['value']
 */

//Eaxmple outputs
/**
 * In order to get the cookType we can use the following
 */
sandwich.cookType; //output: 'grilled'

/**
 * In order to get the temperature we can use the following
 */
sandwich.temperature; //output: 'medium rare'
sandwich['temperature']; //ouput: 'medium rare'

/**
 * In order to get the ingredients we can use the following
 */
sandwich.ingredients /* or */ sandwich['ingredients']
//ouput: ['tomatoes','lettuce','onions','ketchup','mayo']

/**
 * Conclusion: sandwich is an object consisting of list of properties like
 * cookType, temperature and ingredients
 * The propreties of the object can be access by either object.property or object['property']
 * A property inside an object have key: value, the left side of the property inside an object is called key and keys should always be unique with in the object
 * the right of the property is called value and values can be same or different for each key, its based on the design and architecture.
 */