(function () {
    "use strict";
  
    //To choose date
    flatpickr(".flatpickr-input", {});
  
    //Custom Validation
    const buttonSubmit = document.getElementsByClassName("ti-custom-validate-btn");
    const form = document.querySelector(".ti-custom-validation");
  
    /*input values*/
    const firstNameInput        = document.querySelector('.firstName ');
    const lastNameInput         = document.querySelector('.lastName');
    const phoneInput            = document.querySelector('.phonenumber');
    const emailInput            = document.querySelector('.email-address');
    const passwordInput         = document.querySelector('.password');
    const confirmPasswordInput  = document.querySelector('.confirmPassword');
    const dateInput             = document.querySelector('.birthdate');
    const addressInput          = document.querySelector('.postalAddress');
    const cityInput             = document.querySelector('.cityName');
    const stateInput            = document.querySelector('.stateName');
    const pincodeInput          = document.querySelector('.pincode');
    const checkboxInput         = document.querySelector('.validationCheckbox');
  
  /*error values*/
    const firstNameError        = document.getElementsByClassName("firstNameError ")[0];
    const lastNameError         = document.getElementsByClassName("lastNameError")[0];
    const phoneError            = document.getElementsByClassName("phoneError")[0];
    const emailError            = document.getElementsByClassName("emailError")[0];
    const passwordError         = document.getElementsByClassName("passwordError")[0];
    const confirmPasswordError  = document.getElementsByClassName("confirmPasswordError")[0];
    const dobError              = document.getElementsByClassName("dobError")[0];
    const addressError          = document.getElementsByClassName("addressError")[0];
    const cityError             = document.getElementsByClassName("cityError")[0];
    const stateError            = document.getElementsByClassName("stateError")[0];
    const pincodeError          = document.getElementsByClassName("pincodeError")[0];
    const checkboxError         = document.getElementsByClassName("checkboxError")[0];
  
    //define and declare and empty errors object
    let error = {};
  
    /* This is a JavaScript event listener. It is a way to listen for an event. In this case, it is
    listening for the form to be submitted. */
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      //function to validate the form fields before submitting
      checkEmpty();
    });
  
    // validate empty fields and set error object
    function checkEmpty() {
      //loop and remove all key and value fields in the errors object
      for (let key in error) {
        delete error[key];
      }
      //set all in firstname, lastname, email spans to display none
      firstNameError.style.display = "none";
      lastNameError.style.display = "none";
      emailError.style.display = "none";
      phoneError.style.display="none";
      passwordError.style.display="none";
      confirmPasswordError.style.display="none";
      dobError.style.display="none" ;
      addressError.style.display="none";
      cityError.style.display="none";
      stateError.style.display="none";
      pincodeError.style.display="none";
      checkboxError.style.display="none";
  
      //remove all the error class "border-red-500 classes"
      firstNameInput?.classList.remove("!border-red");
      lastNameInput?.classList.remove("!border-red");
      phoneInput?.classList.remove("!border-red");
      emailInput?.classList.remove("!border-red");
      passwordInput?.classList.remove("!border-red");
      confirmPasswordInput?.classList.remove("!border-red");
      dateInput?.classList.remove("!border-red");
      addressInput?.classList.remove("!border-red");
      cityInput?.classList.remove("!border-red");
      stateInput?.classList.remove("!border-red");
      pincodeInput?.classList.remove("!border-red");
      checkboxInput?.classList.remove("!border-red");
      
  
      //remove white spaces from every input Field
      const firstNameValue        = firstNameInput.value.trim();
      const lastNameValue         = lastNameInput.value.trim();;
      const phoneValue            = phoneInput.value.trim();
      const emailValue            = emailInput.value.trim();
      const passwordValue         = passwordInput.value.trim();
      const confirmPasswordValue  = confirmPasswordInput.value.trim();
      const dateValue             = dateInput.value.trim();
      const addressValue          = addressInput.value.trim();
      const cityValue             = cityInput.value.trim();
      const stateValue            = stateInput.value.trim();
      const pincodeValue          = pincodeInput.value.trim();
      const checkboxValue         = checkboxInput.value.trim();
  
      //check if all inputs are empty then add new new error keys to the defined error object
      if (firstNameValue === "") {
        error.firstName = "First Name is required";
      }
      if (lastNameValue === "") {
        error.lastName = "Last Name is required";
      }
      
      if (phoneValue === "") {
        error.phone = "Phone Number is required";
      }
      if (emailValue === "") {
        error.email = "Email is required";
      }
      if (passwordValue === "") {
        error.password = "password  is required";
      }
      if (confirmPasswordValue === "") {
        error.confirmPassword = "password shoud confirm here";
      }
      if (dateValue === "") {
        error.date = "Date is requried";
      }
      if (addressValue === "") {
        error.address = "Address is requried";
      }
      if (cityValue === "") {
        error.city = "City is requried";
      }
      if (stateValue === "") {
        error.state = "State is requried";
      }
      if (pincodeValue === "") {
        error.pincode = "Pincode is requried";
      }
      if (checkboxValue === "") {
        error.checkbox = "You must agree before submitting";
      }
  
      //validate the inputs firstName and lastName
      if (firstNameValue !== "") {
        if (!firstNameValue.match(/^[a-zA-Z0-9]+$/)) {
          error.firstName = "First Name must be letters only";
        }
      }
      if (lastNameValue !== "") {
        if (!lastNameValue.match(/^[a-zA-Z0-9]+$/)) {
          error.lastName = "Last Name must be letters only";
        }
      }
      if (phoneValue !== "") {
        if (!phoneValue.match(/^[0-9]+$/)) {
          error.phone = "phone number must be numbers only";
        }
      }
      if (emailValue !== "") {
        //validating an email
        if (!emailValue.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
          error.email = "Email must be a valid email";
        }
      }
      if (passwordValue !== "") {
        if (!passwordValue.match(/^[a-zA-Z0-9]+$/)) {
          error.password = "password  is required";
        }
      }
      if (confirmPasswordValue !== passwordValue) {
          error.confirmPassword = "password Should need to be same";
      }
      if (dateValue !== "") {
        if (!dateValue.match(/^[0-9]+$/)) {
          error.date = "Date must be numbers only";
        }
      }
      if (addressValue !== "") {
        if (!addressValue.match(/^[a-zA-Z0-9]+$/)) {
          error.address  = "address should be letters only";
        }
      }
      if (cityValue !== "") {
        if (!cityValue.match(/^[a-zA-Z0-9]+$/)) {
          error.city  = "city should be letters only";
        }
      }
      if (stateValue !== "") {
        if (!stateValue.match(/^[a-zA-Z0-9]+$/)) {
          error.state  = "state should be letters only";
        }
      }
      if (pincodeValue === "") {
        if (!pincodeValue.match(/^[0-9]+$/)) {
          error.pincode = "Pincode must be numbers only";
        }
      }
      
  
      //if we have error add the error to the error message
      if (Object.keys(error).length > 0) {
        displayError();
      } else {
        //submit the form with a delay of 2 seconds
        //change the button innerText to submitting and add no-cursor class and disabled attribute to it
        buttonSubmit.value = "Submitting...";
        buttonSubmit.setAttribute("disabled", "disabled");
  
        //set a delay of 2 seconds since we dont have an api endpoint to send the data to just mimic the process
        new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(submitForm());
          }, 2000);
        });
      }
    }
  
    //display errors respectivey to the span html classes
    function displayError() {
        //set all errors to their respectivey and also changing hidden 
      // error containers to be a block.
        if(error.firstName) {
        firstNameInput.classList.add("!border-red");
        firstNameError.style.display = "block";
        firstNameError.innerHTML = error.firstName;
      }
      if (error.lastName) {
        lastNameInput.classList.add("!border-red");
        lastNameError.style.display = "block";
        lastNameError.innerHTML = error.lastName;
      }
      if (error.email) {
        //loop over the classes and add other classes
        emailInput.classList.add("!border-red");
        emailError.style.display = "block";
        emailError.innerHTML = error.email;
      }
      if (error.phone) {
        //loop over the classes and add other classes
        phoneInput.classList.add("!border-red");
        phoneError.style.display = "block";
        phoneError.innerHTML = error.phone;
      }
      if (error.password) {
        //loop over the classes and add other classes
        passwordInput.classList.add("!border-red");
        passwordError.style.display = "block";
        passwordError.innerHTML = error.password;
      }
      if (error.confirmPassword) {
        //loop over the classes and add other classes
        confirmPasswordInput.classList.add("!border-red");
        confirmPasswordError.style.display = "block";
        confirmPasswordError.innerHTML = error.confirmPassword;
      }
      if (error.date) {
        //loop over the classes and add other classes
        dateInput.classList.add("!border-red");
        dobError.style.display = "block";
        dobError.innerHTML = error.date;
      }
      if (error.address) {
        //loop over the classes and add other classes
        addressInput.classList.add("!border-red");
        addressError.style.display = "block";
        addressError.innerHTML = error.address;
      }
      if (error.city) {
        //loop over the classes and add other classes
        cityInput.classList.add("!border-red");
        cityError.style.display = "block";
        cityError.innerHTML = error.city;
      }
      if (error.state) {
        //loop over the classes and add other classes
        stateInput.classList.add("!border-red");
        stateError.style.display = "block";
        stateError.innerHTML = error.state;
      }
      if (error.pincode) {
        //loop over the classes and add other classes
        pincodeInput.classList.add("!border-red");
        pincodeError.style.display = "block";
        pincodeError.innerHTML = error.pincode;
      }
    }
  
    //submitting the form
    function submitForm() {
      //TODO: Add an API ENDPOINT to send the data.
  
  
      //after 2 seconds is over change the input type button innerText and remove the disabled attribute.
      buttonSubmit.value = "Login Now";
      buttonSubmit.removeAttribute("disabled");
  
      //reset the form and clear all fields
      form.reset();
    }
  
  })();