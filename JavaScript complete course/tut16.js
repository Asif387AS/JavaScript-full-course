console.log('Creating, removing and replacing the element in the DOM');

let elemment= document.createElement('li');
let text =document.createTextNode('this is a tex node');
elemment.appendChild(text);
console.log(elemment);
elemment.className='asif';
elemment.id='asif1';
elemment.setAttribute('title','javascript');
// elemment.innerText='Asif is a programmer';
// elemment.innerHTML='<b>Asif is a programmer <\br>';
 

let ul= document.querySelector('ul.ul');
ul.appendChild(elemment);
console.log(ul);
console.log(elemment);


let elem2= document.createElement('h3');
let tnode= document.createTextNode('Asif is a python programmer');
elem2.appendChild(tnode);
elem2.id='elem2';
elem2.className='elem22';
elemment.replaceWith(elem2);
console.log(elem2);

let myul=document.getElementById('ul1');
myul.replaceChild(elemment,document.getElementById('li2'));
myul.removeChild(document.getElementById('li1'))

// let g= elem2.getAttribute('id');
 let g= elem2.getAttribute('className');
  g= elem2.hasAttribute('className');
  g= elem2.hasAttribute('id');
 g=elem2.removeAttribute('id')
 elem2.setAttribute('title', 'title atrribute' )
console.log(elem2,g);


let quiz= document.createElement('h3');
// quiz.id='asifa';
// quiz.className='asiff';
// let text1=document.createTextNode('GO to codeWithharry');
// quiz.appendChild(text1);
quiz.innerHTML=' GO to google<a href="http://www.google.com "></a>';
console.log(quiz);