
function hamburgerAnimation(){

    const hamburgerMenu = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-section');
    const navLinks = document.querySelector('.nav-list');
    
    hamburgerMenu.addEventListener('click', () => {
    
        navBar.classList.toggle('open');
        navLinks.classList.toggle('open');
    
    });
    
    }