const social = document.getElementById('social');
const intro = document.getElementById('intro');
const logos = document.getElementById('logos');
const menu = document.getElementById('menu');
const closed = document.getElementById('close');
const toggleMenu = document.getElementById('toggle-menu');

const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        console.log("clicked");
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');

};

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');

};

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

function closeMenu(event) {
    if (toggleNavStatus === true) {
        social.classList.remove('active');
        intro.classList.remove('active');
        logos.classList.remove('active');
        toggleMenu.classList.remove('active');
        menu.classList.remove('active');
        
        const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e){
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        };
        
        toggleNavStatus = false;
    } else {
        console.log("False");
    }
}

