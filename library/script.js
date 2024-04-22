let myLibrary = [];
let bookIdCounter = 0;
let filteredArray = [];

function Book(title, author, pages, haveRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.id = id;
  this.readStatus = function() {
    return haveRead ? 'have read' : 'not read yet';
  }
}



function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const id = bookIdCounter++;
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  clearForm();
  filterLibrary();
  displayLibrary();
  console.log(myLibrary)
}



function filterLibrary() {
  filteredArray = myLibrary.slice();
}



  



function displayLibrary() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';

  filteredArray.forEach(function(book) {
      const card = document.createElement('div')
      card.classList.add('card');
      card.setAttribute('data-id', book.id);
      cardContainer.appendChild(card);

  
      const heading = document.createElement('h1');
      heading.textContent = book.title;
      card.appendChild(heading);
  
      const authorHeading = document.createElement('h4');
      authorHeading.textContent = book.author;
      card.appendChild(authorHeading);
  
      const pageHeading = document.createElement('p');
      pageHeading.textContent = book.pages;
      card.appendChild(pageHeading);
  
      const readHeading = document.createElement('div');
      readHeading.classList.add('read-status');
      readHeading.setAttribute('data-read-status', book.haveRead)
      readHeading.textContent = book.haveRead ? 'Have read' : 'Not read yet';
      card.appendChild(readHeading);
  
      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons-container');
      card.appendChild(buttonsContainer);
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.textContent = 'Remove';
      buttonsContainer.appendChild(removeButton);
  
      const toggleRead = document.createElement('button');
      toggleRead.classList.add('toggle-button');
      toggleRead.textContent = 'Toggle Read';
      buttonsContainer.appendChild(toggleRead);
  
  
  
      removeButton.addEventListener('click', function() {
        card.remove();
        myLibrary = myLibrary.filter(item => item.id !== book.id);
      });
  
      toggleRead.addEventListener('click', function() {
        book.haveRead = !book.haveRead;
        readHeading.textContent = book.haveRead ? 'Have read' : 'Not read yet';
      });
    });
  }


function clearForm() {
  const form = document.getElementById('book-form');
  form.reset();
}

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const button = document.getElementById('new-book');
button.addEventListener('click', () => {
  const bookForm = document.getElementById('book-form');
  bookForm.style.display = 'flex';
});

filterLibrary();
displayLibrary();








  
    




