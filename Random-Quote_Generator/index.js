const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");

const apiURl = "https://api.quotable.io/random";

async function getQuote() {
  try {
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading";
    const result = await fetch(apiURl);
    const data = await result.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
    //   console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened,try again later ";
    authorEl.innerText = "An error happened ";
  }
}

getQuote();
btnEl.addEventListener("click", getQuote);
