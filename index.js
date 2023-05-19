const btnEl = document.getElementById("btn");
const animeContainer = document.querySelector(".anime_container");
const animeImgEl = document.querySelector(".anime_img");
const animeNameEl = document.querySelector(".anime_name");

// Site for API:cat boys api
const apiURl = "https://api.catboys.com/img";

btnEl.addEventListener("click", async function () {
  // for Loading effects site: loading io
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    animeNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";
    const response = await fetch(apiURl);
    const data = await response.json();
    console.log(data);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainer.style.display = "block";
    animeImgEl.src = data.url;
    animeNameEl.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error happened please try again";
  }
});
