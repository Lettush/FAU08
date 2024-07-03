console.log("Hello World!");
// This is a single-line comment.
/*
    This is 
    a multi-line
    comment.
*/

// Variables = container
/*
    let - mutable/changeable - block-scope
    var - mutable/changeable - global-scope
    const - unmutable/unchangeable
*/
let firstName = "David";
console.log("First name:", firstName);
firstName = "Jane";
console.log("First name:", firstName);

var lastName = "Doe";
console.log("Last name:", lastName);
lastName = "Smith";
console.log("Last name:", lastName);

const birthday = "01-04-1999";
console.log("Birthday:", birthday);
// birthday = "02-04-2000"; This will not work.

// Variables = container
/*
    let - mutable/changeable - block-scope
    var - mutable/changeable - global-scope
    const - unmutable/unchangeable
*/

if (true) {
    // Group of statements
    var email = "janesmith@example.com";
    let username = "janesmith30";
    console.log("Email:", email);
    console.log("Username:", username);
}
console.log("Email:", email);
// console.log("Username:", username); This will not work.