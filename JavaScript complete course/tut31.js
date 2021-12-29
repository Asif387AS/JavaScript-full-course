console.log('ES6 classes and inheritance in JS');
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `i am ${this.name} and this is the best company`;
    }
    joiningYear() {
        return 2010 - this.experience;

    }
    // static function is used if want to use function without making any object of class 
    // this keyword is used where we make object of class ....with static function we not use this keyword 
    static add(a, b) {
        return a+b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.githu = github;

    }
     favouriteLanguage() {
        if(this.language == 'python') {
            return 'Python';
        }
        return "Java";
    }
    static multiply(a, b) {
        return a * b;
    }
}

// asif = new Employee("Asif", 64, "FSD");
// console.log(asif.joiningYear());
// console.log(asif.slogan());
// console.log(Employee.add(5,5));
asif=new Programmer("asif",2,"lays","python",'asif387AS');
console.log(asif);
console.log(asif.favouriteLanguage())
console.log(Programmer.multiply(2,2));
// console.log(Employee.multiply(1,1));  error 
