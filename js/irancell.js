const _body = document.querySelector('body')
const _toggle = document.querySelector('.toggel')
const section = document.querySelectorAll('.mood')

let flagToggle = new Date().getHours() >= 20 ? true : false
checkToggle()
// console.log(flagToggle);

_toggle.addEventListener('click', checkToggle)

function checkToggle(){
    if (flagToggle) {
        _toggle.children[0].style.color = 'blue'
        _body.classList.add('dark')
        section.forEach((item) => {
            item.classList.add('txtDark')
        })
    } else {
        _toggle.children[0].style.color = 'black'
        _body.classList.remove('dark')
        section.forEach((item) => {
            item.classList.remove('txtDark')
        })
    }
    flagToggle = !flagToggle
}
///////////////////////////////

const span = document.querySelectorAll('.lab')
function vahid(e) {
    // e.preventDefault()
    let flag = 0
    const email = document.forms['myForm']['email'].value
    const pass = document.forms['myForm']['pass'].value
    if (
        email === null ||
        email == '' ||
        email.search(/<script/) >= 0 ||
        email.search(/&lt;script/) >= 0 ||
        email.search(/script/) >= 0
    ) {
        span[0].style.display = 'block'
        span[0].innerHTML = 'فرمت وارد شده صحیح نمی باشد '
        flag++
    } else {
        if (
            email.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) >= 0
        ) {
            span[0].style.display = 'none'

        } else {
            span[0].style.display = 'block'
            span[0].innerHTML = 'فلید مورد نظر را با دقت پر کنید ' 
            flag++
        }
    }
    if(
        pass === null ||
        pass == '' ||
        pass.search(/<script/) >= 0 ||
        pass.search(/&lt;script/) >= 0 ||
        pass.search(/script/) >= 0
    ){
        span[1].style.display = 'block'
        span[1].innerHTML = 'فرمت وارد شده صحیح نمی باشد '
        flag++
    }else{
        if(
            (pass.length >= 8) &&
            (pass.search(/[a-z]/) >= 0) &&
            (pass.search(/[A-Z]/) >= 0) &&
            (pass.search(/[0-9]/) >= 0) &&
            (pass.search(/[~!@#$%^&*()_+]/)) >= 0
        ){
            span[1].style.display = 'none'
        }else{
            span[1].style.display = 'block'
            span[1].innerHTML = '  پسورد باید شامل حروف بزرگ و کوچک لاتین،یک کارکتر و عدد باشد' 
            flag++
        }
    }
   
    console.log(flag);
    
    // flag!=0&&e.preventDefault()
    if(flag > 0){
        e.preventDefault()
    }
}

document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden')
})
    