
/* For Card Active */
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.box');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
});
/* For Card Active */

/* Isotope Layout Js */
// document.addEventListener("DOMContentLoaded", function (e) { 
    var listWrapper = document.querySelector(".list-wrapper");
    var isotope;
    console.log("listWrapper",listWrapper);
    if (listWrapper) {
        setTimeout(() => {
            isotope = new Isotope(listWrapper, {
                itemSelector: ".card-item",
                // layoutMode: 'fitRows',
            });
        }, 100);
    }
    var categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
        categoriesFilter.forEach(function (filter) {
            filter.addEventListener("click", function (event) {
                if (event.target.matches(".categories")) {
                    var filterValue = event.target.getAttribute("data-filter");
                    if (filterValue) {
                        isotope.arrange({ filter: filterValue});
                    }
                }
            });
        });
    }
// });
/* Isotope layout Js */

document.querySelector("#switcher-rtl").addEventListener("click",()=>{
    var listWrapper = document.querySelector(".list-wrapper");
    var isotope;
    console.log("listWrapper",listWrapper);
    if (listWrapper) {
        setTimeout(() => {
            isotope = new Isotope(listWrapper, {
                itemSelector: ".card-item",
                // layoutMode: 'fitRows',
            });
        }, 100);
    }
    var categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
        categoriesFilter.forEach(function (filter) {
            filter.addEventListener("click", function (event) {
                if (event.target.matches(".categories")) {
                    var filterValue = event.target.getAttribute("data-filter");
                    if (filterValue) {
                        isotope.arrange({ filter: filterValue,
                        originLeft: false, });
                    }
                }
            });
        });
    }
})

document.querySelector("#switcher-ltr").addEventListener("click",()=>{
    var listWrapper = document.querySelector(".list-wrapper");
    var isotope;
    console.log("listWrapper",listWrapper);
    if (listWrapper) {
        setTimeout(() => {
            isotope = new Isotope(listWrapper, {
                itemSelector: ".card-item",
                // layoutMode: 'fitRows',
            });
        }, 100);
    }
    var categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
        categoriesFilter.forEach(function (filter) {
            filter.addEventListener("click", function (event) {
                if (event.target.matches(".categories")) {
                    var filterValue = event.target.getAttribute("data-filter");
                    if (filterValue) {
                        isotope.arrange({ filter: filterValue,
                        originRight: false, });
                    }
                }
            });
        });
    }
})

document.querySelector("#reset-all").addEventListener("click",()=>{
    var listWrapper = document.querySelector(".list-wrapper");
    var isotope;
    console.log("listWrapper",listWrapper);
    if (listWrapper) {
        setTimeout(() => {
            isotope = new Isotope(listWrapper, {
                itemSelector: ".card-item",
                // layoutMode: 'fitRows',
            });
        }, 100);
    }
    var categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
        categoriesFilter.forEach(function (filter) {
            filter.addEventListener("click", function (event) {
                if (event.target.matches(".categories")) {
                    var filterValue = event.target.getAttribute("data-filter");
                    if (filterValue) {
                        isotope.arrange({ filter: filterValue,
                        originRight: false, });
                    }
                }
            });
        });
    }
})


document.querySelectorAll("#switcher-boxed , #switcher-full-width ,#switcher-default-width").forEach((element)=>{
    element.addEventListener("click",()=>{
        setTimeout(() => {
            new Isotope(document.querySelector(".list-wrapper"), {
                itemSelector: ".card-item",
            });
        }, 100);
    })
})



    // for nummber of products selected 
    var value = 1,
        minValue = 0,
        maxValue = 30;

    let productMinusBtn = document.querySelectorAll(".product-quantity-minus")
    let productPlusBtn = document.querySelectorAll(".product-quantity-plus")
    productMinusBtn.forEach((element) => {
        element.onclick = () => {
            value = Number(element.parentElement.childNodes[3].value)
            if (value > minValue) {
                value = Number(element.parentElement.childNodes[3].value) - 1;
                element.parentElement.childNodes[3].value = value;
            }
        }
    })
    productPlusBtn.forEach((element) => {
        element.onclick = () => {
            if (value < maxValue) {
                value = Number(element.parentElement.childNodes[3].value) + 1;
                element.parentElement.childNodes[3].value = value;
            }
        }
    })

