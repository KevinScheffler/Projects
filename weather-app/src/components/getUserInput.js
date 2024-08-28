export let country;
export let unit;
export let unitText;
export let speedUnit;

export default function getUserInput() {
  const search = document.querySelector('#search-bar');
  const unitCheckBox = document.querySelector('#checkbox_toggle');
  country = search.value;
  if (unitCheckBox.checked) {
    unit = 'us';
    unitText = '°F';
    speedUnit = 'mp/h';
  } else {
    unit = 'metric';
    unitText = '°C';
    speedUnit = 'km/h';
  }
}