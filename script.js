const myLibrary = [];

function Book (name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bookContainer = document.getElementById("books-container");
let newBookButton = document.getElementById("new-book-button");
let newBookBoard = document.getElementById("new-book-board");
let newBookSubmitButton = document.getElementById("new-book-submit");

function addBookToLibrary (name, author, pages, read) {
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    let latestBookAdded = document.querySelector("#books-container .book:nth-child(3)");
    newBookBoard.setAttribute("style", "display:none;");
    // console.log(latestBookAdded);
    latestBookAdded.insertAdjacentHTML("beforebegin",
    `
        <div class = "book">
            <div class = "title">${name}</div>
            <div class = "author">${author}</div>
        </div>
    `);
    return newBook;
}

newBookButton.addEventListener("click", (e) => {
    newBookBoard.toggleAttribute("style");
});

newBookSubmitButton.addEventListener("click", (e) => {
    let name = document.getElementById("new-book-title").value;
    let author = document.getElementById("new-book-author").value;
    let pages = document.getElementById("new-book-pages").value;
    if (!name || !author || !pages) {
        return;
    }
    e.preventDefault();
    addBookToLibrary(name, author, pages, false);
    document.getElementById("new-book-form").reset();
});



// console.log(myLibrary);
