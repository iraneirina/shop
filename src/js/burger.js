'use strict';
const openMenuBtn = document.querySelector('.button-burger');
const mainMenuEl = document.querySelector('.main-menu');
const closeMenuEl = document.querySelector('.main-menu-close-btn');

openMenuBtn.addEventListener('click', function () {
    mainMenuEl.classList.toggle('hidden');
});

closeMenuEl.addEventListener('click', function () {
    mainMenuEl.classList.toggle('hidden');
});
