console.log('Alarm clock Exercise 6');
let alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', alarmSet);

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}
// funtion to ring the tone of alarm 
function ringBell() {
    audio.play();
}

function alarmSet(e) {
    e.preventDefault();
    let alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting the alarm for ${alarmDate}`);
    now = new Date();
    timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm > 0) {
        setTimeout(() => {
            play();
        }, timeToAlarm);
    }


}


// validations for alarm
let alarm = document.getElementById('alarm');
alarm.addEventListener('blur', () => {
    let regext = /^([0-9])\-([0-9])\-([0-9]).([0-9])\:([0-9])\:([0-9])$/
    let str = alarm.value;
    if (regext.test(str)) {
        console.log('Time is matched');
        alarm.classList.remove('is-invalid');
    } else {
        console.log('Time is does not matched');
        alarm.classList.add('is-invalid');
    }
})