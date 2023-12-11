const wrapper = document.querySelector('.wrapper')
const verificationContainer = document.querySelector('.verification-container')
const verifyInput = document.querySelector('.verify-input')
const current = "media"
const submit = document.querySelector('.submit')

let toast = document.querySelector('.toast')
let errorMessage = document.querySelector('.error-message')

window.onload = console.log('loaded')

hasVerified = sessionStorage.getItem('hasVerified')

if(hasVerified){
    verificationContainer.setAttribute('hidden', '')
    wrapper.removeAttribute('hidden')
} else{
    submit.addEventListener('click', function(){
        if(verifyInput.value === current){
            document.startViewTransition(() => {
                verificationContainer.setAttribute('hidden', '')
                wrapper.removeAttribute('hidden')
                sessionStorage.setItem('hasVerified', 'true')
            })
    
        } else{        
            document.startViewTransition(() => {
                errorMessage.textContent = "Entered pin is incorrect"
                toast.classList.add('two-columns')
                toast.classList.remove('hidden')
                toast.removeAttribute('hidden')
            })
            
            setTimeout(() => {
                document.startViewTransition(() => {
                    toast.classList.remove('two-columns')
                    toast.classList.add('hidden')
                    toast.setAttribute('hidden')
                })
            }, 5000);
        }
    })
}






