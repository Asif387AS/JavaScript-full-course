console.log('prototype inheritance in JS');
const proto = {
    slogan: function () {
        return 'This company is best';
    },
    changeName: function (newName) {
        this.name = newName;
    }
}
// this create the asif object 
// let asif=Object.create(proto);
// asif.name='ASIF';
// asif.role='Programmer';
// // proto.slogan;
// asif.changeName='Asif2';
// console.log(asif);

// this is also create asif object 
let asif1 = Object.create(proto, {
    name: { value: "asif", writeable: true },
    role: { value: "programmer" }
})
asif1.changeName = "asif2"
console.log(asif1);


function Employee(name, salery, Experience) {
    this.name = name;
    this.salery = salery;
    this.Experience = Experience;
}
// Slogan 
Employee.prototype.slogan = function () {
    return `This company is best regards, ${this.name}`;
}
let asifObj = new Employee("asifObj", 44, 4);
console.log(asifObj.slogan);
// Progrmmer
function Programmer(name, salery, Experience, language) {
    Employee.call(this, name, salery, Experience);
    this.language = 'Java';
}
// Inherit the prototype 
Programmer.prototype = object.create(Employee.prototype);
// Manually set the constructor 
Programmer.prototype.constructor = Programmer;
let kashi = new Programmer('Kashi', 4, 4, "Java");
console.log(kashi);