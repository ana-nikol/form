const name = document.querySelector('#user')  
const input = document.querySelector('#email'); 
const password  = document.querySelector('#password')
const error = document.querySelector('.error')
const message = document.querySelector('.message')

input.onblur = () =>  {  
    if(!input.value.includes ('@')) { 
        input.classList.add('invalid') 
        error.innerHTML = "please eneter corret email"
    }
}

password.onblur = function () { 
    if (password.value.length < 8 || password.value.length > 20 )  { 
       message.innerHTML = 'please fill the fields!';
        return false; 
     } 
}

input.onfocus = () => { 
    input.classList.remove('invalid')
    error.innerHTML = ""; 

} 

password.onfocus = () => {  
    message.innerHTML = ""; 
}