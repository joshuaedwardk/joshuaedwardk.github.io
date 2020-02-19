//Strong, numbers, Boolean, null, undefined, true, false
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;

// name have ' '
// const name = 'Joshua'
// const age = 40;

// Old way
// console.log(' My name is ' + name + ' I am ' + age);

// Template String
// const Bebo = (`my name is ${name} I am ${age} `);
// console.log(Bebo)

// const s = 'Sexy, Place, Hope, Health'
// console.log(s.split())


/** Arrays variables that hold multiple values
 old ways**/
// const numbers = new Array(1,2,3,4,5,6,7,8)
// console.log(numbers)

/** Arrays variables that hold multiple values
 New Way**/
/**const fruits = ['I like Fruit', 'Not Me', 'No one Cares', 'I Sure Do']
 fruits.push('HATRED')
 fruits.unshift('COWS')
 console.log(fruits)**/
// personal array
/**const { firstName, lastName } = person;
 console.log(firstName)**/
// personal array
/**person.email = 'joshuaedwardk@gmail.com';
 console.log(person);**/

/**const person = {
    firstName: 'Joshua',
    lastName: 'Koitzsch',
    age: '40',
    sex: 'male',
    weight: '205',
    hobbies: [
        'art', 'sports', 'Movies'
    ],
    address: {
        street: '1215 WE place',
        city: 'La Center',
        state: 'Washngton',
        zipcode: '98629',
        phoneNumber: '350-521-2040'
    }
};**/


// convert to JSON
/**const todoJSON = JSON.stringify(todos)
 console.log(todoJSON)**/
const todos = [
    {
        id: 1,
        text: 'Take a Nap',
        isCompleted: true
    },
    {
        id: 2,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 4,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

// For
/**for(let todo of todos){
    console.log(todo)
}**/

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
