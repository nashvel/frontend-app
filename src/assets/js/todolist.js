(function () {
    "use strict";

    /* AssignedDate Picker */
    flatpickr("#addignedDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* TargetDate Picker */
    flatpickr("#targetDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* multi select with remove button */
    const multipleCancelButton = new Choices(
        '#choices-multiple-remove-button',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    /* draggable js */
    dragula([document.getElementById('todo-drag')],{
        moves: function (el, container, handle) {
            return handle.classList.contains('todo-handle');
          }
    });

    //check-all
    
        let checkAll = document.querySelector('.check-all');
        checkAll.addEventListener('click', checkAllFn)
    
        function checkAllFn() {
            if (checkAll.checked) {
                document.querySelectorAll('.task-checkbox input').forEach(function (e) {
                    e.closest('.todo-box').classList.add('selected');
                    e.checked = true;
                });
            }
            else {
                document.querySelectorAll('.task-checkbox input').forEach(function (e) {
                    e.closest('.todo-box').classList.remove('selected');
                    e.checked = false;
                });
            }
        }
    
        //delete Btn
        let productbtn = document.querySelectorAll(".todo-btn");
    
        productbtn.forEach((eleBtn) => {
            eleBtn.onclick = () => {
                let product = eleBtn.closest(".todo-box")
                product.remove();
            }
        })
    

})();