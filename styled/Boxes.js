import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

export const FooterContainerStyled = styled(Grid, {
  shouldForwardProp: prop => prop !== 'mobile'
})(({ theme, mobile }) => ({
  overflow: 'hidden',
  padding: mobile ? 12 : 36,
  borderTop: theme.palette.content.border,
  background: theme.palette.content.footer
}));

export const FooterBoxStyled = styled(Grid)(({ theme }) => ({
  maxWidth: 880,
  padding: '36px 0px 24px',
  margin: '0 auto',
  flexFlow: 'column',
}));

export const BoxBorderStyled = styled(Grid, {
  shouldForwardProp: prop => (prop !== 'highlight' && prop !== 'padding' && prop !== 'borderRadius' && prop !== 'mobile')
})(({ theme, highlight, padding, borderRadius, mobile }) => ({
  overflow: 'hidden',
  borderRadius: borderRadius || '6px',
  padding: padding ? padding : mobile ? '8px 4px' : '16px',
  transition: highlight ? theme.palette.transitions.border300 : undefined,
  border: mobile ? 'unset !important' : theme.palette.content.border,
  '&:hover': {
    border: highlight ? theme.palette.content.borderHover : undefined
  }
}));

export const ChipBoxStyled = styled(Chip, {
  shouldForwardProp: prop => (prop !== 'bgColor' && prop !== 'textColor' && prop !== 'mobile')
})(({ theme, bgColor, textColor, mobile }) => ({
  borderRadius: '20px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.16)' : bgColor ? bgColor : undefined,
  color: theme.palette.mode === 'dark' ? 'white' : textColor ? textColor : undefined,
  padding: mobile ? 4 : 6,
  margin: 4,
  fontSize: mobile ? '.75rem' : '.8125rem'
}));
