import React from 'react';
import Typography from '@mui/material/Typography';
import BravoCare from '/ui/facelifts/BravoCare.js';
import Milkbone from '/ui/facelifts/Milkbone.js';
import Southwest from '/ui/facelifts/Southwest.js';

const LandingFacelifts = props => {
  return (
    <>
      <Milkbone {...props} />
      <Southwest {...props} />
      <BravoCare {...props} />
    </>
  )
};

export default LandingFacelifts;
