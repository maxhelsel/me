import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const ImageContainerStyled = styled(Box)(({ theme }) => ({
  display: 'block',
  width: '100%',
  position: 'relative',
  borderTop: theme.palette.content.border,
  borderBottom: theme.palette.content.border,
}));

export const ImageWrapperStyled = styled(Box, {
  shouldForwardProp: prop => prop !== 'ratio'
})(({ theme, ratio }) => ({
  display: 'flex',
  position: 'relative',
  paddingTop: ratio ? ratio : '56.25%'
}));

export const ImageRatioBox = ({ ratio, children }) => {
  return (
    <ImageContainerStyled >
      <ImageWrapperStyled ratio={ratio || null} >
        {children}
      </ImageWrapperStyled>
    </ImageContainerStyled>
  );
};
