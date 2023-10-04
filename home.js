document.addEventListener("DOMContentLoaded", () => {


    const strangerContainter = document.getElementById('strangerContainter');
    const strangerClosed = document.getElementById('strangerClosed');
    const strangerOpen = document.getElementById('strangerOpen');

    if (strangerContainter && strangerClosed && strangerOpen) {
        let open = false;
        strangerContainter.addEventListener('click', () => {
            open = !open;
            if (open) {
                strangerClosed.classList.add('opacity-0', 'z-n1');
                strangerOpen.classList.remove('opacity-0', 'z-n1');
            } else {
                strangerClosed.classList.remove('opacity-0', 'z-n1');
                strangerOpen.classList.add('opacity-0', 'z-n1');
            }
        })
    }

});