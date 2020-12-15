"use strict";
const hamburgerMenu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-list');
const navbar = document.querySelector(".nav-section");
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navbar.classList.toggle("open");
});
