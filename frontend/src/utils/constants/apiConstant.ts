/* Interfaces */
interface endPoint {
  [key: string]: string;
}

interface error {
  [key: string]: string;
}

interface api {
  [key: string]: endPoint | error;
}

const END_POINT: endPoint = Object.freeze({
  HELLO: '/api/hello',
  SEARCH_MUSIC: 'api/music/search',
});

const ERROR: error = Object.freeze({
  ENONT: 'ENOENT',
  ENONT_MESSAGE: 'Unusable API EndPoint',
  PROTOCOL_MESSAGE: 'Protocol Error',
});

const API: api = Object.freeze({
  END_POINT: END_POINT,
  ERROR: ERROR,
});

export default API;
