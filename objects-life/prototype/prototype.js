/**
 * Hidden secret and a property of almost all object is prototype, even an emtpy object {} have a prototype
 * represented by Object.prototype
 */


console.log(Object.getPrototypeOf({}) == Object.prototype) //output : true
/**
 * As we observed the getPrototypeOf method from Object gets the prototype of an object
 * Same is applicable for Arrays and functions when using getPrototypeOf
 * so an empty object or array or function have prototype, the weird part is prototype have its own property prototype inside it
 * and the chain of prototype ends when we hit Object.prototype - null
 */

const obj = {}
console.log(Object.getPrototypeOf(obj)) // output: Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)) //null

//since we have hit the end of the road on lify cycle of object the outcome of Object.getPrototypeOf(Object.prototype) outputs nll and terminates the chain.

const originalObject = { name: "Alice" };
const newObject = Object.create(originalObject);

console.log(originalObject === newObject); // false (they are different objects)

console.log(newObject.name); // "Alice" (inherited from originalObject)

newObject.name = "Bob"; // Modifies only the newObject's own property
console.log(newObject.name); // "Bob" (own property)
console.log(originalObject.name); // "Alice" (original remains unchanged)

console.log(Object.getPrototypeOf(newObject) === originalObject); // true

/**
 * All the above is posiible because of prototype which allows to share properties and methods
 * across instances.
 */