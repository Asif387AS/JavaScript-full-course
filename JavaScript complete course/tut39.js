console.log('this is about promises : promise.then() and promsie.catch()');
// promise:
// -resolve
// -reject:
// -pending
// function func1() {
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error=true;
//         if (!error) {
//             console.log('Your promise have been resolved');
//             resolve();
//         }
//         else{
//             console.log('Sorry, You promise have been not resolved');
//             reject('Sorry not fulfilled');
//         }
            
//         }, 3000);
//     })
// }

// func1().then(() => {
//     console.log=('Thanks for resolving asif bhai');
// }).catch((error) => {
//     console.log('Very bad bro' + error);
// });

function asif() {
    return new Promise(function(resolve,reject) {
        const error=true;
        if (!error) {
            resolve();
        }
        else{
            console.log('you cannot come to college');
            reject();
        }
    })
}
function saqi(){
    console.log('You can come to college for fee submission ');
}
asif().then((result) => {
    saqi();
}).catch((err) => {
    console.log("You are orphan u cannot pay fee");
});