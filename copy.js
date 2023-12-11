const testList = document.querySelector('.testList')
const copy = testList.querySelectorAll('.copy')
const para = document.querySelectorAll('.test')

copy.forEach((button) => {
    button.addEventListener('click', function(){
       let copiedText = button.parentElement.childNodes[1].textContent
       navigator.clipboard.writeText(copiedText);
    })
})