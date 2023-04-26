const myForm = document.querySelector('#form1');
const mySub = document.querySelector('#submit');
const nameInput = document.querySelector('#fname');
const emailInput = document.querySelector('#email');



myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        alert('Enter the values!');
    }
    else{
        localStorage.setItem('UserName', nameInput.value)
        localStorage.setItem('UserEmail', emailInput.value);
    }
}