console.log('prototype in JS');
// object literal: object.prototype 
let obj={
    name:'asif',
    rollNo:1908,
    Channel:'Code with asif'
}
// prototype mean that actually where object is actually starting 
// object prototype is not usually change but constructor object prototype can be change 
    function objj(givenName) {
        this.name = givenName;
    }
    objj.prototype.getName=function() {
        return this.name;
    }
    objj.prototype.setName =function(newName){
        this.name = newName;
    }


let obj2=new objj('Saqib');
console.log(obj2);