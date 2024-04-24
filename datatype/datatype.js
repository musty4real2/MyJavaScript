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



//eg 2 
let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false



/*

Exercise: Level 1
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
*/
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(challenge.indexOf(" ") + 1));


/*


Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

