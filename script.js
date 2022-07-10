console.log('test');

const inputs = document.querySelectorAll('input')
const errorMsg = document.querySelector('#errorMessage')

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if(!input.checkValidity()) {
            errorMsg.textContent = input.validationMessage;
        } else {
            errorMsg.textContent = ''
        }
    })
})