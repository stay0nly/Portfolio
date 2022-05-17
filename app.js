const social = document.getElementById('social');
const intro = document.getElementById('intro');
const logos = document.getElementById('logos');
const menu = document.getElementById('menu');
const closed = document.getElementById('close');
const toggleMenu = document.getElementById('toggle-menu');


let toggleNavStatus = false;

function toggleNav() {
    

    if (toggleNavStatus === false) {
        social.classList.toggle('active');
        intro.classList.toggle('active');
        logos.classList.toggle('active');
        toggleMenu.classList.toggle('active');
        menu.classList.toggle('active');
        
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        social.classList.remove('active');
        intro.classList.remove('active');
        logos.classList.remove('active');
        toggleMenu.classList.remove('active');
        menu.classList.remove('active');
        
        toggleNavStatus = false;
    }
}