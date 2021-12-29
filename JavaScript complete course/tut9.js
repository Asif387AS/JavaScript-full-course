console.log('This is about loops in JS ');
//   for(let i=0; i<10; i+=1){
     
//       if(i===5){
//         //   break;
//         continue;
//       }
//       console.log(i);
//   }

// let i=0;
//   while(i<50){
//       console.log(i+1);
//       i+=1;
//   }

//   let i=0;
//   do{
//       if(i===5){
 
//         //   break;
//         continue;
//         // i++;
//       }
//       console.log(i);
//       i++;
//   }
//   while(i<10);
let array=[4,4,5,6,7];
let element;
for(let i=0; i<array.length;i++)
{
    element=array[i];
    console.log(element);
}


//   array.forEach(function(element) {
//       console.log(element);
//   });


let obj={
    name: "asif",
    roll_no: 1908,
    status: "full_stack_dev",
    gender: "male",
}
// for (let key in obj) {
    
//        console.log(obj[key]);
        
    
// }
for (let key in obj){   1QQQQQ
    console.log(`The ${key} of object is ${obj[key]}`);
}

