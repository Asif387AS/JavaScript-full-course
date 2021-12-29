console.log('Symbols in JS tut59');
// Symbol: Symbol is used to generate a  new unique primitiv and it store only unique valaue not like set but here their 
// data type and value will not same 
let symb = Symbol("This is identifier");
let symb2 = Symbol("This is identifier");
console.log(symb);

console.log(symb === symb2);

let a = 55;
let b = 55;
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

let k1 = Symbol('identifier for k1');
let k2 = Symbol('identifier for k2');
myObj = {};
myObj[k1] = "asif";
myObj[k2] = "hassan";
myObj["name"] = "tiddi";
myObj[4] = "kashi";
console.log(myObj);

console.log(myObj[k1]);
console.log(myObj[k2]);
// console.log(myObj.k2); -->cannot do this bcz this mean string taken by myObj
// console.log(myObj.["k2"]); -->cannot do this bcz this mean string taken by myObj

// Symbols are ignore by for-in loop 
for (key in myObj) {
    console.log(key, myObj[key]);

}

// to convert object into string 
console.log(JSON.stringify(myObj));