import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import LandingLogo from '/ui/navigation/LandingLogo.js';
import startTheme from '/theme/StartTheme.js';
import createEmotionCache from '/theme/createEmotionCache.js';

import 'normalize.css/normalize.css';
import '/styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Logo = ({ dark }) => {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <LandingLogo toggleMode={colorMode.toggleColorMode} dark={dark} />
  );
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => {

  const router = useRouter();
  const [dark, setDark] = React.useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setDark((prevDark) => !prevDark);
    },
  }), []);

  const theme = React.useMemo(() => startTheme(dark), [dark]);

  return (
    <ColorModeContext.Provider value={colorMode} >
      <CacheProvider value={emotionCache} >
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Logo dark={dark} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  )
};

export default MyApp;
