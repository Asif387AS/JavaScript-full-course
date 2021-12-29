console.log("Regular Expression and its related function");
let reg = /Asif/ //This is regular Expression literal in js
reg = /Asif/g; //here g is globa flag and it will find globally
// reg = /Asif/i; //i is flag which ignore the case sensitivity 
// //  
console.log(reg);
console.log(reg.source);

let s = "This is great code with Asif and Asif  ";

// function to match the regular expression 
// 1.exec()--> this will return array for match or null for no mtach 
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); -->we can use multiple exec with global flag 
if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}

// 2-test() --> This will return true or false .true when 'reg' is in s 
result = reg.test(s);
console.log(result);

// 3-match() -->This wil return an Array of result or null 
// result = reg.match(s) //This is wrong 
result = s.match(reg) //This is right
console.log(result);

// 4-search() --> this will return index of first match or -1
// result = reg.search(s) //This is wrong 
result = s.search(reg) //This is right
console.log(result);

// 5-replace() -- it will return replaced string with all replacements 
//if no global flag then only first match will be replace 
result = s.replace(reg, "Kasif");
console.log(result);

// result = s.repeat(reg, "asif");
// console.log(result);