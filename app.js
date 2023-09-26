const btnSmallMenu = document.querySelector('.button__hamburger')
const smallMenu = document.querySelector('.header__content--sm-menu')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')

btnSmallMenu.addEventListener('click', () => {
  smallMenu.style.display = 'inline-block'
  btnSmallMenu.classList.toggle('cross')
})

linksSmallMenu.forEach((link) => {
  link.addEventListener('click', () => {
    smallMenu.classList.toggle('active')
    btnSmallMenu.classList.toggle('cross')
  })
})
