console.log('Asnychronous and synchronous programming');
// synchronous programming in which one work done at one time and line by lin execution
// async prgramming in which many works done at one time 

// in this programm firt print printing done and after one second for loop wil exc it mean that two work performing at one time for loop in process and printing done is printed 

// in sync blocking call work which stop others function and firts exec itsel while in async non blocking call work which not block the others functon and these functions working behing mean many function working at a time 
 setTimeout(() => {
    for (let index = 0; index < 55; index++) {
        const element = index;
        console.log(element);    
    }
 }, 100);

console.log('printing done');