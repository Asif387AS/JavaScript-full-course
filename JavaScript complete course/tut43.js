console.log("This is about async_await in javascript");
// https://api.github.com/users  this url use
// async will return a priomise 
// promise mean i swear that i will executes it later 
async function asif() {
    console.log("inside the asif function");
    const response = await fetch("https://api.github.com/users")
    console.log('before the response');
    const users = await response.json();
    console.log("users resolved");
    return users;
    // return "asif";
}
console.log("before calling asif");
let a = asif();
console.log("after calling asif")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")