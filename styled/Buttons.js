import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const OrangeButton = styled(Button)(({ theme }) => ({
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  fontWeight: 600,
  background: '#fff3e0',
  color: '#bf360c',
  borderColor: '#bf360c',
  '&:hover': {
    background: '#ffe0b2'
  }
}));

export const BlueButton = styled(Button)(({ theme }) => ({
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  fontWeight: 600,
  background: '#e3f2fd',
  color: '#0d47a1',
  borderColor: '#0d47a1',
  '&:hover': {
    background: '#bbdefb'
  }
}));
