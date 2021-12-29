console.log('Date and time objects in JS');
// let time=new Date();
// console.log(time);

let othertime=new Date('8-4-2021 04:02:09');
 othertime=new Date('8/4/2025 04:02:09');
//  othertime=new Date('8/4/2025');
console.log(othertime);

let a=othertime.getDate();
a=othertime.getDay();
a=othertime.getHours();
a=othertime.getFullYear();
a=othertime.getMilliseconds();
a=othertime.getSeconds();
a=othertime.getMonth();
a=othertime.getMinutes();
// a=othertime.setFullYear(2029);
console.log(a);


othertime.setDate(23);
othertime.setHours(23);
othertime.setFullYear(2023);
othertime.setSeconds(23);
othertime.setMonth(23);
othertime.setMinutes(23);
// othertime.setTime(05:05:05);
// othertime.setTime(05:05:05);

console.log(othertime);