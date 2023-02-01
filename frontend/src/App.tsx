import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import GlobalStyle from './utils/GlobalStyle';
import { isDarkAtom } from './atom';
import { useRecoilState } from 'recoil';
import GetData from './api/fetch';

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <GetData />
    </ThemeProvider>
  );
}

export default App;
