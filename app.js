const btnSmallMenu = document.querySelector('.navbar-toggler');
const smallMenu = document.querySelector('.header__content--sm-menu');
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu');
const body = document.querySelector('body');

//Voir quel est le thème de la machine
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
  body.setAttribute('data-theme', 'dark');
else body.removeAttribute('data-theme');


//toggle du button menu Mobile
function actionPressSmallMenu() {
  smallMenu.classList.toggle('active')
  btnSmallMenu.classList.toggle('cross')
}

btnSmallMenu.addEventListener('click', actionPressSmallMenu);
linksSmallMenu.forEach(link => link.addEventListener('click', actionPressSmallMenu));