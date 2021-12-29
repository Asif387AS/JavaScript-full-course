console.log('events and event objects');
document.getElementById('ul1').addEventListener("click",function(e)
{

    console.log('you have clicked the ul1');
    let variable;
    variable=e.target;
    variable=e.target.className;
    variable=e.target.id;
    variable=e.target.classList;
    variable=Array.from(e.target.classList);
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clienty;
    console.log(variable);

}

)