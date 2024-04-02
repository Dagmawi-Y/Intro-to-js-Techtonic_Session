// Function to add a new book to the catalog
function addBook() {
  // Accessing the <ul> element inside the <div> with ID "fiction"
  var fictionBooks = document
    .getElementById('fiction')
    .getElementsByTagName('ul')[0];

  // Creating a new <li> element for the new book
  var newBook = document.createElement('li');
  newBook.innerText = 'Pride and Prejudice';

  // Adding the new book to the catalog
  fictionBooks.appendChild(newBook);
}
addBook();
