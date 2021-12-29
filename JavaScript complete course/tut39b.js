// pretend that data is comming from server 
// tut39 tut39b tut42 tut43 are very imp 

const students = [
        { name: 'asif', subject: 'javaScript' },
        { name: 'saq', subject: 'javaScript' }
    ]
    // callbacks function will executes after the exectution of real function in which it is called 
    // it is a function insided a funtion and run according to the wish of that function 

function enrollStudent(student) {
    const error = false;
    return new Promise(function(reslove, reject) {
        setTimeout(() => {
            students.push(student);
            console.log('Student have been enrolled');

            if (!error) {
                reslove();
            } else {
                reject();
            }
            // callbacks();
        }, 1000);

    })
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(student => {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log('Student have been fetch');
    }, 5000);

}

let newStudent = { name: 'kashi', subject: 'Java' };
enrollStudent(newStudent).then((result) => {
    getStudents();
}).catch((err) => {
    console.log('Some error occoured');
});
// getStudents();
// function inside then is run as --reslove
// function inside catch is run as --reject