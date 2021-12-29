// type conversion
let num=String( 4);
console.log(num ,(typeof num)); 
let valboolean=String(true);
console.log(valboolean,(typeof valboolean));
let nul=String(null);
console.log(nul,(typeof nul));
let arr=String([1,2,3,,4]);
console.log(arr.length,(typeof arr));
let date=String(new Date());
console.log(date,(typeof date));

let str= Number("33");
console.log(str,(typeof str));
let str2= Number("3asif3");
console.log(str2,(typeof str2));

let str3=Boolean("asif");
console.log(str3,(typeof str3));
 let stMarks={
     asif:44,
     kashif: 55,
     saqib:55
 }



let nu= 6;
console.log(nu.toString());

let numb=parseFloat(44);
console.log(numb.toFixed(4),(typeof numb));
let numbe=parseInt( 43.3223);
console.log(numbe,(typeof numbe));


// type coercion
let s= 33;
let r= Number("3444");
console.log(s+r);
let strr="asif";
let strrr="ali";
console.log(strr+strrr);



