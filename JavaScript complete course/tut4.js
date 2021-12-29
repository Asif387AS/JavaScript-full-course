// Data types in JS 
// Two types of data types : primitive and reference data types

// Primitive Data types

//Numeric data type
 let num=44;
 console.log(num,(typeof num));
//String 
 let str="asifali";
 console.log(str,(typeof str));
//Boolean
 let Boolean=true;
 console.log(Boolean,(typeof Boolean));
//undefined
 let undefind=undefined;
 console.log(undefind,(typeof undefind));
//Null
 let Null=null;
 console.log(Null,(typeof Null));

//  Reference Data types
//  Arrays
let arr=[1,2,3,4,5,6,7,8];
console.log(arr,(typeof arr));

//Object literal
let stMarks={
    asif:44,
    kashif:55,
    saqib:55
}
console.log(stMarks,(typeof stMarks));
 
//Function
function asif(params) {
    console.log("asifali");
}
 console.log(asif,(typeof asif));

 //Date
  let date=new Date();
  console.log(date,(typeof date));