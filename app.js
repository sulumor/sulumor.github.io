const btnSmallMenu = document.querySelector('.button__hamburger')
const smallMenu = document.querySelector('.header__content--sm-menu')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')

btnSmallMenu.addEventListener('click', () => {
  if (
    smallMenu.classList.contains('active') &&
    btnSmallMenu.classList.contains('cross')
  ) {
    smallMenu.classList.remove('active')
    btnSmallMenu.classList.remove('cross')
  } else {
    smallMenu.classList.add('active')
    btnSmallMenu.classList.add('cross')
  }
})

linksSmallMenu.forEach((link) => {
  link.addEventListener('click', () => {
    if (
      smallMenu.classList.contains('active') &&
      btnSmallMenu.classList.contains('cross')
    ) {
      smallMenu.classList.remove('active')
      btnSmallMenu.classList.remove('cross')
    } else {
      smallMenu.classList.add('active')
      btnSmallMenu.classList.add('cross')
    }
  })
})
