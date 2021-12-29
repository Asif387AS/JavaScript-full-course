console.log('object literals constructors and object oriented');
let car={
    name:'Maruti 800',
    topSpeed:56,
    run:function(){
        console.log('Car is running');
    }
}
// we have already seen the constructor like this:
// new Date();

// Creating a constructor for car 
// making literals with the help of constructors 
function generalCar(givenName,giveSpeed){
    this.name=givenName;
    this.topSpeed=giveSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower ${200-this.topSpeed}KMPH than meredes `)
    }
}

car1=new generalCar('Nissan',55);
car2=new generalCar('Honda',155);
car3=new generalCar('Mercedes',200);
console.log(car1,car2,car3);
console.log(car);