const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.querySelector(".newBook");

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let statement;
  this.info = function() {
    statement = read ? "read" : "not read yet";
    return `${title  }by${  author  },${  pages  },${  statement}`;
  }
}

const book1 = new Book("good book", "krunal", 295, true);
const book2 = new Book("bad book", "someBadGuy", 195, false);
const book3 = new Book("mid book", "someMidGuy", 95, true);

function addBookToLibrary() {
  myLibrary.push(book1);
  myLibrary.push(book2);
  myLibrary.push(book3);
}

addBookToLibrary();

function displayBooks() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");

        const cardTitle = document.createElement("div");
        cardTitle.innerHTML = `${book.title}`;

        const cardAuthor = document.createElement("div");
        cardAuthor.innerHTML = `${book.author}`;

        const cardPages = document.createElement("div");
        cardPages.innerHTML = `${book.pages  }pages`;

        const cardRead = document.createElement("div");
        cardRead.innerHTML = book.read ? "Read" : "Not read";

        bookCard.classList.add("bookCard");
        cardTitle.classList.add("cardTitle");
        cardAuthor.classList.add("cardAuthor");
        cardPages.classList.add("cardPages");
        cardRead.classList.add("cardRead");

        container.appendChild(bookCard);
        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(cardRead);
    });
}

displayBooks();
