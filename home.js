document.addEventListener("DOMContentLoaded", function () {

    const scrollButton = document.querySelector('.scroll-button');

    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            window.scrollBy(0, window.innerHeight);
        })
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            if (scrollY !== 0) {
                scrollButton.classList.add('scroll-button-hidden');
            }else scrollButton.classList.remove('scroll-button-hidden');
        });
    }

});