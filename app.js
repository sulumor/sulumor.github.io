const btnSmallMenu = document.querySelector('.navbar-toggler')
const smallMenu = document.querySelector('.header__content--sm-menu')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')
const home__cards = document.querySelectorAll('.home__card')

btnSmallMenu.addEventListener('click', () => {
  smallMenu.classList.toggle('active')
  btnSmallMenu.classList.toggle('cross')
})

linksSmallMenu.forEach((link) => {
  link.addEventListener('click', () => {
    smallMenu.classList.toggle('active')
    btnSmallMenu.classList.toggle('cross')
  })
})
