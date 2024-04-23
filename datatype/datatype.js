// primitive datatype/non modifiable 
// it means the datatype cannot be mutated from string to number 
// but the value assigned to the variable could be changed 

let word = 'JavaScript';
// word='testing primitive';
word[0] = 'Y' 

/* word[0] = 'Y' This expression does not change the string stored in 
the variable word. So, we can say that strings are not modifiable 
or in other words immutable
*/
// console.log(typeof(word));

// console.log(word);


// My try

collectValue=2;
    // Perform the data type check inside the callback function
    if (typeof collectValue === 'string') {
        console.log("The value is a string.");
    } else if (typeof collectValue === 'number') {
        console.log("The value is a number.");
    } else if (typeof collectValue === 'boolean') {
        console.log("The value is a boolean.");
    } else if (typeof collectValue === 'object') {
        console.log("The value is an object.");
    } else if (typeof collectValue === 'function') {
        console.log("The value is a function.");
    } else if (typeof collectValue === 'undefined') {
        console.log("The value is undefined.");
    } else {
        console.log("The value is of an unrecognized data type.");
    }



//


