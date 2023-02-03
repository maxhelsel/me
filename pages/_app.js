import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '/theme/StartTheme.js';
import createEmotionCache from '/theme/createEmotionCache.js';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import objectSupport from 'dayjs/plugin/objectSupport';

import 'normalize.css/normalize.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import '/styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => {

  const router = useRouter();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache} >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
};

export default MyApp;
