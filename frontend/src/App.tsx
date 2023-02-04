import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import GlobalStyle from './utils/GlobalStyle';
import { isDarkAtom } from './atom';
import { useRecoilState } from 'recoil';
import Search from './Search';
import Nav from './Nav';
import styled from 'styled-components';

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <Search />
        <Nav />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
