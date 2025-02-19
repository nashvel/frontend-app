(function () {
    "use strict";

    // Animated modals 
        /* showing modal effects */
        document.querySelectorAll(".modal-effect").forEach(e => {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                let effect = this.getAttribute('data-bs-effect');
                document.querySelector("#modaldemo8").classList.add(effect);
            });
        })
    // Animated modals 
    
})();