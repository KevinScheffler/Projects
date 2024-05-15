import AboutUsBackground from './assets/images/contact-bg.jpg';
import AboutUsContentImg from './assets/images/wine-glasses.jpg';

function aboutUsComponent() {
  const content = document.getElementById('content');
  
  const aboutUsContainer = document.createElement('div');
  aboutUsContainer.classList.add('about-us-container');

  const aboutUsBG = new Image();
  aboutUsBG.classList.add('about-us-bg');
  aboutUsBG.src = AboutUsBackground;
  aboutUsContainer.appendChild(aboutUsBG);

  const mainContentSection = document.createElement('div');
  mainContentSection.classList.add('about-us-content-container');
  aboutUsContainer.appendChild(mainContentSection);


  const contentImg = new Image();
  contentImg.classList.add('about-us-content-img');
  contentImg.src = AboutUsContentImg;
  mainContentSection.appendChild(contentImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  mainContentSection.appendChild(textContainer);

  const heading = document.createElement('h1');
  heading.classList.add('about-us-heading');
  heading.textContent = 'AN INCREDIBLE FINE DINING EXPERIENCE IN THE HUDSON VALLEY';
  textContainer.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.classList.add('about-us-text');
  paragraph.textContent = `
      Blu Pointe, on the Newburgh waterfront, proudly showcases locally-influenced,
      seasonal dishes for your dining pleasure. Each ingredient is hand selected by
      our executive chef and prepared fresh to capture every mouthwatering flavor.
      Combined with our extensive wine list of local and imported bottles, Blu Pointe
      is the premier fine dining experience in the Hudson Valley.
  `;
  textContainer.appendChild(paragraph);


  content.appendChild(aboutUsContainer);
}

export default aboutUsComponent;