console.log('Destructuring in JS tut60');
let a, b;
[a, b] = [33, 33];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

({ a, b, c, ...d } = { a: 3, b: 5, c: 6, d: 22, asif: 55, asiff: 53 });
console.log(a, b, c, d);

// Arrau Destructuring 
const fruits = ['apple', 'banannas', 'mangoes', 'guava', 'strawberry'];
[a, b, c, ...d] = fruits;
console.log(a, b, c, d);

// Object Destructuring 
const Laptops = {
    name: "HP",
    age: "33 Days old",
    model: "Elitebook 8470p",
    net: 39994,
}
const { name, age, model, net } = Laptops;
console.log(name, age, model, net);