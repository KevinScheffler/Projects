import './assets/styles/main.css';
import homepageComponent from './homepage';
import menuComponent from './menuComponent';
import contactComponent from './contactComponent';
import aboutUsComponent from './aboutUsComponent';



homepageComponent();

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  homepageComponent();
});

document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  menuComponent();
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  contactComponent();
});

document.getElementById('about-us').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  aboutUsComponent();
});