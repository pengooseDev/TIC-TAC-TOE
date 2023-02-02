import ThemeToggle from './components/ThemeToggle';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      <ThemeToggle />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 0;
  width: 50px;
  height: 50px;
  background: rgba(122, 122, 122, 0.2);
  border-radius: 5px;
  backdrop-filter: 3px;
`;
