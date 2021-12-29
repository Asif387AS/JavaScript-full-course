console.log('Sets in java script tut58');
// Set will store unique value or no duplicate value 
// this object is like HashSet in java 
let mySet = new Set(); //initialize the set 
// console.log("The set  look like this:", mySet);
//Adding values to the set
mySet.add("This");
mySet.add("is");
mySet.add("my");
mySet.add("Set");
mySet.add("Set");
mySet.add(true);
mySet.add(44);
console.log('The set look like this now', mySet);

// let mySet2 = new Set(["this", 44, true, { a: 4, b: 4 },
//     ["asif", "kashif"],
//     [4, 7, 8]
// ]);
// console.log('New Set:', mySet2);

// to find the size of Set
console.log(mySet.size);

// check that "This" is available in set 
console.log(mySet.has("This"));


console.log('Set before removal', mySet, mySet.has("This"));
mySet.delete("This");
console.log('Set after removal', mySet, mySet.has("This"));

// iterate the set 
// for (let items of mySet) {
//     console.log(items);

// }


// for (items in mySet) {
//     console.log(mySet[items]);
// }

// mySet is not an array that why it will not work 
// for (let index = 0; index < mySet.length; index++) {
//     const element = mySet[index];

// }

mySet.forEach((items) => {
    console.log(items);

})

// convert set into array 
let myArray = Array.from(mySet);
console.log(myArray);