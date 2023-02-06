import React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { Link as MuiLink } from '@mui/material/Link';
import { ExternalIcon } from '/ui/icons/Customs.js';
import { StepTabButton, StepTabBar } from '/styled/Buttons.js';

export const FaceliftTabs = props => {

  const {
    step,
    handleStep
  } = props;

  return (
    <>
      <StepTabButton
        aria-label='see original'
        onClick={event => handleStep(event, 1)}
        hot={Boolean(step === 1)}
        style={{ marginRight: 12 }}
      >
        {`Before`}
        <StepTabBar hot={Boolean(step === 1)} />
      </StepTabButton>
      <StepTabButton
        aria-label='see new'
        onClick={event => handleStep(event, 2)}
        hot={Boolean(step === 2)}
      >
        {`After`}
        <StepTabBar hot={Boolean(step === 2)} />
      </StepTabButton>
    </>
  )
};

export const FaceliftFooter = ({ newLink }) => {
  return (
    <Button
      component={MuiLink}
      href={newLink || '/'}
      target='_blank'
      style={{ textTransform: 'none', padding: '0px', position: 'absolute', bottom: 12, right: 12, background: 'rgba(0, 0, 0, .8)', color: 'white' }}
    >
      <Grid container item flexWrap='nowrap' alignItems='center' >
        <Typography variant='b1' style={{ paddingLeft: 12, color: 'white' }} >
          {`Full Demo`}
        </Typography>
        <Avatar style={{ background: 'unset' }} >
          <ExternalIcon color='white' />
        </Avatar>
      </Grid>
    </Button>
  )
};
