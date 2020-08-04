// console.log(window)
// alert()
// select from document in the windows dom

// single element - only selects the first element
// console.log(document.getElementById('my-form'))
// console.log(document.querySelector('h1'))

// Multiple selector
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByTagName('li'))

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value)

}
