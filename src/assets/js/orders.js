(function () {
    "use strict"

    //delete Btn
    let orderbtn = document.querySelectorAll(".order-delete-btn");

    orderbtn.forEach((eleBtn) => {
        eleBtn.onclick = () => {
            let order = eleBtn.closest(".order-list")
            order.remove();
        }
    })
    
})();