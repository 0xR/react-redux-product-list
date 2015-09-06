import fetch from 'isomorphic-fetch';
import config from 'config';

const prefix = __SERVER__ ? 'http://localhost:' + config.port : '';

const baseUrl = prefix + '/api/products';

export default (query, page = 1) => {
  return fetch(baseUrl + `?q=${query}&page=${page}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text()
          .then((text) => {
            throw text;
          });
      }
    });
}
