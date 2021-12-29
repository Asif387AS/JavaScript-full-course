console.log('This is Project4');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
// $('#success').hide();
// $('#failure').hide();
// let nameValid = document.getElementById('nameValid');
// console.log(name, email, phone);
name.addEventListener('blur', () => {
    console.log('Name is blured');
    // validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}$)/
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is matched');
        name.classList.remove('is-invalid');
        validUser = true;
        // nameValid.classList.remove('text-danger')
    } else {
        console.log('Name does not match');
        name.classList.add('is-invalid');
        // nameValid.classList.add('text-danger')
        validUser = false;
    }



})
email.addEventListener('blur', () => {
    console.log('email is blured');
    // validate email here 
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is matched');
        email.classList.remove('is-invalid');
        validEmail = true;

    } else {
        console.log('email does not match');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log('phone is blured');
    // validate phone here 
    let regex = /^([0-9]){11}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is matched');
        phone.classList.remove('is-invalid');
        validPhone = true;

    } else {
        console.log('phone does not match');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
let failure = document.getElementById('failure');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on button');
    console.log(validEmail, validPhone, validUser);
    // Submit your form here 
    if (validEmail && validPhone && validUser) {
        console.log('Phone user and email are valid. Hence submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        // ('#failure').alert('close');
        // $('#success').show();
        // $('#failure').hide();
    } else {
        console.log('Out of Phone user and email are valid. Hence not submitting the form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
        // ('#success').alert('close');
        // $('#failure').show();
        // $('#success').hide();

    }


})