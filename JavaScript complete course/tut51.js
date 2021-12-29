console.log('iterators in java script');

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object 
    return {
        next: function() {
            if (nextIndex < values.length) {
                // we will return the object below 
                return {
                    value: values[nextIndex++],
                    done: false
                }

            } else {
                // we will return the object below 
                return {
                    done: true
                }
            }
        }
    }
}
const myArray = ['apples', 'grapes', 'banana', 'shabo tid'];
console.log('My array is', myArray);
let fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);