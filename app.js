const btnSmallMenu = document.querySelector('.header__btn-container')
const smallMenu = document.querySelector('.header__content--sm-menu')

btnSmallMenu.addEventListener('click', () => {
  smallMenu.classList.toggle('active')
})
