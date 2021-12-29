// const { profile } = require("console");

console.log('CV screener');
let data = [{
            name: "Asif",
            age: 20,
            city: "faislabad",
            language: "java",
            frameWork: "spring",
            //go to rnadomuser.me
            photo: 'https://randomuser.me/api/portraits/men/86.jpg'
        },
        {
            name: "Kashif",
            age: 28,
            city: "faislabad",
            language: "javaScript",
            frameWork: "Angular",
            photo: 'https://randomuser.me/api/portraits/men/44.jpg'
        },
        {
            name: "<b>Saba Arshad Tiddi</b>",
            age: 18,
            city: "faislabad",
            language: "pthon",
            frameWork: "Django",
            photo: 'https://randomuser.me/api/portraits/women/56.jpg'
        },
        {
            name: "Sadaf churail",
            age: 20,
            city: "faislabad",
            language: "python",
            frameWork: "Flask",
            photo: 'https://randomuser.me/api/portraits/women/65.jpg'
        }
    ]
    // CV iterator 
function cvIterator(profiles) {
    nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
// Button listener for next button 
let next = document.getElementById('next');
next.addEventListener('click', nextCV);
const candidates = cvIterator(data);
nextCV();

function nextCV() {
    if (cunnerCandidate != undefined) {
        const cunnerCandidate = candidates.next().value;
        const image = document.getElementById('image');
        const profile = document.getElementById('profile');
        image.innerHTML = `<img src='${cunnerCandidate.photo }'>`
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${cunnerCandidate.name}</li>
    <li class="list-group-item">${cunnerCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${cunnerCandidate.city}</li>
    <li class="list-group-item">Primarily work on ${cunnerCandidate.language}</li>
    <li class="list-group-item">with ${cunnerCandidate.frameWork} framework</li>
  </ul>`
    } else {
        alert('End of applications');
        window.location.reload();
    }
}