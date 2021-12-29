console.log('This is about call backs function ');

// pretend that data is comming from server 

// const students=[
//     {name:'asif', subject:'javaScript'},
//     {name:'saq', subject:'javaScript'}
// ]
// // callbacks function will executes after the exectution of real function in which it is called 
// it is a function insided a funtion and run according to the wish of that function 
 
// function enrollStudent(student,callbacks) {
//     setTimeout(() => {
//         students.push(student);
//         console.log('Student have been enrolled');
//         callbacks();
//     }, 1000);
// }
// function getStudents(){
//     setTimeout(() => {
//         let str="";
//         students.forEach(student => {
//             str+=`<li>${student.name}</li>`
//         });
//         document.getElementById('student').innerHTML=str;
//         console.log('Student have been fetch');
//     }, 5000);

// }

// let newStudent={name:'kashi',subject:'Java'};
// enrollStudent(newStudent,getStudents);
// // getStudents();
function asif() {
    console.log('this is the function of asif ');
}
function kashif(callbacks) {
    console.log('this is the function of kasihf')
    callbacks();
}
kashif(asif);
