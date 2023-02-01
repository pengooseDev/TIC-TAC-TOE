import axios from 'axios';

const sendGetRequest = async (END_POINT: string) => {
  try {
    const searchResponse = await axios.get(END_POINT);
    const { data } = searchResponse;

    return data;
  } catch (error) {
    const ErrorType = error as protocolError;

    if (ErrorType.code === 'ENOENT') throw new Error('Unusable API EndPoint');
    throw new Error('Protocol Error');
  }
};

export default sendGetRequest;

interface protocolError {
  code: string;
  message: string;
}
