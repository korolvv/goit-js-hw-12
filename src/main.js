import useApi from './js/pixabay-api';

const form = document.querySelector('form');
const userList = document.querySelector('.userList');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load_more');

let request;
let page = 1;

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.classList.remove('hidden');
  userList.innerHTML = '';
  request = form.elements.request.value;

  useApi(request, userList, loader, loadMore, 1);
});

loadMore.addEventListener('click', () => {
  page += 1;
  useApi(request, userList, loader, loadMore, page);
});
