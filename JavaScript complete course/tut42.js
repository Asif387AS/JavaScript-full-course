console.log("This is about Fetch API");
// button with myBtn id 
let myBtn = document.getElementById("myBtn");
// div with content id 
let content = document.getElementById("content");

// function getData() {
//     console.log("Started getData");
//     url = "asif.txt";
//     fetch(url).then((response) => {
//         console.log("inside the first then");
//         return response.text();
//     }).then((data) => {
//         console.log('Inside the second then');
//         console.log(data);
//     })
// }

//This is get request 

function postData() {
    url = ''
    data = '' //write on google fake request api and go to dummy rest api
        // har wari name change kran pena agr dummy rest api to request leni 
    url = "https://api.github.come/users";
    params = {
        method: 'post',
        headers: {
            // mostly content type is application json or form urlencoded
            'content-type': 'application/json'
        },
        // body:JSON.stringifyI=(data) -->it is use when data is not in string or in object fom we not use this bcz we already give data in string form 
        body: data
    }
    fetch(url, params).then(response => response.json()) //when json use there is no need to conver the string in the object bcz it automatically convert it in object
        .then(data => console.log(data))
}
console.log("before running  the getData")
getData();
console.log("after running  the getData")