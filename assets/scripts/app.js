"use strict";
{
    (function () {
        const get = (selector) => document.querySelector(selector);
        const hamburger_menu = get('.menu');
        const navigation = get('.main-nav');

        hamburger_menu.addEventListener('click', toggleNavigation);
        document.addEventListener('scroll', () => {
            const header = get(".header-wrapper");
            if (window.scrollY > 0) {
                header.classList.remove('lg:py-8');
            } else {
                header.classList.add('lg:py-8');
            }
        });

        function toggleNavigation(e) {
            e.stopImmediatePropagation();
            navigation.classList.toggle('hidden');
            navigation.classList.toggle('mobile_nav');
        }
    }());
}