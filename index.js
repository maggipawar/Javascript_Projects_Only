const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentVal = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      fahrenheitEl.value = (currentVal * 1.8 + 32).toFixed(2);
      kelvinEl.value = (currentVal + 273.32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentVal - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentVal - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentVal - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentVal - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
