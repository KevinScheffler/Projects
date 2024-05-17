import Marlin from './assets/images/marlin-removebg.png';

function contactPageComponent() {
  const content = document.getElementById('content');

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  content.appendChild(contactContainer);

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  contactContainer.appendChild(contentContainer);

  const contactImgContainer = document.createElement('div');
  contactImgContainer.classList.add('contact-image-container');
  contentContainer.appendChild(contactImgContainer);

  const marlinImg = new Image();
  marlinImg.classList.add('marlin-img');
  marlinImg.src = Marlin;
  contactImgContainer.appendChild(marlinImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('contact-text-container');
  contentContainer.appendChild(textContainer);

  const heading = document.createElement('h1');
  heading.classList.add('contact-heading');
  heading.textContent = 'WE WOULD LOVE TO HEAR FROM YOU';
  textContainer.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.classList.add('contact-paragraph');
  paragraph.textContent = 'Send us a message and one of our team members will get back to you shortly or call us at 845.568.7819';
  textContainer.appendChild(paragraph);

  const link = document.createElement('a');
  link.classList.add('reservation-link');
  link.href = '#';
  link.textContent = 'CLICK HERE TO MAKE A RESERVATION';
  textContainer.appendChild(link);

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  contactContainer.appendChild(formContainer);

  const form = document.createElement('form');
  form.classList.add('contact-form');
  form.action = '#';
  formContainer.appendChild(form);

  const firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.name = 'first-name';
  firstNameInput.id = 'first-name';
  firstNameInput.placeholder = 'First Name*';
  firstNameInput.required = true;
  form.appendChild(firstNameInput);

  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.name = 'last-name';
  lastNameInput.id = 'last-name';
  lastNameInput.placeholder = 'Last Name*';
  lastNameInput.required = true;
  form.appendChild(lastNameInput);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = '@ Email*';
  emailInput.required = true;
  form.appendChild(emailInput);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.name = 'phone';
  phoneInput.id = 'phone';
  phoneInput.placeholder = 'Phone*';
  phoneInput.placeholder = '📞 Phone*';
  phoneInput.required = true;
  phoneInput.pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}';
  form.appendChild(phoneInput);

  const selectInput = document.createElement('select');
  selectInput.name = 'select-input';
  selectInput.id = 'select-input';
  form.appendChild(selectInput);

  const option = document.createElement('option');
  option.textContent = '🔍 How Did You Hear About Us?';
  option.disabled = true;
  option.selected = true;
  selectInput.appendChild(option);

  const options = [
    'Google', 
    'Facebook', 
    'Instagram', 
    'Yelp', 
    'Trip Advisor', 
    'Radio', 
    'Television', 
    'Word of Mouth', 
    'Other'
  ];

  options.forEach(option => {
    const selectOptions = document.createElement('option');
    selectOptions.value = option;
    selectOptions.textContent = option;
    selectInput.appendChild(selectOptions);
  });

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  form.appendChild(messageContainer);

  const label = document.createElement('label');
  label.for = 'message';
  label.textContent = 'Message';
  messageContainer.appendChild(label);

  const textarea = document.createElement('textarea');
  textarea.cols = '40';
  textarea.minLength = '0';
  textarea.rows = '4';
  textarea.id = 'message';
  textarea.name = 'message';
  textarea.placeholder = 'Your Message...';
  messageContainer.appendChild(textarea);

  const button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('form-submit-btn');
  button.textContent = 'SUBMIT'
  form.appendChild(button);
}

export default contactPageComponent;