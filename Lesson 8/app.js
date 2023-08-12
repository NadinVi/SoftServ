// Task 1
// Write a function upperCase that will check whether the first character in a string is uppercase or not.

// Рішення
// function upperCase(str) {
//     const reFirstCharacter = /^[A-Z]/
//     if(reFirstCharacter.test(str)) {
//        return ("String's starts with uppercase character");
//     } else {
//         return ("String's not starts with uppercase character");
//     }
// };

// console.log(upperCase('regexp')); 
// console.log(upperCase('RegExp'));
// console.log(upperCase('regExp'));



// Task 2
// Write a function validateEmail(email) that accepts string data and checks that it matches an email.
// Requirements to an email address:
// The email address must have a local part and a domain part separated by the @ symbol.
// The local part can contain alphanumeric characters (letters A-Z, both uppercase and lowercase, and digits 0-9), as well as the following special characters: ._%+-.
// The local part must have at least one character.
// The domain part can contain alphanumeric characters (letters A-Z, both uppercase and lowercase, and digits 0-9), as well as the following special characters: .-.
// The domain part must have at least one character.
// The domain part must include a period (.) to separate the domain name from the top-level domain (TLD) or domain extension.
// The TLD or domain extension must consist of two or more letters (both uppercase and lowercase).

// Рішення
// function validateEmail(email) {
//     let regex = /[\w\d.%+\-]+\@[\w.]+\.\w{2,}/
//     return regex.test(email);
// };

// let email = "john.doe@example.com"
// console.log(validateEmail(email))
// let email = "jane_smith@example.co.uk"
// console.log(validateEmail(email))
// let email = "john.doe@example"
// console.log(validateEmail(email))

// let email = "jane_smith@examplecom"
// console.log(validateEmail(email))



// Task 3
// Write a regular expression in variable regex that will swap the 2 substrings in the string text.
// For example:
// Test	Result
// let text = "Java Script"
// let swappedText = text.replace(regex, "$2 $1");
// console.log(swappedText);
// Script Java

// Рішення
// let regex = /(\w+)\s(\w+)/; // не включає !
// let regex = /(\S+)\s(\S+)/;
// let text = "world! Hello"
// let swappedText = text.replace(regex, "$2 $1");
// console.log(swappedText);



// Task 4
// Write a regular expression in variabl regex that will perform validation of the bank card number in format 9999-9999-9999-9999.

// Рішення
// let regex = /[1-9]{4}\-\d{4}\-\d{4}\-\d{4}/g
// let cardNumber = "1234-5678-9012-3456"
// let isValid = regex.test(cardNumber);
// console.log(isValid);



// Task 5
// Write a function checkLogin(login) that checks the correctness of the login.
// A valid login is a string of 2 to 10 characters, containing only letters, dots and numbers, 
// a number cannot be the first character. The function should take a string and return 
// object {isValid: Bolean, numbers : Array of string} with result of the login verification (isValid) and array of all numbers
// in input string (numbers), including floating-point numbers.

// function checkLogin(login) {
//     let isValid = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/.test(login);
//     let numbers = login.match(/[0-9]*\.?[0-9]+/g) || [];
//     return { isValid, numbers };
// };

// Рішення
// function checkLogin(login) {
//     let reg = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/
//     let isValid = reg.test(login);
//     let regNum = /[0-9]*\.?[0-9]+/g
//     let numbers = login.match(regNum) || [];

//     return { isValid, numbers };
// };
