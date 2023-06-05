/* eslint no-use-before-define: "off" */
/* eslint class-methods-use-this: "off" */
import BookCollection from './modules/book-collection.js';
import { showList, addList, showContact } from './modules/change-navbar.js';

const bookCollection = new BookCollection();
bookCollection.showBooks();

// NAVBAR ELEMENTS
const navListBtn = document.getElementById('list-section-btn');
const navAddBtn = document.getElementById('add-section-btn');
const navContactBtn = document.getElementById('contact-section-btn');

navListBtn.addEventListener('click', showList);
navAddBtn.addEventListener('click', addList);
navContactBtn.addEventListener('click', showContact);
