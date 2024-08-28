import { camelCase } from "lodash";

const weatherIcons = {
  clearDay: './assets/icons/clear-day.svg',
  clearNight: './assets/icons/clear-night.svg',
  cloudy: './assets/icons/cloudy.svg',
  fog: './assets/icons/fog.svg',
  hail: './assets/hail.svg',
  partlyCloudyDay: './assets/icons/cloudy-1-day.svg',
  partlyCloudyNight: './assets/icons/cloudy-1-night.svg',
  rainSnowShowersDay: './assets/icons/rain-and-snow-mix.svg',
  snowAndSleetMix: './assets/icons/rain-and-sleet-mix.svg',
  rain: './assets/icons/rainy-1.svg',
  showersDay: './assets/icons/rainy-1-day.svg',
  showersNight: './assets/icons/rainy-1-night.svg',
  snowShowersDay: './assets/icons/snowy-1-day.svg',
  snowShowersNight: './assets/icons/snowy-1-night.svg',
  snow: './assets/icons/snowy-1.svg',
  thunder: './assets/icons/isolated-thunderstorms.svg',
  thunderShowersDay: './assets/icons/scattered-thunderstorms-day.svg',
  thunderShowersNight: './assets/icons/scattered-thunderstorms-night.svg',
  wind: './assets/icons/wind'
}

export default function getIcon(icon) {
  const getIcon = camelCase(icon);
  if (getIcon === 'clearDay') return weatherIcons.clearDay;
  if (getIcon === 'clearNight') return weatherIcons.clearNight;
  if (getIcon === 'cloudy') return weatherIcons.cloudy;
  if (getIcon === 'fog') return weatherIcons.fog;
  if (getIcon === 'hail') return weatherIcons.hail;
  if (getIcon === 'partlyCloudyDay') return weatherIcons.partlyCloudyDay;
  if (getIcon === 'partlyCloudyNight') return weatherIcons.partlyCloudyNight;
  if (getIcon === 'rainSnowShowersDay') return weatherIcons.rainSnowShowersDay;
  if (getIcon === 'rainSnowShowersNight') return weatherIcons.rainSnowShowersDay;
  if (getIcon === 'rainSnow') return weatherIcons.snowAndSleetMix;
  if (getIcon === 'rain') return weatherIcons.rain;
  if (getIcon === 'showersDay') return weatherIcons.showersDay;
  if (getIcon === 'showersNight') return weatherIcons.showersNight;
  if (getIcon === 'sleet') return weatherIcons.snowAndSleetMix;
  if (getIcon === 'snowShowersDay') return weatherIcons.snowShowersDay;
  if (getIcon === 'snowShowersNight') return weatherIcons.snowShowersNight;
  if (getIcon === 'snow') return weatherIcons.snow;
  if (getIcon === 'thunderRain') return weatherIcons.thunder;
  if (getIcon === 'thunderShowersDay') return weatherIcons.thunderShowersDay;
  if (getIcon === 'thunderShowersNight') return weatherIcons.thunderShowersNight;
  if (getIcon === 'thunder') return weatherIcons.thunder;
  if (getIcon === 'wind') return weatherIcons.wind;
}
