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

    const strangerContainter = document.getElementById('strangerContainter');
    const strangerClosed = document.getElementById('strangerClosed');
    const strangerOpen = document.getElementById('strangerOpen');

    if(strangerContainter && strangerClosed && strangerOpen){
        let open = false;
        strangerContainter.addEventListener('click', () => {
            open = !open;
            if(open){
                strangerClosed.classList.add('opacity-0', 'z-n1');
                strangerOpen.classList.remove('opacity-0', 'z-n1');
            }else{
                strangerClosed.classList.remove('opacity-0', 'z-n1');
                strangerOpen.classList.add('opacity-0', 'z-n1');
            }
        })
    }

});