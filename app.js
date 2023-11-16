const btnSmallMenu = document.querySelector('.navbar-toggler')
const smallMenu = document.querySelector('.header__content--sm-menu')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')
const body = document.querySelector('body')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.setAttribute('data-theme', 'dark')
} else {
  body.removeAttribute('data-theme')
}

btnSmallMenu.addEventListener('click', actionPressSmallMenu)

linksSmallMenu.forEach(link => link.addEventListener('click', actionPressSmallMenu))

function actionPressSmallMenu() {
  smallMenu.classList.toggle('active')
  btnSmallMenu.classList.toggle('cross')
}
