/* Interfaces */
interface endPoint {
  HELLO: string;
}

const END_POINT: endPoint = Object.freeze({
  HELLO: '/api/hello',
});

const ERROR = Object.freeze({
  ENONT: 'ENOENT',
});

const API = Object.freeze({
  END_POINT: END_POINT,
});

export default API;
