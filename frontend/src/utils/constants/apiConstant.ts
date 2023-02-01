/* Interfaces */
interface endPoint {
  HELLO: string;
}

const END_POINT: endPoint = Object.freeze({
  HELLO: '/api/hello',
});

const ERROR = Object.freeze({
  ENONT: 'ENOENT',
  ENONT_MESSAGE: 'Unusable API EndPoint',
  PROTOCOL_MESSAGE: 'Protocol Error',
});

const API = Object.freeze({
  END_POINT: END_POINT,
  ERROR: ERROR,
});

export default API;
