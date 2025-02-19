(function () {
    "use strict";

    /* Auto Complete Basic */
    const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        placeHolder: "Search for Food & Drinks Combo",
        data: {
            src: ['Pizza, Soda',
                'Burger, Milkshake',
                'Tacos, Margarita',
                'Pasta, Red Wine',
                'Sushi, Green Tea',
                'Steak, Whiskey',
                'Salad, Sparkling Water',
                'Chicken Wings, Beer',
                'Fish and Chips, Lemonade',
                'Burrito, Iced Tea'],
            cache: true,
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });
    /* Auto Complete Basic */

    /* Auto Complete Advanced */
    const autoCompleteJS1 = new autoComplete({
        selector: "#autoComplete-color",
        placeHolder: "Search For Advanced Colors...",
        data: {
            src: ['Lavender',
                'Turquoise',
                'Coral',
                'Sapphire',
                'Emerald',
                'Rose Gold',
                'Azure',
                'Goldenrod',
                'Amethyst',
                'Crimson',
                'Periwinkle',
                'Mint Green',
                'Tangerine',
                'Charcoal',
                'Champagne',
                'Aqua',
                'Ruby',
                'Topaz',
                'Cerulean',
                'Pearl',],
            cache: true,
        },
        resultsList: {
            element: (list, data) => {
                const info = document.createElement("p");
                if (data.results.length > 0) {
                    info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
                } else {
                    info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
                }
                list.prepend(info);
            },
            noResults: true,
            maxResults: 15,
            tabSelect: true
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS1.input.value = selection;
                }
            }
        }
    });
    /* Auto Complete Advanced */

    /* intl-tel-input Basic */
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js"
    });
    /* intl-tel-input Basic */

    /* intl-tel-input with Validation */
    const input1 = document.querySelector("#phone-validation");
    const button = document.querySelector("#btn");
    const errorMsg = document.querySelector("#error-msg");
    const validMsg = document.querySelector("#valid-msg");

    // here, the index maps to the error code returned from getValidationError - see readme
    const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    // initialise plugin
    const iti = window.intlTelInput(input1, {
        initialCountry: "us",
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js"
    });

    const reset = () => {
        input1.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
    };

    const showError = (msg) => {
        input1.classList.add("error");
        errorMsg.innerHTML = msg;
        errorMsg.classList.remove("hide");
    };

    // on click button: validate
    button.addEventListener('click', () => {
        reset();
        if (!input1.value.trim()) {
            showError("Required");
        } else if (iti.isValidNumberPrecise()) {
            validMsg.classList.remove("hide");
        } else {
            const errorCode = iti.getValidationError();
            const msg = errorMap[errorCode] || "Invalid number";
            showError(msg);
        }
    });

    // on keyup / change flag: reset
    input1.addEventListener('change', reset);
    input1.addEventListener('keyup', reset);
    /* intl-tel-input with Validation */

    /* intl-tel-input with Only Countries */
    const input3 = document.querySelector("#phone-only-countries");
    window.intlTelInput(input3, {
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js" // just for formatting/placeholders etc
    });
    /* intl-tel-input with Only Countries */

    /* intl-tel-input with Hidden Input */
    const input4 = document.querySelector("#phone-hidden-input");
    const form = document.querySelector("#form");
    const message = document.querySelector("#message");

    const iti1 = window.intlTelInput(input4, {
        initialCountry: "us",
        hiddenInput: () => "full_phone",
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js" // just for formatting/placeholders etc
    });

    form.onsubmit = () => {
        if (!iti1.isValidNumber()) {
            message.innerHTML = "Invalid number. Please try again.";
            return false;
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const fullPhone = urlParams.get('full_phone')
    if (fullPhone) {
        message.innerHTML = `Submitted hidden input value: ${fullPhone}`;
    }
    /* intl-tel-input with Hidden Input */

    /* intl-tel-input with Existing Number */
    const input5 = document.querySelector("#phone-existing-number");
    window.intlTelInput(input5, {
        initialCountry: "us",
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js" // just for formatting/placeholders etc
    });
    /* intl-tel-input with Existing Number */

    /* intl-tel-input with Selected Dial Code */
    const input6 = document.querySelector("#phone-show-selected-dial-code");
    window.intlTelInput(input6, {
        initialCountry: "us",
        showSelectedDialCode: true,
        utilsScript: "../assets/libs/intl-tel-input/build/js/utils.js" // just for formatting/placeholders etc
    });
    /* intl-tel-input with Selected Dial Code */

    /* Basic DualList */
    let dlb1 = new DualListbox('.select1');
    /* Basic DualList */

    /* DualLIst With Add Options & eventListeners */
    let dlb2 = new DualListbox('.select2', {
        availableTitle: 'Available numbers',
        selectedTitle: 'Selected numbers',
        addButtonText: '>',
        removeButtonText: '<',
        addAllButtonText: '>>',
        removeAllButtonText: '<<',
        searchPlaceholder: 'search numbers'
    });
    dlb2.addEventListener('added', function (event) {
        console.log(event);
    });
    dlb2.addEventListener('removed', function (event) {
        console.log(event);
    });
    /* DualLIst With Add Options & eventListeners */

    /* DualLIst With Remove All Buttons From Rendering */
    let dlb3 = new DualListbox('.select3', {
        showAddButton: false,
        showAddAllButton: false,
        showRemoveButton: false,
        showRemoveAllButton: false
    });
    /* DualLIst With Remove All Buttons From Rendering */

})();