class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = false;
        this.readDate = null;
    }
}

class BookList {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.updateBookListUI();
    }

    updateBookListUI() {
        const bookListElement = document.getElementById('book-list');
        bookListElement.innerHTML = '';
        this.books.forEach((book, index) => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} (${book.genre})`;
            bookListElement.appendChild(li);
        });
        document.getElementById('books-read').textContent = this.books.filter(book => book.read).length;
    }
}

// Initialize book list and event listeners
const myBookList = new BookList();
document.getElementById('add-book').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    if (title && author && genre) {
        const newBook = new Book(title, author, genre);
        myBookList.addBook(newBook);
        document.getElementById('book-form').reset();
    }
});
