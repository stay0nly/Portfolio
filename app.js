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
const alertSuccess = document.getElementById('alert-success');
const alertError = document.getElementById('alert-error');
const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    
    if (error === 0) {
        form.reset();
        alertSuccess.classList.add('active');
        setTimeout(function(){alertSuccess.classList.remove('active');}, 3000);        
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if(response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();            
            alertSuccess.classList.add('active');
            setTimeout(function(){alertSuccess.classList.remove('active');}, 3000);                        
        } else {
            alert("Error");            
            alertError.classList.add('active');
            setTimeout(function(){alertError.classList.remove('active');}, 3000);
        }
    } else {
        alert("Fill all the fields.");
        alertError.classList.add('active');
        setTimeout(function(){alertError.classList.remove('active');}, 3000);
    }
}

function formValidate(form) {
    let error = 0;
    let fromReq = document.querySelectorAll('._req');

    for (let index = 0; index < fromReq.length; index++) {
        const input = fromReq[index];
        fromRemoveError(input);
        
        if(input.classList.contains('._email')) {
            if(emailTest(input)) {
                fromAddError(input);
                error++;
            }
        } else {
            if (input.value === '') {
                fromAddError(input);
                error++;
            }
        }
    }
    return error;
}

function fromAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function fromRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

// Test email function
function emailTest(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


    
