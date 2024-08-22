let myLibrary = [];
let bookIdCounter = 0;
let filteredArray = [];

class Book {
  constructor(title, author, pages, haveRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = id;
  }

  readStatus() {
    return this.haveRead ? "have read" : "not read yet";
  }
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const id = bookIdCounter++;
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  clearForm();
  filterLibrary();
  displayLibrary();
  console.log(myLibrary);
  console.log(filteredArray);
}

function filterLibrary() {
  filteredArray = myLibrary.slice();
}

function displayLibrary() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  filteredArray.forEach(function (book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id);
    cardContainer.appendChild(card);

    const heading = document.createElement("h1");
    heading.textContent = book.title;
    card.appendChild(heading);

    const authorHeading = document.createElement("h4");
    authorHeading.textContent = book.author;
    card.appendChild(authorHeading);

    const pageHeading = document.createElement("p");
    pageHeading.textContent = book.pages;
    card.appendChild(pageHeading);

    const readHeading = document.createElement("div");
    readHeading.classList.add("read-status");
    readHeading.setAttribute("data-read-status", book.haveRead);
    readHeading.textContent = book.haveRead ? "Have read" : "Not read yet";
    card.appendChild(readHeading);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    card.appendChild(buttonsContainer);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    buttonsContainer.appendChild(removeButton);

    const toggleRead = document.createElement("button");
    toggleRead.classList.add("toggle-button");
    toggleRead.textContent = "Toggle Read";
    buttonsContainer.appendChild(toggleRead);

    removeButton.addEventListener("click", function () {
      card.remove();
      myLibrary = myLibrary.filter((item) => item.id !== book.id);
    });

    toggleRead.addEventListener("click", function () {
      book.haveRead = !book.haveRead;
      readHeading.textContent = book.haveRead ? "Have read" : "Not read yet";
    });
  });
}

function clearForm() {
  const form = document.getElementById("book-form");
  form.reset();
}

const addBook = document.getElementById("add-book");
addBook.addEventListener("click", (event) => {
  // Validate Form
  event.preventDefault();

  // Selectors for each form element and corresponding error span
  const titleInput = document.getElementById("title");
  const titleError = document.querySelector(".title-error");

  const authorInput = document.getElementById("author");
  const authorError = document.querySelector(".author-error");

  const pagesInput = document.getElementById("pages");
  const pagesError = document.querySelector(".pages-error");

  const readStatusInput = document.getElementById("read");
  const readStatusError = document.querySelector(".read-status-error");

  let formIsValid = true;

  // Title Validation
  if (!titleInput.validity.valid) {
    titleError.textContent = "Title field required.";
    formIsValid = false;
  } else {
    titleError.textContent = "";
  }

  // Author Validation
  if (!authorInput.validity.valid) {
    authorError.textContent = "Author field required";
    formIsValid = false;
  } else {
    authorError.textContent = "";
  }

  // Pages Validation
  if (!pagesInput.validity.valid) {
    pagesError.textContent = "Page number required";
    formIsValid = false;
  } else {
    pagesError.textContent = "";
  }

  // Read Status Validation
  if (!readStatusInput.checked) {
    readStatusError.textContent = "Read status required";
    formIsValid = false;
  } else {
    readStatusError.textContent = "";
  }

  // If form is valid, you can proceed to submit the form
  if (formIsValid) {
    addBookToLibrary();
  }
});

const button = document.getElementById("new-book");
button.addEventListener("click", () => {
  const bookForm = document.getElementById("book-form");
  bookForm.style.display = "flex";
});

filterLibrary();
displayLibrary();
