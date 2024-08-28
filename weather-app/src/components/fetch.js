import renderWeatherElements from './render';
import { clearContent } from './render';

export let updatedWeatherData;
export const weatherData = async (location) => {
  clearContent();
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=PPW45HHHDMG9FLKE52AW4P5N4`);
  const data = await response.json();
  updatedWeatherData = data;
  renderWeatherElements();
  console.log(updatedWeatherData)
}



