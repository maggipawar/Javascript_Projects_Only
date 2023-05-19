const currencyFirstEl = document.getElementById("currency-first");
const input1El = document.getElementById("input1");
const currencySecondEl = document.getElementById("currency-second");
const input2El = document.getElementById("input2");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

// API LINK:"exchangerate-api.com,https://www.exchangerate-api.com"

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/042c12b1a5f43be67d3e387c/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      input2El.value = (input1El.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
input1El.addEventListener("input", updateRate);
currencySecondEl.addEventListener("change", updateRate);
