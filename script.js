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
    this.toggleRead = () => {
        this.read = this.read === "no" ? "yes" : "no";
    }
}

function sendBookObj() {
    enteredBook = new Book();
    const titleEntry = document.getElementById("bookTitle");
    const authorEntry = document.getElementById("bookAuthor");
    const pageCountEntry = document.getElementById("bookPageCount");
    const readStatusEntry = document.getElementById("readStatus");

    let enteredTitle = titleEntry.value;
    let enteredAuthor = authorEntry.value;
    let enteredPageCount = pageCountEntry.value;
    let enteredReadStatus = (readStatusEntry.checked) ? "yes" : "no";

    enteredBook.title = enteredTitle;
    enteredBook.author = enteredAuthor;
    enteredBook.pageCount = enteredPageCount;
    enteredBook.read = enteredReadStatus;

    addBookToLibrary(enteredBook);

    titleEntry.value = "";
    authorEntry.value = "";
    pageCountEntry.value = "";
    readStatusEntry.checked = false;
    document.getElementById("addBookModal").style.setProperty("display", "none");
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function toggleReadStatus() {
    let nodeIndex = this.parentNode.id.substring(5); // .substring(5) to remove 'data-' from id
    myLibrary[nodeIndex].toggleRead();
    updateBooks();
}

function deleteSelection() {
    let nodeIndex = this.parentNode.id.substring(5); // .substring(5) to remove 'data-' from id
    myLibrary.splice(nodeIndex, 1);
    updateBooks();
}

function updateBooks() {
    // clear displayed library
    const library = document.getElementsByClassName("library")[0];
    while(library.lastChild.id !== "add-book") {
        library.removeChild(library.lastChild);
    }

    // print updated library
    for (item in myLibrary) {
        let newBook = document.createElement('article');
        newBook.id = "data-" + myLibrary.indexOf(myLibrary[item]);

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
        readBtn.addEventListener("click", toggleReadStatus);
        newBook.appendChild(readBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", deleteSelection);
        newBook.appendChild(deleteBtn);

        document.querySelector('.library').appendChild(newBook);
    }
}

let modal = document.getElementById("addBookModal");
let addBookBtn = document.getElementById("add-book");
let closeSpan = document.getElementsByClassName("close-btn")[0];
let submitBtn = document.getElementById("submitBtn");

addBookBtn.addEventListener("click", () => modal.style.setProperty("display", "flex"));
closeSpan.addEventListener("click", () => modal.style.setProperty("display", "none"));
submitBtn.addEventListener("click", () => {sendBookObj(); updateBooks();});

