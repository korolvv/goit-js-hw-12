import axios from 'axios';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import renderItem from './render-functions';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const getQuery = async (request, page) => {
  const params = {
    key: '43243729-04275528cc78ca8d3cba6ce95',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };
  const response = await axios.get('https://pixabay.com/api/?', { params });
  return response.data;
};

function useApi(request, userList, loader, loadMore, page) {
  getQuery(request, page)
    .then(data => {
      const { total, totalHits, hits } = data;
      if (total === 0) {
        loader.classList.add('hidden');
        loadMore.classList.add('hidden');
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const pictures = hits;
        const item = renderItem(pictures);
        userList.insertAdjacentHTML('beforeend', item);
        const lightbox = new SimpleLightbox('.userItem a');
        loader.classList.add('hidden');
        if (15 * page > totalHits) {
          iziToast.error({
            position: 'topRight',
            message:
              "We're sorry, but you've reached the end of search results.",
          });
          loadMore.classList.add('hidden');
        } else {
          loadMore.classList.remove('hidden');
        }
        lightbox.refresh();
        if (page > 1) {
          smoothScroll();
        }
      }
    })
    .catch(error => {
      loadMore.classList.add('hidden');
      throw new Error(error);
    });
}

function smoothScroll() {
  const card = document.querySelector('.userItem');
  const measures = card.getBoundingClientRect();
  console.log(window.innerHeight);
  window.scrollBy({
    top: measures.height * 2,
    behavior: 'smooth',
  });
}

export default useApi;
