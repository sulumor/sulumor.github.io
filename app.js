const btnSmallMenu = document.querySelector('.navbar-toggler')
const smallMenu = document.querySelector('.header__content--sm-menu')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')
const home__cards = document.querySelectorAll('.home__card')
const themeChanger = document.querySelector('.header__theme-switch')

themeChanger.addEventListener('click', () => {
  const body = document.querySelector('body')
  const image = document.querySelector('#theme-switch-image')
  if (!body.hasAttribute('data-theme')) {
    body.setAttribute('data-theme', 'dark')
    image.setAttribute('src', './pictures/icon-light.png')
  } else {
    body.removeAttribute('data-theme')
    image.setAttribute('src', './pictures/icon-dark.png')
  }
})

btnSmallMenu.addEventListener('click', actionPressSmallMenu)

linksSmallMenu.forEach((link) => {
  link.addEventListener('click', actionPressSmallMenu)
})

function actionPressSmallMenu() {
  smallMenu.classList.toggle('active')
  btnSmallMenu.classList.toggle('cross')
}
