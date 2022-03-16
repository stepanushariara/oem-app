import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { globalCss } from 'config/stithces.conf';
import '@styles/minireset.min.css';
import '@styles/rush.min.css';

const globalStyles = globalCss({
  body: {
    fontFamily: '$sans',
    fontSize: '$fsDisplay',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider defaultTheme="light" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
