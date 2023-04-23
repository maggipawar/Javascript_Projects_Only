const ratingEls = document.querySelectorAll(".rating");
const btnElm = document.getElementById("btn");
const containerElm = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    // console.log(event.target.innerText || event.target.parentNode.innerText);
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnElm.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerElm.innerHTML = ` 
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p> `;
  }
});
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
