import { useState } from 'react';
import styled from 'styled-components';
import sendGetRequest from './utils/req/get';
import API from './utils/constants/apiConstant';

const Search = () => {
  const [searchData, setSearchData] = useState('');
  const {
    END_POINT: { HELLO },
  } = API;

  const getSearch = async () => {
    const response = await sendGetRequest(HELLO);
    setSearchData((prev) => response);
  };

  return (
    <>
      <div>
        백엔드에서 가져온 데이터입니다 :
        {searchData ? searchData : '데이터 없음'}
      </div>
      <ToggleBtn onClick={getSearch}>getSearch</ToggleBtn>
    </>
  );
};

export default Search;

const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: #2b2b2b;
  color: whitesmoke;
  font-weight: 600;
  transition: ease-in-out 0.2s;

  :hover {
    cursor: pointer;
    background: whitesmoke;
    color: #2b2b2b;
  }
`;
