const burgerMenu = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('close');
    mobileNav.classList.toggle('active');
});
