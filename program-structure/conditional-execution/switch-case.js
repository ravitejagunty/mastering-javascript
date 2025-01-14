/* I was ahead of loops and then remembered that we have another weird conditional execution statement in javascript,
the switch case */

/* switch case follows the same pattern as if--> else if--> else, however this not something javascript native and was
inherited from java, never liked it anyways */

switch(prompt('what day is it ?')){
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    default:
        console.log('Unknown input');
        break
}

/* input on prompt: 2
ouput: Today is Tuesday
a swtitch statement should always have a deafult case where it can fail back to on an unknown input just like else statement in if conditional execution
*/