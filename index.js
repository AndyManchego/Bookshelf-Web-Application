const form = document.getElementById('add-book-form');
const bookList = document.getElementById('book-list');

form.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    addBook(title, author, genre);
    form.reset();
});

function addBook(title, author, genre) {
    const row = bookList.insertRow();
    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const genreCell = row.insertCell();
    titleCell.innerText = title;
    authorCell.innerText = author;
    genreCell.innerText = genre;
}




const commentBtns = document.querySelectorAll('.comment-btn');
const commentForms = document.querySelectorAll('.comment-form');
const commentInputs = document.querySelectorAll('.comment-input');
const commentSubmitBtns = document.querySelectorAll('.comment-submit');
const commentsLists = document.querySelectorAll('.comments-list');


commentBtns.forEach((commentBtn, i) => {
  commentBtn.addEventListener('click', () => {
    
    commentForms[i].style.display = 'block';
  });
});

// adds event listeners to the comment submit buttons
commentSubmitBtns.forEach((submitBtn, i) => {
  submitBtn.addEventListener('click', () => {
    // gets the comment text from the input element
    const comment = commentInputs[i].value;

    // creates a new list item for the comment
    const li = document.createElement('li');
    li.textContent = comment;

    // adds the comment to the comments list for the corresponding book
    commentsLists[i].appendChild(li);

    // hides the comment form
    commentForms[i].style.display = 'none';
  });
});