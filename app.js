const btnSmallMenu = document.querySelector('.navbar-toggler');
const smallMenu = document.querySelector('.header__content--sm-menu');
const linksSmallMenu = document.querySelectorAll('.header__list-link--sm-menu');
const body = document.querySelector('body');
const form = document.querySelector('#my-form');

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

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector("#my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Merci pour votre message! Je vais vous répondre très prochainement.";
      form.reset()
    } else {
      status.innerHTML = "Oops! Il s'est passé un problème dans l'envoie de votre message"
    }
  }).catch(error => {
    status.innerHTML = "Oops! Il s'est passé un problème dans l'envoie de votre message"
  });
}
form.addEventListener("submit", handleSubmit)