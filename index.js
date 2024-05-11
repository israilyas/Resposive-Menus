const mob_nav = document.querySelector('.mobile-nav-btn')

const nav_header = document.querySelector('.header')

const toggleNavbar = ()=>{
    nav_header.classList.toggle('active')
}

mob_nav.addEventListener('click',()=> toggleNavbar())
