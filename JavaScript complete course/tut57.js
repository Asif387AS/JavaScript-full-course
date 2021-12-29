console.log("Map Object in JS");
// it is use to store complex values 
// Map in JavaScript : we can use any type of value and key -->it is a object 
let myMap = new Map(); //initialize an empty set 
const key1 = "myString",
    key2 = {},
    // key2 = {name:"asif"},
    // key2 = {"asif"},
    key3 = function() {};
// set the map values 
myMap.set(key1, "This is my string ");
myMap.set(key2, "This is empty obj");
myMap.set(key3, "This is empty function");
console.log(myMap);

// get the map values 
let values = myMap.get(key1);
values = myMap.get(key2);
values = myMap.get(key3);
console.log(values);

// get the size of map 
let length = myMap.size;
console.log(length);

// you can loop the map using for-of loop  to get key and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// get only keys 
for (let key of myMap.keys()) {
    console.log(key);

}
// get onl values 
for (let values of myMap.values()) {
    console.log(values);

}

// you can loop through map using foreach 
myMap.forEach((key, value) => {
    console.log('key is ', key);
    console.log('value is ', value);

})

// Converting the map into Array 
let myArray = Array.from(myMap);
console.log(myArray);

// Converting the map keys  into Array 
let myKeyArray = Array.from(myMap.keys());
console.log(myKeyArray);

// Converting the map values into Array 
let myValuesArray = Array.from(myMap.values());
console.log(myValuesArray);