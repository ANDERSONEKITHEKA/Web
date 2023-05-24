const formm = document.querySelector('.formm');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{ formm.classList.add('active'); });
loginLink.addEventListener('click', ()=>{ formm.classList.remove('active'); });
btnpopup.addEventListener('click', ()=>{ formm.classList.add('active-popup'); });
iconClose.addEventListener('click', ()=>{ formm.classList.remove('active-popup'); });