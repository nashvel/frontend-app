/* Image upload */
let loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("profile-img");
      if (event.target.files[0].type.match("image.*")) {
        output.src = reader.result;
      } else {
        event.target.value = "";
        alert("please select a valid image");
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  
  // for profile photo update
  let ProfileChange = document.querySelector("#profile-change");
  ProfileChange.addEventListener("change", loadFile);
  
  /* For Delete Contact */
  let invoicebtn = document.querySelectorAll(".contact-delete");
  invoicebtn.forEach((eleBtn) => {
    eleBtn.onclick = () => {
      let invoice = eleBtn.closest(".crm-contact");
      invoice.remove();
    };
  });
  
//checkall
let checkAll = document.querySelector('.check-all');
checkAll.addEventListener('click', checkAllFn)

function checkAllFn() {
    if (checkAll.checked) {
        document.querySelectorAll('.companies-checkbox input').forEach(function (e) {
            e.closest('.companies-list').classList.add('selected');
            e.checked = true;
        });
    }
    else {
        document.querySelectorAll('.companies-checkbox input').forEach(function (e) {
            e.closest('.companies-list').classList.remove('selected');
            e.checked = false;
        });
    }
}