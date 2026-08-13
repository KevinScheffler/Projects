import renderWeatherElements from './render';
import { clearContent } from './render';
import { API_KEY } from "./config.js";

export let updatedWeatherData;
export const weatherData = async (location) => {
  clearContent();
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
  const data = await response.json();
  updatedWeatherData = data;
  renderWeatherElements();
  console.log(updatedWeatherData)
}



