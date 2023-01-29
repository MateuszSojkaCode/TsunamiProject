const burgerBtn = document.querySelector('.nav__burgerBtn')
const closeBtn = document.querySelector('.nav__close')
const mobileNav = document.querySelector('.nav__list-box')
const year = document.querySelector('.year')
const toggles = document.querySelectorAll('.faq__toggle')

const showNav = () => {
    mobileNav.classList.toggle('hide')
}

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('faq__active')
    })
})

year.innerHTML = new Date().getFullYear();

burgerBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)