const btnSmallMenu = document.querySelector('.button__hamburger')
console.log('test1')
const smallMenu = document.querySelector('.header__content--sm-menu')
console.log('test2')
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu')
console.log('test3')

btnSmallMenu.addEventListener('click', () => {
  console.log('test3')
  smallMenu.classList.toggle('active')
  btnSmallMenu.classList.toggle('cross')
})

linksSmallMenu.forEach((link) => {
  console.log('test4')
  link.addEventListener('click', () => {
    smallMenu.classList.toggle('active')
    btnSmallMenu.classList.toggle('cross')
  })
})
