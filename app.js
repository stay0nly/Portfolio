const social = document.getElementById('social');
const intro = document.getElementById('intro');
const logos = document.getElementById('logos');
const menu = document.getElementById('menu');
const closed = document.getElementById('close');
const preview1 = document.getElementById('preview1');
const preview2 = document.getElementById('preview2');
const preview3 = document.getElementById('preview3');
const preview4 = document.getElementById('preview4');


let toggleNavStatus = false;
let previewOpenStatus = false;

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
<<<<<<< HEAD

=======
        
>>>>>>> 191b67080d086124c57f9678d9ddd9e5afcb0c76
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
<<<<<<< HEAD

=======
    
>>>>>>> 191b67080d086124c57f9678d9ddd9e5afcb0c76
        toggleNavStatus = false;
    } else {
        console.log("False");
    }
}
<<<<<<< HEAD
=======

function openPreview1() {
    if (previewOpenStatus === false) {
        preview1.classList.toggle('active');
        toggleNavStatus = true;
    }
}
>>>>>>> 191b67080d086124c57f9678d9ddd9e5afcb0c76
