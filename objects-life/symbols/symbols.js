/**
 * One major reason to use Symbols is to prevent property name collisions in large-scale applications or libraries.
 * A Symbol is a primitive data type in JavaScript, introduced in ES6 (ECMAScript 2015). It represents a unique, immutable identifier
 */

const secretKey = Symbol("secret");

class API {
  constructor() {
    this[secretKey] = "API_SECRET_123";
  }

  getSecret() {
    return this[secretKey]; // Accessible internally
  }
}

const apiInstance = new API();
console.log(apiInstance.getSecret()); // "API_SECRET_123"

// Attempt to access secret key directly
console.log(apiInstance.secretKey); // undefined (does not exist as a string key)
console.log(Object.keys(apiInstance)); // [] (Symbols are hidden from Object.keys)


/**
 * The iterator interface in symbols
 * Symbol.iterator is used to generate new object when called until the value is undeined and done is true
 */

const stringIterator = 'Hello'[Symbol.iterator]();

console.log(stringIterator.next()); // { value: 'H', done: false }
console.log(stringIterator.next()); // { value: 'e', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'l', done: false }
console.log(stringIterator.next()); // { value: 'o', done: false }
console.log(stringIterator.next()); // { value: undefined, done: true }