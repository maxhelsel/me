import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import { SunIcon, MoonIcon } from '/ui/icons/Customs.js';

const LandingLogo = props => {

  return (
    <Grid container justifyContent='flex-end' style={{ maxWidth: '880px', margin: '0 auto', position: 'relative'}} >
      <Grid container item alignItems='flex-start' style={{ width: 'auto', flexFlow: 'row', position: 'absolute', top: 32, zIndex: 2, paddingRight: 12 }} >
        <Paper style={{ display: 'flex', borderRadius: '50%', padding: 2, margin: 4 }} >
          <Tooltip title='Toggle theme' >
            <IconButton
              aria-label='toggle theme'
              onClick={() => props.toggleMode()}
              style={{ padding: 4 }}
            >
              {props.dark ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default LandingLogo;
