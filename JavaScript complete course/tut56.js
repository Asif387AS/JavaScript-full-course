console.log('for-in and for-of loops in JS');
// ITERATIN AN ARRAY
let people = ["asif", "hassan", "haris", "shabbir"];
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);  }

for (index in people) {
    // console.log(people[index]);
    // console.log(people[index]);


}

// ITERATING AN OBJECT 
let obj = {
    name: 'asif',
    language: 'python',
    hobbies: 'web development',
    friend: 'Hassan'
}

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element); }
for (key in obj) {
    // console.log(obj[key]);
    console.log(obj.name);
    console.log(obj.hobbies);
}

// ITERATING AN STRING 
let myString = 'Asif is a good boy';
// we can use for-in with strings to loop through all characters 
// for (char in myString) {
//     console.log(myString[char]);

// }

// traditional for loop 
for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    console.log(element);


}



// FOR OF LOOP IN jS 
console.log('*************FOR OF LOOP**************');
for (let name of people) {
    console.log(name);

}



// let obj1 = {
//     name: 'saqib',
//     language: 'python',
//     hobbies: 'web development',
//     friend: 'Hassan'
// }
// for (let k of obj1) {
//     console.log(keys);

// }


let yourString = "YOu are bad boy";
for (let chars of yourString) {
    console.log(chars);

}