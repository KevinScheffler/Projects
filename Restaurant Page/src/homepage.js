import backgroundImage from './assets/images/bg-homepage-img.jpg';
import homepageContentImg from './assets/images/homepage-content.jpg';

function homepageComponent() {
  const content = document.getElementById('content');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add('bg-container');
  content.appendChild(bgContainer);


  const backgroundImg = new Image();
  backgroundImg.classList.add('bg-img');
  backgroundImg.src = backgroundImage;
  bgContainer.appendChild(backgroundImg);

  const homepageContent = document.createElement('div');
  homepageContent.classList.add('homepage-content-container');
  content.appendChild(homepageContent);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('homepage-img-container');
  homepageContent.appendChild(imgContainer);

  const contentImg = new Image();
  contentImg.classList.add('homepage-content-image');
  contentImg.src = homepageContentImg;
  imgContainer.appendChild(contentImg);

  const homepageText = document.createElement('div');
  homepageText.classList.add('homepage-text-container');
  homepageContent.appendChild(homepageText);

  const h1 = document.createElement('h1');
  h1.classList.add('homepage-heading');
  h1.textContent = 'About Blu Pointe';
  homepageText.appendChild(h1);

  const p = document.createElement('p');
  p.classList.add('homepage-para');
  p.textContent = 
    `
      Blu Pointe offers a modern, upscale dining experience
      featuring a Wine Spectator Award winning wine list, Prime
      and Wagyu beef, fresh seafood and breath-taking Hudson River
      views located in the Hudson Valley.
    `;
  homepageText.appendChild(p);
}

export default homepageComponent;