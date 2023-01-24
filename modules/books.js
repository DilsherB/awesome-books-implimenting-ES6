/* eslint-disable linebreak-style */
export default class BookShelf {
  constructor() {
    this.book = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = () => {
    const formData = document.querySelectorAll('input');
    const title = formData[0].value;
    const author = formData[1].value;
    if (title.trim() === '' || author.trim() === '') return;
    const id = Date.now().toString();
    this.book.push({ title, author, id });

    localStorage.setItem('books', JSON.stringify(this.book));
    window.location.reload();
  };

  removeBook = (id) => {
    const filteredBooks = this.book.filter((b) => b.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    window.location.reload();
  };
}
