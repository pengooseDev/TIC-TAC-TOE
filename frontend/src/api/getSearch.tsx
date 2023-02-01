import axios from 'axios';
import API from '../utils/constants/apiConstant';

const getSearch = async () => {
  const { END_POINT } = API;

  try {
    const searchResponse = await axios.get(END_POINT.HELLO);
    const { data } = searchResponse;

    return data;
  } catch (error) {
    const ErrorType = error as protocolError;

    if (ErrorType.code === 'ENOENT') throw new Error('Unusable API EndPoint');
    throw new Error('Protocol Error');
  }
};

export default getSearch;

interface protocolError {
  code: string;
  message: string;
}
