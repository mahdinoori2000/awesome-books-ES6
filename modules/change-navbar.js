// SECTION ELEMENTS
const listSection = document.querySelector('.list');
const addSection = document.querySelector('.add');
const contactSection = document.querySelector('.contact');

const showList = () => {
  listSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
};

const addList = () => {
  listSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
};

const showContact = () => {
  listSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
};
const clearInputFields = () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  titleInput.value = '';
  authorInput.value = '';
};

export {
  showList,
  addList,
  showContact,
  clearInputFields,
};
