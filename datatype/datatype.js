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
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use repeat() method to print 30 Days Of JavaScript 2 times
*/
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(challenge.indexOf(" ") + 1));
console.log(challenge.slice(0, challenge.indexOf(' ')));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let socialString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(socialString.split(','));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('30 Days Of JavaScript'));
console.log(challenge.lastIndexOf('a'));
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let statementTrim = ' 30 Days Of JavaScript ';
console.log(statementTrim.trim());
console.log(challenge.startsWith(challenge));

console.log(challenge.match(/a/g));

let partOne = '30 Days of';
let partTwo = 'JavaScript';
console.log(partOne+' '+partTwo);
console.log(challenge.repeat(2));



// testing 
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py);            //false 

let lightOnOn = true;
let lightOffOff = false;

console.log(lightOnOn == lightOffOff); // false


let numsTest = [1, 2, 3]
numsTest[0] = 10

console.log(numsTest)  // [10, 2, 3]


// userTest

let userOne = {
    name:'Musa',
    role:'dev',
    country:'Surulere'
    }
    
    let userTwo = {
    name:'Musa',
    role:'dev',
    country:'Surulere'
    }
    
    console.log(userOne == userTwo) // false
    console.log(userOne != userTwo) // true

    console.log(userOne.role);
    console.log(userOne.country);



    function userDetails() {
        let userOne = { //creating userOne first object
            name: 'Musa',
            role: 'dev',
            country: 'Surulere'
        };
        
        let userTwo = { //creating UserTwo object
            name: 'Akanni',
            role: 'frontend',
            country: 'gudu'
        };
    
        return { userOne, userTwo }; // Return an object containing userOne and userTwo details
    }
    
    const users = userDetails(); // Call the function and store the returned object
    
    console.log(users.userOne); // Access userOne property of the returned object
    console.log(users.userOne.role); //returning value of the role object field 
    console.log(users.userTwo.name);
    



// truty 

let isLightOn = true
// let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
let isAlive=0;



// example

let isRaining = true;
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');
isRaining = false;

isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');


alert('Welcome to test');
let number = prompt('Enter number', 'number goes here');
console.log(number);