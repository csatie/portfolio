import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FullStack Developer - Camila Satie</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
