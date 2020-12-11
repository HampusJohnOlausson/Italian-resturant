"use strict";
const hamburgerMenu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-list');
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
