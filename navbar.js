document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;

            if(scrollY === 0) {
                navbar.classList.add('bg-opacity-25')
            }else{
                navbar.classList.remove('bg-opacity-25');
            }

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