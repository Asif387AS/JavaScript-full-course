console.log('This is about Error handling and try cat ch');
// Pretend this is comming from server as response 
function asif() {
    let a = "asif bhai";
    a = undefined;
    if (a != undefined) {
        throw new Error("This is not undefined");
    } else {
        console.log('This is undefined');

    }
    try {
        console.log('I am fall in love of tidi , meri shoni c tidi');
        kashi();

    } catch (error) {
        console.log('Are you okay?');
        // console.log(error.name);
        console.log(error.message);
    } finally {
        console.log('Finally we will run this');

    }
}
asif();