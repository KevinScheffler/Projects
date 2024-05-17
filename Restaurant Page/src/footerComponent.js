import Marlin from './assets/images/marlin-removebg.png';
import Facebook from './assets/icons/facebook.svg';
import Instagram from './assets/icons/instagram.svg';
import Youtube from './assets/icons/youtube.svg';

function footerComponent () {
  const content = document.getElementById('content');

  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  content.appendChild(footerContainer);

  const leftFooterContainer = document.createElement('div');
  leftFooterContainer.classList.add('left-footer-container');
  footerContainer.appendChild(leftFooterContainer);

  const leftFooterContent = [
    'Blu Pointe Hours',
    'MONDAY-THURSDAY',
    'Lunch Menu: 11:30-2pm',
    'All Day Menu: 11:30am-9pm',
    'FRIDAY-SATURDAY',
    'Lunch Menu 11:30-3pm',
    'All Day Menu 11:30am-10pm',
    'SUNDAY',
    'Brunch 11-2pm',
    'All Day Dinner 2pm-8pm',
    'Our dock is closed for the season',
    'Website Accessibility'
  ];

  leftFooterContent.forEach(text => {
    const div = document.createElement('div');
    div.textContent = text;
    leftFooterContainer.appendChild(div);
  });

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('footer-image-container');
  footerContainer.appendChild(imgContainer);

  const footerImg = new Image();
  footerImg.classList.add('footer-img');
  footerImg.src = Marlin;
  imgContainer.appendChild(footerImg);

  const header = document.createElement('h1');
  header.classList.add('footer-header');
  header.textContent = 'BLU POINTE';
  imgContainer.appendChild(header);

  const rightFooterContainer = document.createElement('div');
  rightFooterContainer.classList.add('right-footer-container');
  footerContainer.appendChild(rightFooterContainer);

  const address = [
    '120 Front Street,',
    'Newburgh NY 12550',
    '845.568.7189'
  ];

  address.forEach(element => {
    const div = document.createElement('div');
    div.textContent = element;
    rightFooterContainer.appendChild(div);
  });

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  rightFooterContainer.appendChild(iconContainer);

  const iconSRC = [
    Facebook,
    Instagram,
    Youtube
  ];

  iconSRC.forEach(icon => {
    const iconImg = new Image();
    iconImg.classList.add('icon-img');
    iconImg.src = icon;
    iconContainer.appendChild(iconImg);
  });
}

export default footerComponent;