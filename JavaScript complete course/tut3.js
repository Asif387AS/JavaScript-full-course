// we can redefine or re redeclare var variable
//Topic: Variables in javascript
//var, const, let
//let and const prefered to use in modern javascripts
// camelCase
// kabab-case
//snake_case
// PascalCase

var e = `churail`; //back ticks
console.log(e);
var name = "asif ali";
name = "Atif ali"
var s = `welcome to java script`
console.log(name);
console.log(s)


const num = 44;
//const num=66;  // cannot do this with const variable can't redeclare
console.log("THis value of num is" + num);
// also change the arrys of cosnst only not redeclare
const arr = [4, 3, 2, 5];
arr.push(55);
console.log(arr);

/*let is a block line element this used in blocks like for loop, if condition   */
{
    let name = "saba";
    // let name = "saqib"//let is like const varible and block element
    console.log(name);
}
