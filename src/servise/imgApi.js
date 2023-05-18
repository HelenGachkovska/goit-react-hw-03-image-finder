const API_KEY = '35069278-a919d6c36aed6148f5a573eb5';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImage(searchValue, page = 1) {
  return fetch(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Nothing was found for your request.'));
  });
}
