import './assets/styles/main.css';
import homepageComponent from './homepage';
import menuComponent from './menuComponent';
import contactComponent from './contactComponent';
import aboutUsComponent from './aboutUsComponent';
import footerComponent from './footerComponent';



homepageComponent();
footerComponent();

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  homepageComponent();
  footerComponent();
});

document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  menuComponent();
  footerComponent();
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  contactComponent();
  footerComponent();
});

document.getElementById('about-us').addEventListener('click', () => {
  document.getElementById('content').innerHTML = '';
  aboutUsComponent();
  footerComponent();
});