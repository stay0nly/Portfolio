const menu = document.getElementById('menu');
const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// Open menu + Close menu

function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
}

function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

// Modals

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
    const menus = document.querySelectorAll('.menu.active');
    menus.forEach(menu => {
        closeMenu(menu);
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


 


// Form sending




    // Test email function
    function emailTest(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
