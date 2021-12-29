console.log('HTML Element Selectors');
// Element selectors 
// single element selectors
//multi element selectors

 // single element selectors
//let element=document.getElementById('child1');
 //element=document.getElementById('child2');

// element=element.className;
// element=element.parentNode;
// element=element.childNodes;
// element.style.color='red';
// element.innerText="Asif ali kodhan";
// element.innerHTML= '<b>Asif ali kodhan</b>';
// console.log(element.innerHTML);

// Query Selector 

// let el=document.querySelector('#child');
// el=document.querySelector('div');
// el=document.querySelector('.child');
// el.style.color='red';
// console.log(el );

// multiple element selectors 
let elem= document.getElementsByClassName('child');
// let elem= document.getElementsByClassName('container');
elem=document.getElementsByTagName('div');
console.log(elem);

// for(let index=0; index<elem.length; index++){
//     let element=elem[index];
//     console.log(element);
//     element.style.color='red';
// }

Array.from(elem).forEach(element=>{
    console.log(element);
    element.style.color='green';

})
// console.log(elem[0].getElementsByClassName('child'));
console.log(elem[0].getElementsByTagName('div'));
