import React from 'react';
import Typography from '@mui/material/Typography';
import BravoCare from '/ui/facelifts/BravoCare.js';

const LandingFacelifts = props => {
  return (
    <>
      <BravoCare {...props} />
      <Typography variant='h4' style={{ padding: '64px 16px 16px' }} >
        {`More coming soon...`}
      </Typography>
    </>
  )
};

export default LandingFacelifts;
