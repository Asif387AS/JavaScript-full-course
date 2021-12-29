console.log('More on  events');
// document.getElementById('container1').addEventListener("click", function(e){
//     console.log('clicking the container');
//     e.preventDefault();
// })

// alternative way of functin 

let btn=document.getElementById('container1')
btn.addEventListener('click', func2);
function func2(e){
    console.log('thank button for clicking');
    e.preventDefault();
}

// document.getElementById('btn').addEventListener("dbclick", function(e){
//     console.log('clicking the button');
//     e.preventDefault();
// })

document.getElementById('btn').addEventListener("mousedown", function(e){
    console.log('clicking the mouse down');
    e.preventDefault();
})

document.getElementById('container1').addEventListener("mousemove", function(e){
    console.log(e.offsetX,e.offsetY);
    console.log('you are triggering the mouse');
    // document.body.style.backgroundColor='red';
     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},445)`;

    e.preventDefault();
})

