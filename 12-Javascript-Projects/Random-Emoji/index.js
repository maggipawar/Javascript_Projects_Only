const btnEl = document.querySelector(".btn");
const emojiNamEl = document.querySelector(".emoji_name");

const emoji = [];
// API Site: emoji-api.com

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=9baff3c490bf5dde58b7019300d29608de3b5cdf"
  );
  let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}
getEmoji();

btnEl.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNamEl.innerText = emoji[randomNum].emojiCode;
});
