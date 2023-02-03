import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import GlobalStyle from './utils/GlobalStyle';
import { isDarkAtom } from './atom';
import { useRecoilState } from 'recoil';
import Search from './Search';
import Nav from './Nav';

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Search />
      <Nav />
    </ThemeProvider>
  );
}

export default App;
