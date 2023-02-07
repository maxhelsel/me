import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { KeyDownIcon } from '/ui/icons/Customs.js';

export const BlueButton = styled(Button)(({ theme }) => ({
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  fontWeight: 600,
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .2)' : '#e3f2fd',
  color: theme.palette.mode === 'dark' ? 'lime' : '#0d47a1',
  borderColor: theme.palette.mode === 'dark' ? 'lime' : '#0d47a1',
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'lime' : '#bbdefb'
  }
}));

export const StepTabButton = styled(Button, {
  shouldForwardProp: prop => (prop !== 'hot')
})(({ theme, hot }) => ({
  fontFamily: theme.typography.fontFamily,
  background: theme.palette.mode === 'dark'
    ? hot ? 'lime' : 'rgba(255, 255, 255, .12)'
    : hot ? 'rgba(0, 0, 255, .14)' : 'rgba(0, 0, 0, .06)',
  color: theme.palette.mode === 'dark'
    ? hot ? '#000' : 'white'
    : hot ? '#651fff' : '#678',
  padding: '8px 16px',
  cursor: 'pointer',
  minWidth: '84px !important',
  fontSize: '.75rem !important',
  lineHeight: '1rem !important',
  fontWeight: 600,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '8px !important',
  textTransform: 'none !important',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? hot ? 'lime' : 'rgba(255, 255, 255, .16)'
      : hot ? 'rgba(0, 0, 255, .3)' : 'rgba(0, 0, 0, .12)'
  }
}));

const ExpandMoreButtonStyled = styled((props) => {
  const { expanded, padding, size, ...others } = props;
  return <IconButton {...others} />;
})(({ theme, expanded, padding }) => ({
  padding: padding ? padding : '4px',
  transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.palette.transitions.all300,
}));

export const ExpandMoreButton = props => {
  return (
    <ExpandMoreButtonStyled
      aria-expanded={Boolean(props.expanded)}
      aria-label="show more"
      expanded={Boolean(props.expanded)}
      padding={props.padding || undefined}
      {...props}
    >
      <KeyDownIcon size={props.size || 24} />
    </ExpandMoreButtonStyled>
  );
};
