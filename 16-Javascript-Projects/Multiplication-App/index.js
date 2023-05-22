const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (score === -1) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} by multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  let userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
