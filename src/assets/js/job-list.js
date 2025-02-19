(function () {
    'use strict'

    let checkAll = document.querySelector('.check-all');
    checkAll.addEventListener('click', checkAllFn)

    function checkAllFn() {
        if (checkAll.checked) {
            document.querySelectorAll('.joblist-checkbox input').forEach(function (e) {
                e.closest('.joblist-list').classList.add('selected');
                e.checked = true;
            });
        }
        else {
            document.querySelectorAll('.joblist-checkbox input').forEach(function (e) {
                e.closest('.joblist-list').classList.remove('selected');
                e.checked = false;
            });
        }
    }

    //delete Btn
    let joblistbtn = document.querySelectorAll(".joblist-btn");

    joblistbtn.forEach((eleBtn) => {
        eleBtn.onclick = () => {
            let joblist = eleBtn.closest(".joblist-list")
            joblist.remove();
        }
    })

})();