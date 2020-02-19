// Constructor Function

// function Person(prefix, firstName, lastName, dob, suffix) {
//     this.prefix = prefix
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = dob
//     this.suffix = suffix
// }
//     Person.prototype.getFullName = function(){
//         return ` ${this.prefix}, ${this.firstName} , ${this.lastName}`
//     }
//     Person.prototype.get123 = function(){
//         return ` ${this.lastName}, ${this.suffix}`
//     }

// class
class Person {
    constructor(prefix, firstName, lastName, dob, suffix) {
        this.prefix = prefix;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.suffix = suffix;
    }

    getFullName() {
        return ` ${this.prefix}, ${this.firstName} , ${this.lastName}`;
    }

    getLNS() {
        return ` ${this.lastName}, ${this.suffix}`;
    }

    getFullDamnThing() {
        return `${this.prefix}, ${this.firstName}, ${this.lastName}, ${this.dob}, ${this.suffix}`
    }
}

// Initantiate object
const p1 = new Person('Mr.', 'Joshua', 'Koitch', '03-31-1979', 'The Asshole');
const p2 = new Person('Cowdell', 'Joshuasd', 'Koitch', '3-31-1921', 'The King');

console.log(p1.getFullName());
console.log(p2.getLNS());
console.log(p2.getFullDamnThing());
