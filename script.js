const links = document.querySelectorAll(".links");
const submitBtn = document.getElementById("submit");
const ratingModal = document.querySelector(".rating-modal");
const thankYouModal = document.querySelector(".thankyou-modal");
const displayText = document.getElementById("display-text");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(link.value);
  });
});
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayText.textContent = `${links.value}`;
  ratingModal.style.display = "none";
  thankYouModal.style.display = "block";
});
