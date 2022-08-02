let myLibrary = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pageCount: 180,
        read: "yes",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        pageCount: 427,
        read: "no",
    }
];

function Book(title, author, pageCount, read) {
    this.title = title,
    this.author = author,
    this.pageCount = pageCount,
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function printBooks() {
    for (item in myLibrary) {
        let newBook = document.createElement('article');

        let bookTitle = document.createElement("p");
        bookTitle.className = 'bookTitle';
        bookTitle.textContent = myLibrary[item].title;
        newBook.appendChild(bookTitle);

        let bookAuthor = document.createElement("p");
        bookAuthor.className = 'bookAuthor';
        bookAuthor.textContent = myLibrary[item].author;
        newBook.appendChild(bookAuthor);

        let bookPageCount = document.createElement("p");
        bookPageCount.className = 'bookPageCount';
        bookPageCount.textContent = myLibrary[item].pageCount + " pages";
        newBook.appendChild(bookPageCount);

        let readBtn = document.createElement("button");
        readBtn.className = (myLibrary[item].read === "yes") ? "Read" : "Not Read";
        readBtn.textContent = readBtn.className;
        newBook.appendChild(readBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        newBook.appendChild(deleteBtn);

        document.querySelector('.library').appendChild(newBook);
    }
}
