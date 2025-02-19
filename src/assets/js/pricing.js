(function () {
    "use strict";

    var checkbox = document.querySelectorAll(".switcher-pricing input[type='checkbox']")[0];
    var yearly1 = document.getElementById("yearly1");
    var monthly1 = document.getElementById("monthly1");

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            yearly1.classList.add("show");
            monthly1.classList.remove("show");
        } else {
            monthly1.classList.add("show");
            yearly1.classList.remove("show");
        }
    });

})();