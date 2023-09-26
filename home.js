document.addEventListener("DOMContentLoaded", function () {

    //scroll button
    const scrollButton = document.querySelector('.scroll-button');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            window.scrollBy(0, window.innerHeight);
        })
    }

    //disappearing navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            if (scrollY !== 0) {
                scrollButton.classList.add('scroll-button-hidden');
            }else scrollButton.classList.remove('scroll-button-hidden');
            if (scrollY < lastScrollY) {
                navbar.classList.remove('scrolled-down');
                navbar.classList.add('scrolled-up');
            } else {
                navbar.classList.remove('scrolled-up');
                navbar.classList.add('scrolled-down');
            }
            lastScrollY = scrollY;
        });
    }

});