const burgerBtn = document.querySelector('.nav__burgerBtn')
const closeBtn = document.querySelector('.nav__close')
const mobileNav = document.querySelector('.nav__list-box')

const showNav = () => {
    mobileNav.classList.toggle('hide')
}

burgerBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)