/**
 * Object like assignment
 */
let title = 'mastering javascript';
title.age = 15;
/**
 * Javascript doesn't allow title to add a property to it as title is not a object and its a string
 * console.log(name.age) outputs -> undefined
 */

/**
 * slice method in string works same as array
 */
title.slice(0,7)
//ouput: 'master', include 0th element and excludes everything starting 7th element


/**
 * indexOf works similar to array in strings
 */
title.indexOf('t')
//output: 3, returns the first occurrence letter 't' at index 3

/**
 * let title = 'mastering javascript'
 * trim method allows to remove spaces, newlines, tabs and similar non required characters
 */
title.trim()
//output: 'masteringjavascript', in this the space betweem mastering and javascript is removed/

/**
 * let title = 'mastering javascript'
 * split method allows to create an array from a string based on the input parameter given in split(input patameter)
 */
title.split() //output = ['mastering javascript']
title.split(' ') // output = ['mastering', 'javascript']
title.split('') // output = ['m','a','s','t','e','r','i','n','g',' ','j','a','v','a','s','c','r','i','p','t']
title.split('s') //output =  ['ma', 'tering java', 'cript']

/**
 * let title = 'master'
 * repeat method allows to create a new string by repeating the string with number of times provided inside the repeat method
 */
title.repeat(3) //output = mastermastermaster

/**
 * let title = 'mastering javascript'
 * length method allows to count the each character in the string including characters like space, symbols and everything with in
 */
title.length //output = 20

/**
 * let title = 'mastering javascript'
 */
title[6] //output: 'i', using array notation on a string makes the string act as an array by technically applying title.split('') behind the scene