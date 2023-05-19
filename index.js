const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "/EW3RRLvJKDFPyXvKeWuXQ==j6ZxcAdWBHHdHDN5";
const apiURl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-API-KEY": apiKey,
  },
};

async function getJoke() {
  try {
    jokeEl.innerHTML = "Updating...";
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading...";
    const response = await fetch(apiURl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell Me a Joke";
    // console.log(data[0].joke);
    jokeEl.innerHTML = data[0].joke;
  } catch (error) {
    jokeEl.innerHTML = "An error happened,try again later";
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell Me a Joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
