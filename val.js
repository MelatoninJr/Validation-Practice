const emailGrab = document.getElementById('Email')
const emailError = document.querySelector('#Email + span.error')
const zipGrab = document.getElementById('Zipcode')
const zipError = document.querySelector('#Zipcode + span.error')
const countryGrab = document.getElementById('Country')
const countryError = document.querySelector('#Country + span.error')
const grabButton = document.getElementById('button')
const grabFirstPass = document.getElementById('psw')
const grabSecondPass = document.getElementById('pswcomf')
const passError = document.querySelector('#pswcomf + span.error')
const grabForm = document.querySelector('.form')




emailGrab.addEventListener('input', function(e) {
    if(emailGrab.validity.valid) {
        emailError.textContent = ''
        emailError.className = 'error'
        } 
        else {
            showError()
        }
})



countryGrab.addEventListener('input', function(e){
    if(countryGrab.validity.tooShort) {
        showError()
    } else {
        countryError.textContent = ''
    }
})



zipGrab.addEventListener('input', function(e) {
    if(zipGrab.validity.patternMismatch) {
        showError()
    } else {
        zipError.textContent = ''
        zipError.className = 'error'
    }
})



grabSecondPass.addEventListener('input', function(e) {
    if(grabFirstPass.value !== grabSecondPass.value) {
        showError()
    } else {
        passError.textContent = ''
    }
})








grabButton.addEventListener('click', function(e) {

    if(emailGrab.validity) {
        emailError.textContent = 'You need to enter an e-mail address.'
    }

    if(zipGrab.validity) {
        zipError.textContent = 'Must enter standard zipformat'
    }

    if(countryGrab.validity) {
        countryError.textContent = 'Must be at least 4 characters.'
    } 
    
    if(grabFirstPass.validity) {
        passError.textContent = 'Passwords must match exactly!'
    }

})







function showError() {
    if(emailGrab.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.'
    } else if(emailGrab.validity.typeMismatch) {
        emailError.textContent = 'Entered Value needs to be an e-mail address'
    } if(zipGrab.validity.patternMismatch) {
        zipError.textContent = 'Must enter standard zipformat'
    } if(countryGrab.validity.tooShort) {
        countryError.textContent = 'Must be at least 4 characters.'
    } if(grabFirstPass.value !== grabSecondPass.value) {
        passError.textContent = 'Passwords must match exactly!'
    }
    
}



