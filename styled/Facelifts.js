import React from 'react';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { ExternalIcon } from '/ui/icons/Customs.js';
import { StepTabButton, StepTabBar } from '/styled/Buttons.js';

const FaceliftTabsContainer = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  bottom: -32,
  justifyContent: 'center',
  zIndex: 2
}));

const FaceliftTabsPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.content.paper,
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  borderRadius: 8,
  padding: 12,
  [theme.breakpoints.down('sm')]: {
    padding: 8
  },
}));

export const FaceliftTabs = props => {

  const {
    step,
    handleStep
  } = props;

  return (
    <FaceliftTabsContainer container >
      <FaceliftTabsPaper elevation={2} >
        <StepTabButton
          aria-label='see original'
          onClick={event => handleStep(event, 1)}
          hot={Boolean(step === 1)}
          style={{ marginRight: 8 }}
        >
          {`Before`}
        </StepTabButton>
        <StepTabButton
          aria-label='see new'
          onClick={event => handleStep(event, 2)}
          hot={Boolean(step === 2)}
        >
          {`After`}
        </StepTabButton>
      </FaceliftTabsPaper>
    </FaceliftTabsContainer>
  )
};

export const FaceliftFooter = ({ newLink }) => {
  return (
    <Button
      component={Link}
      href={newLink || '/'}
      target='_blank'
      style={{ textTransform: 'none', padding: '0px' }}
    >
      <Grid container item flexWrap='nowrap' alignItems='center' >
        <Typography noWrap variant='b1' style={{ paddingLeft: 12 }} >
          {`Full Demo`}
        </Typography>
        <Avatar style={{ background: 'unset' }} >
          <ExternalIcon />
        </Avatar>
      </Grid>
    </Button>
  )
};
