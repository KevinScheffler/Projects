let currentIndex = 0;
const imagesArray = ["images/beach.jpg", "images/ireland.jpg", "images/moon.jpg", "images/mountains.jpg", "images/switzerland.jpg"]
const imageElement = document.getElementById('image');
const dots = document.querySelectorAll('.dot');
const checkbox = document.querySelector('#auto-slide');
let autoPlayInterval;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= imagesArray.length) {
    currentIndex = 0;
  }
  updateImage();
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active')
}

dots.forEach(dot => {
  dot.addEventListener('click', (event) => {
    currentIndex = parseInt(event.target.getAttribute('data-index'));
    updateImage();
    updateDots();
  })
})


function updateImage() {
  imageElement.src = imagesArray[currentIndex]
}

document.getElementById('previousBtn').addEventListener('click', () => {
  currentIndex--

  if (currentIndex < 0) {
    currentIndex = imagesArray.length - 1;
  }
  updateImage();
  updateDots();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex++

  if (currentIndex >= imagesArray.length) {
    currentIndex = 0;
  }
  updateImage();
  updateDots();
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    autoPlayInterval = setInterval(nextSlide, 5000);
  } else {
    clearInterval(autoPlayInterval);
  }
});




