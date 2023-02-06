import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { PartyIcon } from '/ui/icons/Customs.js';

const FunButton = props => {

  const [ fun, setFun ] = useState(false);

  useEffect(() => {
    handleFun()
  }, []);

  const handleFun = () => {
    confetti({
      particleCount: 150,
      startVelocity: 30,
      spread: 720,
      origin: {
        y: 0.15,
      },
    });
  };

  return (
    <Grid item style={{ margin: 4 }} >
      <Paper style={{ borderRadius: '50%', padding: 2 }} >
        <Tooltip title='PRESS 4 FUN' >
          <IconButton
            aria-label='press for fun'
            onClick={event => handleFun(event)}
            style={{ padding: 4 }}
          >
            <PartyIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </Grid>
  )
};

export default FunButton;
