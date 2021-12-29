console.log("Smart Crawaler Page in JS Exercise1")
// Exercise1:
// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given pages wich contiins this text. 
let str="python";
let links=document.links;
console.log(links);
Array.from(links).forEach(function(element)
{
    let href=element.href;
    if(href.includes(str))
    {
        console.log(href);
    }
})   