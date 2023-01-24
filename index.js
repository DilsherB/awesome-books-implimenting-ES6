/* eslint-disable linebreak-style */
import { DateTime } from './modules/luxon.js';

import BookShelf from './modules/books.js';

const dt = DateTime.now();

document.querySelector('.date').innerHTML = `${dt.day} ${dt.month}, ${dt.year} ${dt.hour}:${dt.minute}:${dt.second}`;

const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
const reset = () => {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
};
reset();
sections[0].style.display = 'block';

menuItems[0].addEventListener('click', () => {
  reset();
  sections[0].style.display = 'block';
});

menuItems[1].addEventListener('click', () => {
  reset();
  sections[1].style.display = 'block';
});

menuItems[2].addEventListener('click', () => {
  reset();
  sections[2].style.display = 'block';
});

const bookContainer = document.querySelector('.bookContainer');
const g = new BookShelf();
g.book.forEach((b) => {
  bookContainer.innerHTML += `
      <div class="innerContainer">
        <p>"${b.title}" by ${b.author}</p>
        <button class="removeBtn" id="${b.id}">Remove</button>
      </div>
    `;
});

bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.removeBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);
