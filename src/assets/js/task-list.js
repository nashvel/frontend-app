(function () {
    "use strict"

    let checkAll = document.querySelector('.check-all');
    checkAll.addEventListener('click', checkAllFn)

    function checkAllFn() {
        if (checkAll.checked) {
            document.querySelectorAll('.task-checkbox input').forEach(function (e) {
                e.closest('.task-list').classList.add('selected');
                e.checked = true;
            });
        }
        else {
            document.querySelectorAll('.task-checkbox input').forEach(function (e) {
                e.closest('.task-list').classList.remove('selected');
                e.checked = false;
            });
        }
    }

    //delete Btn
    let taskbtn = document.querySelectorAll(".task-delete-btn");

    taskbtn.forEach((eleBtn) => {
        eleBtn.onclick = () => {
            let task = eleBtn.closest(".task-list")
            task.remove();
        }
    })

    /* multi select with remove button */
    const multipleCancelButton = new Choices(
        '#choices-multiple-remove-button1',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    /* AssignedDate Picker */
    flatpickr("#assignedDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* DueDate Picker */
    flatpickr("#dueDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });
    
})();
