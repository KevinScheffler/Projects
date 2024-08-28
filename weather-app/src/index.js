import "./style.css";
import { weatherData } from "./components/fetch";
import getUserInput from "./components/getUserInput";


document.addEventListener("DOMContentLoaded", () => {
  const activeClass = document.querySelector(".cards");
  if (activeClass) {
    activeClass.classList.remove("active");
  }

  const searchForm = document.querySelector("#search-form");
  const searchBar = document.querySelector("#search-bar");
  const searchButton = document.querySelector(".search-button");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = searchBar.value.trim();
    getUserInput();
    weatherData(location);
    searchForm.reset();
  });

  searchButton.addEventListener("click", () => {
    const location = searchBar.value.trim();
      getUserInput();
      weatherData(location);
      searchForm.reset();
  });
});

