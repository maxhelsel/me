import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Grow from '@mui/material/Grow';

export const TransitionGrow = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});
