document.addEventListener("DOMContentLoaded", function (e) {
    var listWrapper = document.querySelector(".list-wrapper");
    var isotope;
    if (listWrapper) {
      isotope = new Isotope(listWrapper, {
        itemSelector: ".card-item",
        layoutMode: "fitRows",
      });
    }
    var categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
      categoriesFilter.forEach(function (filter) {
        filter.addEventListener("click", function (event) {
          if (event.target.matches(".categories")) {
            var filterValue = event.target.getAttribute("data-filter");
            if (filterValue) {
              isotope.arrange({ filter: filterValue });
            }
          }
        });
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card.custom-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
  });
  
  // for nummber of products selected
  var value = 1,
    minValue = 0,
    maxValue = 30;
  
  let productMinusBtn = document.querySelectorAll(".product-quantity-minus");
  let productPlusBtn = document.querySelectorAll(".product-quantity-plus");
  productMinusBtn.forEach((element) => {
    element.onclick = () => {
      value = Number(element.parentElement.childNodes[3].value);
      if (value > minValue) {
        value = Number(element.parentElement.childNodes[3].value) - 1;
        element.parentElement.childNodes[3].value = value;
      }
    };
  });
  productPlusBtn.forEach((element) => {
    element.onclick = () => {
      if (value < maxValue) {
        value = Number(element.parentElement.childNodes[3].value) + 1;
        element.parentElement.childNodes[3].value = value;
      }
    };
  });
  