/* For Delete transactions */
let removebtn = document.querySelectorAll(".transactions-delete");
removebtn.forEach((eleBtn) => {
  eleBtn.onclick = () => {
    let remove = eleBtn.closest(".transaction-list");
    remove.remove();
  };
});