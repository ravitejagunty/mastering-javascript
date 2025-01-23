/**
 * JSON is type of data structure that is very similar to object notation however in JSON all the left side values of the properties are to be in double quotes.
 */
/**
 * structure
 * {
 * "name": "mastering javascript",
 * "age": 23,
 * "sex": "F",
 * "birthMonth": 05
 * }
 */

let jsonObject = {
    name: "mastering javascript",
    age: 23,
    sex: "F",
    birthMonth: 05
}

/**
 * JSON is used to serialize the data as one cannot just forward the binary addresses or array or object when needed to transfer data from one computer to another
 * JSON provides two methods to over come converting object into JSON string and read it back as object again
*/
//JSON.stringify(object) - to convert object to json string
JSON.stringify(jsonObject)
//output: {"name": "mastering javascript", "age": 23, "sex": "F", "birthMonth": 05} as a string

//JSON.parse(convertedJsonDataString) - to convert JSON data to object
JSON.parse({"name": "mastering javascript", "age": 23, "sex": "F", "birthMonth": 05})
/* ouput: {
    name: "mastering javascript",
    age: 23,
    sex: "F",
    birthMonth: 05
}
    */