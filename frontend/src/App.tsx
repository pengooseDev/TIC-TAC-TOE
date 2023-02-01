import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import GlobalStyle from './utils/GlobalStyle';
import { isDarkAtom } from './atom';
import { useRecoilState } from 'recoil';
import GetSearch from './api/getSearch';

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <GetSearch />
    </ThemeProvider>
  );
}

export default App;
