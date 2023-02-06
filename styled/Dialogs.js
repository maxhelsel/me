import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { TransitionGrow } from './Transitions.js';

const BackdropCurtain = styled(Backdrop)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, .5)'
    : 'rgba(236, 236, 255, .7)'
}));

const CustomDialogContent00 = styled(Grid)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  flexFlow: 'column',
  zIndex: 2,
  overflow: 'hidden',
  outline: 'none',
  padding: 0,
  [theme.breakpoints.up('sm')]: {
    padding: 24
  }
}));

const DialogPaperInner = styled(Grid, {
  shouldForwardProp: prop => (prop !== 'margin' && prop !== 'maxWidth' && prop !== 'maxHeight')
})(({ theme, margin, maxWidth, maxHeight }) => ({
  background: theme.palette.content.paper,
  flexFlow: 'column',
  position: 'relative',
  margin: '0px auto',
  flex: 1,
  height: '100%',
  boxShadow: theme.palette.views.shadow,
  [theme.breakpoints.down('xs')]: {
    paddingTop: 0,
    maxWidth: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    margin: margin || '68px auto 0px',
    borderRadius: '8px',
    maxWidth: maxWidth || 676,
    maxHeight: maxHeight || 676
  }
}));

const CustomViewModal = styled(Dialog)(({ theme }) => ({
  overflow: 'hidden',
  [`& .${dialogClasses.root}`]: {
    overflow: 'hidden'
  },
  [`& .${dialogClasses.container}`]: {
    overflow: 'hidden'
  },
  [`& .${dialogClasses.paper}`]: {
    overflow: 'hidden',
    verticalAlign: 'unset',
    background: 'transparent'
  }
}));

export const CustomModalStyled = props => {

  const {
    open,
    onClose,
    children,
    margin,
    maxWidth,
    maxHeight
  } = props;

  return (
    <CustomViewModal
      open={open}
      onClose={onClose}
      fullScreen
      disableEnforceFocus
      transitionDuration={300}
      TransitionComponent={TransitionGrow}
      slots={{ backdrop: BackdropCurtain }}
      sx={{ zIndex: 18000 }}
    >
      <CustomDialogContent00 container item xs={12} >
        <DialogPaperInner
          container item
          margin={margin || undefined}
          maxWidth={maxWidth || undefined}
          maxHeight={maxHeight || undefined}
        >
          {children || null}
        </DialogPaperInner>
      </CustomDialogContent00>
    </CustomViewModal>
  )
};
