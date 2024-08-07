// Sample book data
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        description: "A novel about the American Dream and the Roaring Twenties."
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        description: "A story about racial injustice in the Deep South."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        description: "A dystopian novel about a totalitarian regime."
    }
];

// Function to create book list
function createBookList() {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';

    books.forEach(book => {
        const bookItemDiv = document.createElement('div');
        bookItemDiv.className = 'book-item';
        bookItemDiv.textContent = book.title;
        bookItemDiv.addEventListener('click', () => showBookDetails(book));
        bookListDiv.appendChild(bookItemDiv);
    });
}

// Function to display book details
function showBookDetails(book) {
    const bookDetailsDiv = document.getElementById('bookDetails');
    bookDetailsDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Description:</strong> ${book.description}</p>
    `;
}

// Initialize app
createBookList();
