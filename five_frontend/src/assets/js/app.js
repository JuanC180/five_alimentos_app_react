const desplegarMenu = document.querySelector('#nav__desplegar__menu')
const agregarClase = document.querySelector(".nav__items--visible")

desplegarMenu.addEventListener('click', ()=>{
    agregarClase.classList.toggle('nav__items--visible')
})