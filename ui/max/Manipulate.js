import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import FunButton from '/ui/buttons/FunButton.js';
import EyePicker from '/ui/buttons/EyePicker.js';
import HatPicker from '/ui/buttons/HatPicker.js';
import { SunglassesIcon, FaceIcon } from '/ui/icons/Customs.js';

const ManipulateContainer = styled(Grid, {
  shouldForwardProp: prop => (prop !== 'mobile')
})(({ theme, mobile }) => ({
  flexFlow: mobile ? 'column' : 'row',
  marginRight: mobile ? 0 : 48,
  paddingRight: mobile ? 12 : undefined,
  top: mobile ? 80 : undefined,
  position: mobile ? 'absolute' : 'relative'
}));

const Manipulate = props => {

  const {
    mobile,
    dark,
    cleared,
    eyes,
    shades,
    hat,
    handleClear,
    handleHat,
    handleEyes,
    handleShades
  } = props;

  return (
    <ManipulateContainer container item mobile={props.mobile} justifyContent='flex-end' alignItems={props.mobile ? 'flex-end' : 'center'} >
      <FunButton />
      <EyePicker
        dark={dark}
        mobile={mobile}
        eyes={eyes}
        handleEyes={handleEyes}
      />
      <HatPicker
        dark={dark}
        mobile={mobile}
        handleHat={handleHat}
        hat={hat}
      />
      <Grid item style={{ margin: 4 }} >
        <Paper style={{ borderRadius: '50%', padding: 2 }} >
          <Tooltip title='Cool Shades' >
            <IconButton
              aria-label={Boolean(shades) ? 'hide eyes' : 'show eyes'}
              onClick={event => handleShades(event)}
              style={{ padding: 4, background: Boolean(shades) ? dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)' : undefined }}
            >
              <SunglassesIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
      <Grid item style={{ margin: 4 }} >
        <Paper style={{ borderRadius: '50%', padding: 2 }} >
          <Tooltip title='FACE REVEAL' >
            <IconButton
              aria-label='hide overlays'
              onClick={event => handleClear(event)}
              style={{ padding: 4, background: Boolean(cleared) ? dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)' : undefined }}
            >
              <FaceIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
      {mobile
        ? null
        : <div style={{ margin: 4, height: 24, width: 2, background: '#eee' }} />
      }
    </ManipulateContainer>
  )
};

export default Manipulate;
