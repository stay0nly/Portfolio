const social = document.getElementById('social');
const intro = document.getElementById('intro');
const logos = document.getElementById('logos');
const menu = document.getElementById('menu');
const closed = document.getElementById('close');
const toggleMenu = document.getElementById('toggle-menu');


function toggle() {
    social.classList.toggle('active');
    intro.classList.toggle('active');
    logos.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');
}

function close() {
    menu.style.visibility = 'hidden'
}