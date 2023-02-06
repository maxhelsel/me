import { Noto_Sans } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const noto = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

const theme = (dark) => createTheme({
  palette: {
    mode: dark ? 'dark' : 'light',
    primary: {
      main: '#536dfe',
      black: '#234',
      white: '#fff'
    },
    background: {
      default: dark ? '#112233' : '#fff',
    },
    secondary: {
      main: '#3d5afe',
    },
    error: {
      main: '#f44336',
    },
    styleOverrides: {
      MuiTypography: {
        fontFamily: noto.style.fontFamily
      }
    },
    osc: {
      class: dark ? 'os-theme-light' : 'os-theme-dark'
    },
    views: {
      shadow: dark ? '0px 1px 10px 1px rgba(0, 0, 0, .6)' : '0px 1px 6px 1px rgba(0, 0, 0, .2)',
    },
    transitions: {
      all200: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      all300: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      border300: 'borderColor 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    colors: {
      feedBar: dark ? '#000' : '#f44336'
    },
    content: {
      paper: dark ? '#234' : '#FFFFFF',
      footer: dark ? '#000' : '#f3f5f7',
      border: dark ? '1px solid rgba(0, 255, 0, .2)' : '1px solid rgba(0, 0, 0, .08)',
      borderHover: '1px solid rgba(0, 0, 255, .3)',
      text: '#234',
      subtext: '#567',
      shadow: '0px 1px 3px 0px rgba(0, 0, 0, .25)',
      shadowHover: '0px 2px 6px 0px rgba(0, 0, 0, .35)'
    },

  },
  typography: {
    fontFamily: noto.style.fontFamily,
    h4: {
      fontSize: '1rem',
      lineHeight: '2rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? 'lime' : '#234',
      fontWeight: 600
    },
    h5: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? 'lime' : '#234',
      fontWeight: 500
    },
    h6: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: '#567',
      fontWeight: 'normal'
    },
    b1: {
      fontSize: '.8125rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? 'lime' : '#234',
      fontWeight: 600
    },
    b2: {
      fontSize: '.8125rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? '#eee' : '#567',
      fontWeight: 'normal'
    },
    link: {
      fontSize: '.8125rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? '#18ffff' : 'blue',
      fontWeight: 'normal'
    },
    fine: {
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontFamily: noto.style.fontFamily,
      color: dark ? 'rgba(255, 255, 255, .7)' : '#456',
      fontWeight: 'normal'
    },

  },
});

export default theme;
