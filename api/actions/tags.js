import "isomorphic-fetch";

const SERVER_URL = 'http://localhost:8000/api';

const list = () =>
  fetch(`${SERVER_URL}/tags/list`)
    .then(
      (response) =>
        response.json()
    );

export default list;
