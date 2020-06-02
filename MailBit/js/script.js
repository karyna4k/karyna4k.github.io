window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav'),
        menuItem = document.querySelectorAll('.nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    })


    // Modal

    let button = document.querySelector('.promo__button'),
        buttonLink = document.querySelector('.multimedia__more a'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.modal__close');

    button.addEventListener('click', function() {
        overlay.style.display = 'block';

    });

    buttonLink.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.style.display = 'block';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';

    });

})

$('input[name=tel]').mask("+1 (999) 999-99-99");