console.log('This is about character sets');
// Regular Expression 
// Basic functions
// Metacharacter Symbol 
// let regex = /^H/i;

// Character sets   : use []
let regex = /a[a-z]if/; //can be any character from a to z
regex = /a[asif]if/; // can be a,s,i ,f character 
regex = /a[^klwi]if/; //not be klwi 
regex = /a[^klm]i[fssk]/; //not klm and can be fssk // ^ mean not here 
regex = /a[^klm]i[a-zA-Z]/; //not klm and can be A-Z and a-z mean lowercase and uppercase 
regex = /a[^klm]i[a-zA-Z][0-9]/; //not klm and can be A-Z and a-z mean lowercase and uppercase  0-9 character 
regex = /a[^klm]i[a-zA-Z][0-9]/; //not klm and can be A-Z and a-z mean lowercase and uppercase  0-9 character 

// Quantifiers : use {}
regex = /as{2}if/ //2 means exactly 2 characters in string  occour mean 2 ss 
regex = /as{0,2}if/ //0,2 means exactly between 0 and 2 (0 1 2)characters in string  occour mean 2 ss 

// Grouping--> we use paranthesis for grouping ()
regex = /(asi)([0-9]r)/ //() mean exactly {n} time occour string 
regex = /(asi)([0-9]r){2}/
regex = /(asi){2}([0-9]r){2}/


let str = "asif is asif";
str = "asif is asiF";
str = "asif is asif3";
str = "aif is asif3";
str = "asiasi5r3r is asif3";
// str = "asiasi3r5r is asif3";
let result = regex.exec(str);
console.log(result);

if (regex.exec(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);

} else {
    console.log(`The string ${str} does not  matches the expression ${regex.source}`);

}