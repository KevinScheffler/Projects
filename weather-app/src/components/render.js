import { updatedWeatherData } from "./fetch";
import { addDays, format } from "date-fns";
import getIcon from './getIcons'
import { toZonedTime } from 'date-fns-tz';
import { unitText } from "./getUserInput";
// import { speedUnit } from "./getUserInput";

function renderWeatherElements() {
  createLocationElement();
  currentWeatherCard();
  futureWeatherCards();
}


function getDaysOfWeek(updatedWeatherData) {
  const daysOfWeek = [];
  const timezone = updatedWeatherData.timezone;
  const now = new Date();
  const zonedDate = toZonedTime(now, timezone);

  for (let i = 0; i <= 6; i++) {
    const nextDay = addDays(zonedDate, i);
    const dayName = format(nextDay, 'EEE');
    daysOfWeek.push(dayName);
  }
  return daysOfWeek;
}

function createLocationElement() {
  const locationDiv = document.querySelector('.location');
  const locationIcon = document.createElement('i')
  locationIcon.classList.add('fa-solid', 'fa-location-dot')
  const locationHeader = document.createElement('h1');
  locationHeader.classList.add('location-heading');
  locationHeader.textContent = updatedWeatherData.resolvedAddress;
  locationDiv.appendChild(locationIcon);
  locationDiv.appendChild(locationHeader);
}

function currentWeatherCard() {
  const timezone = updatedWeatherData.timezone;
  const now = new Date();
  const zonedDate = toZonedTime(now, timezone);
  const currentTime = format(zonedDate, 'h:mm a');
  const dayOfWeek = format(zonedDate, 'eeee', { timezone});
  const cards = document.querySelector('.cards');

  const todaysCard = document.createElement('div');
  todaysCard.classList.add('todays-card');

  const dateAndTime = document.createElement('div');
  dateAndTime.classList.add('card-date-time');
  todaysCard.appendChild(dateAndTime)

  const day = document.createElement('h3');
  day.textContent = dayOfWeek;
  dateAndTime.appendChild(day);

  const time = document.createElement('h3');
  time.textContent = currentTime;
  dateAndTime.appendChild(time);

  const tdIconContainer = document.createElement('div');
  tdIconContainer.classList.add('td-icon-container');
  todaysCard.appendChild(tdIconContainer)

  const img = document.createElement('img');
  const icon = getIcon(updatedWeatherData.currentConditions.icon);
  img.src = icon;
  tdIconContainer.appendChild(img);

  const temp = document.createElement('h1');
  temp.textContent = updatedWeatherData.currentConditions.temp + unitText;
  todaysCard.appendChild(temp);


  const condition = document.createElement('h2');
  condition.textContent = updatedWeatherData.currentConditions.conditions;
  todaysCard.appendChild(condition);

  cards.appendChild(todaysCard);
}

function futureWeatherCards() {
  const cards = document.querySelector('.cards');
  const days = getDaysOfWeek(updatedWeatherData.timezone);

  for (let i = 1; i < 7; i++) {
    const nextDayCard = document.createElement('div');
    nextDayCard.classList.add('next-day-cards');

    const day = document.createElement('h3');
    day.textContent = days[i];
    nextDayCard.appendChild(day);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    nextDayCard.appendChild(iconContainer);

    const img = document.createElement('img');
    const icon = getIcon(updatedWeatherData.days[i].icon);
    img.src = icon;
    iconContainer.appendChild(img);

    const temp = document.createElement('h1');
    temp.textContent = updatedWeatherData.days[i].temp + unitText;
    nextDayCard.appendChild(temp);

    cards.appendChild(nextDayCard);
  }
}

export function clearContent() {
  const location = document.querySelector('.location');
  const cards = document.querySelector('.cards');
  location.textContent = '';
  cards.textContent = '';
}

export default renderWeatherElements;
