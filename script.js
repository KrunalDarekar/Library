const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.querySelector(".newBook");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBookForm = document.getElementById("addBookForm");
const submitBtn = document.querySelector("form>button");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formIsRead = document.getElementById("isRead")

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let statement;
  this.info = () => {
    statement = read ? "read" : "not read yet";
    return `${title  }by${  author  },${  pages  },${  statement}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function deleteAllChidNodes(parentNode) {
  let child = parentNode.lastElementChild;
  while (child) {
      parentNode.removeChild(child);
      child = parentNode.lastElementChild;
  }
}

function displayBooks() {
  let count = 0;
  myLibrary.forEach(book => {
      const bookCard = document.createElement("div");

      const cardTitle = document.createElement("div");
      cardTitle.innerHTML = `${book.title}`;

      const cardAuthor = document.createElement("div");
      cardAuthor.innerHTML = `${book.author}`;

      const cardPages = document.createElement("div");
      cardPages.innerHTML = `${book.pages  } pages`;

      const cardRead = document.createElement("button");
      if(book.read) {
        cardRead.innerHTML = "Read";
        cardRead.classList.toggle("btn-light-green")
      } else {
        cardRead.innerHTML = "Not read";
        cardRead.classList.toggle("btn-red")
      }

      const cardRemove = document.createElement("button");
      cardRemove.setAttribute("id", "remove")
      cardRemove.innerHTML = "Remove";

      bookCard.classList.add("bookCard");
      cardTitle.classList.add("cardTitle");
      cardAuthor.classList.add("cardAuthor");
      cardPages.classList.add("cardPages");
      cardRead.classList.add("cardRead");
      cardRemove.classList.add(`${count}`);
      count += 1;

      cardRemove.addEventListener("click", () => {
        const index = parseInt(cardRemove.className, 10);
        myLibrary.pop(index);
        deleteAllChidNodes(container);
        displayBooks();
      })

      cardRead.addEventListener("click", () => {
        book.read = !book.read;
        deleteAllChidNodes(container);
        displayBooks();
      })

      container.appendChild(bookCard);
      bookCard.appendChild(cardTitle);
      bookCard.appendChild(cardAuthor);
      bookCard.appendChild(cardPages);
      bookCard.appendChild(cardRead);
      bookCard.appendChild(cardRemove);
  });
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

submitBtn.addEventListener("click", (event) => {
  const newTitle = formTitle.value;
  const newAuthor = formAuthor.value;
  const newPages = formPages.value;
  const newRead = formIsRead.checked;

  const newBook = new Book(newTitle, newAuthor, newPages, newRead);

  addBookToLibrary(newBook);
  deleteAllChidNodes(container);
  displayBooks();
  closeModal();
  addBookForm.reset();

  event.preventDefault();
})

newBookBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

displayBooks();
