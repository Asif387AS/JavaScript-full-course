console.log('local and session storage');
let myArr=['asif','saqib','kashif'];
// add a pair value inside the localStorage;\
localStorage.setItem('Name','Asif');
localStorage.setItem('Name2','Kashif');
localStorage.setItem( 'name3', JSON.stringify(myArr));

// clear all the item inside the localStorage 
// localStorage.clear();

// clear only specific items 
// localStorage.removeItem('Name');

// Retrieve the elements of localStorage  /
// let name=localStorage.getItem('Name');
//  name=JSON.parse(localStorage.getItem('name3'));
// console.log(name);


// session stroage  with same functionality as local storage 
// session stroage is temporary memory if we reset browser the data willl be delete while in localStorage data remain forever 
// sessionStorage.setItem('sessionName','sAsif');
// sessionStorage.setItem('sessionName2','sKashif');
// sessionStorage.setItem( 'sessionname3', JSON.stringify(myArr));
