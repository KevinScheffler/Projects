import backgroundImage from './assets/images/bg-homepage-img.jpg';

function homepageComponent() {
  const content = document.getElementById('content');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add('bg-container');
  content.appendChild(bgContainer);


  const backgroundImg = new Image();
  backgroundImg.classList.add('bg-img');
  backgroundImg.src = backgroundImage;
  bgContainer.appendChild(backgroundImg);
}

export default homepageComponent;