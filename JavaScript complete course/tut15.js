console.log('parent_child_and traversing the DOM');
// let cons=document.querySelector('.child');
//  cons=document.querySelector('.container');

//  let doc= cons.childNodes[3].nodeName;
//  doc= cons.childNodes[3].nodeType;
//  console.log(doc);

//  Node Types
// 1-Element
// 2-attrubutes
// 3-Text node
// 8-Comment
// 9-Document
// 10-doctype 
  
// console.log(cons.nodeName);
// console.log(cons.childNodes);
// console.log(cons.children);

let docu= document.querySelector('div.container');
// console.log(docu.children[0].children);
//  console.log(docu.firstChild);
//  console.log(docu.firstElementChild);

//  console.log(docu.lastChild);
//  console.log(docu.children);
//  console.log(docu.lastElementChild);
//  console.log(docu.childElementCount);
//count the number of elements of div
console.log(docu.firstChild.parentNode);
console.log(docu.firstChild.nextSibling)
console.log(docu.firstChild.nextElementSibling)
console.log(docu.firstElementChild.nextElementSibling.nextSibling.nextSibling.nextElementSibling);
