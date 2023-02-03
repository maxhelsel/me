import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { noto } from '/theme/StartTheme.js';

export default function Document() {
  return (
    <Html className={noto.className} >
      <Head />
      <body className={noto.className} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};
