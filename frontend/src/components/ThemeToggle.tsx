import styled from 'styled-components';
import { isDarkAtom } from '../atom';
import { useRecoilState } from 'recoil';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const toggleHandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <input type="checkbox" id="toggle" hidden></input>
      <ToggleButton onClick={toggleHandler} isDark={isDark} />
    </>
  );
};

export default ThemeToggle;

interface ToggleButtonProps {
  isDark: boolean;
  htmlFor: string;
}

const ToggleButton = styled.label.attrs({
  htmlFor: 'toggle',
})<ToggleButtonProps>`
  background: ${({ isDark, theme }) => (isDark ? theme.text : theme.text)};
  width: 30px;
  height: 30px;
  position: absolute;
  padding: 10px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
