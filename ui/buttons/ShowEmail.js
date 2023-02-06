import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CustomModalStyled } from '/styled/Dialogs.js';
import { BlueButton } from '/styled/Buttons.js';

const ShowEmail = props => {

  const {
    open,
    handleClose
  } = props;

  return (
    <CustomModalStyled
      open={Boolean(open)}
      onClose={handleClose}
      maxWidth='240px'
      maxHeight='240px'
    >
      <Grid container item xs={12} style={{ flex: 1, flexFlow: 'column' }} >
        <Grid container item flex='1' justifyContent='center' alignItems='center' style={{ flexFlow: 'column', padding: '36px 12px 24px' }} >
          <Typography variant='h4' >
            {`Contact Email`}
          </Typography>
          <Typography variant='cn' style={{ paddingTop: 4 }} >
            {`maxhelsel@pm.me`}
          </Typography>
        </Grid>
        <div style={{ width: '100%', padding: 12 }} >
          <BlueButton aria-label='close' fullWidth onClick={handleClose} >
            {`Close`}
          </BlueButton>
        </div>
      </Grid>
    </CustomModalStyled>
  )
}

export default ShowEmail;
