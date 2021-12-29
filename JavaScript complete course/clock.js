console.log('alarm clock exercise tut62');

function updateClock() {
    // get the time 
    let currentTime = new Date();
    // console.log(currentTime);

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";


    // pad 0 if seconds and minutes is less than 10 (signle digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // convert the railway clock to AM/PM Clock 
    currentHours = (currentHours > 12 ? currentHours - 12 : currentHours);
    currentHours = (currentHours == 0) ? 0 : currentHours;

    let myString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    let clock = document.getElementById('clock');
    clock.innerHTML = myString;
}