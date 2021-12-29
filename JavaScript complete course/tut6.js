console.log("Good morning");
// Strings properties Methods and templates
const nam = 'asif';
const greeting = 'Good Morning';
console.log(greeting + ' ' + nam);

// String functions
let html = '<h1> this is the heading</h1>' + '<p> this is para</P>';
html = html.concat('this', ' ', 'asif');

console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('>'));
console.log(html.charAt('1'));
console.log(html.endsWith('asif'));
console.log(html.includes('asif'));
console.log(html.substring(-4));
console.log(html.slice(3,8));
console.log(html.split('<'));
console.log(html.replace('this','it'));




// template literals
let fruit1='\`Orange\`';
let fruit2='Apple';
let myHtml=`Hello ${nam}
<h1>This is "my" heading </h1>
<p> You like ${fruit1} and ${fruit2}
;`
document.body.innerHTML=myHtml;
// console.log(myHtml);









