console.log('Arrays and objects in JS');

let frut = ['apple', 'bannana', 'guava'];
let marks = [34, 44, 66, 75, 75];
let mixed = ['asif', 44, [33, 55]];

console.log(frut);

console.log(mixed);
console.log(marks.length);
marks[0] = 'asif';
console.log(marks[0]);
console.log(marks);
console.log(marks.indexOf(44));


console.log(Array.isArray(marks));

//  Mutating and modifying array
// marks.push(46);
// marks.unshift(65);
// marks.pop()
// marks.shift()
// marks.splice(2,4);
// marks.reverse();

let marks2 = [3, 5, 3, 6];
marks = marks.concat(marks2);
console.log(marks);

// Objects in JS 
let myObj = {
    'name': 'asif',
    roll_no: 1908,
    seme: 4,
    mar: [3, 5, 6, 6],


}
console.log(myObj);
console.log(myObj['mar']);


console.log(myObj.mar)




// console.log(marks);