import React, { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import useMightyMouse from 'react-hook-mighty-mouse';

import Grid from '@mui/material/Grid';
import { EyeIcon, SunglassesIcon } from '/ui/icons/Customs.js';

import MyPic from '/public/maxBW285x220.png';
import CowboyHat from '/public/cowboyHat.png';
import WizardHat from '/public/wizardHat.png';
import MaskHat from '/public/gasMaskHat.png';

const Eye = styled('div', {
  shouldForwardProp: (prop) => prop !== 'background'
})(({ theme, background }) => ({
  borderRadius: '50%',
  height: 40,
  width: 40,
  backgroundColor: background ? background :'#e040fb',
  position: 'relative',
  display: 'flex',
  margin: '1px',
  transition: `all 50ms ease`,
  '&:hover': {
    background: '#f8c6c6'
  }
}));

const Pupil = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'absolute',
  backgroundColor: '#382e25',
  borderRadius: '50%',
  width: 15,
  height: 15,
  left: 25,
  top: 12
}));

const MyEyes = props => {

  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });

  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
  const rotateRightEye = `rotate(${-angleRightEye}deg)`;

  return (
    <Grid container item flexWrap='nowrap' style={{ position: 'absolute', justifyContent: 'center', top: 42, paddingRight: 3 }} >
      <Eye id='left-eye' background={props.eyes || undefined} style={{ transform: rotateLeftEye }} >
        <Pupil />
      </Eye>
      <Eye id='right-eye' background={props.eyes || undefined} style={{ transform: rotateRightEye }} >
        <Pupil />
      </Eye>
    </Grid>
  )
};

const MySunglasses = props => {

  return (
    <Grid container item flexWrap='nowrap' style={{ position: 'absolute', justifyContent: 'center', top: 56 }} >
      <div className="glasses" >
        <div className="g-top" />
        <div className="g-left glass" />
        <div className="g-right glass" />
      </div>
    </Grid>
  )
};



const WearHat = props => {
  if (!props.hat) {
    return null
  };
  if (props.hat === 1) {
    return (
      <Grid container item flexWrap='nowrap' style={{ position: 'absolute', justifyContent: 'center', top: -28, left: -3 }} >
        <Image priority src={CowboyHat} alt='cowboy hat' key={'CowboyHat'} />
      </Grid>
    )
  };
  if (props.hat === 2) {
    return (
      <Grid container item flexWrap='nowrap' style={{ position: 'absolute', justifyContent: 'center', top: -64, left: -2 }} >
        <Image priority src={WizardHat} alt='wizard hat' key={'WizardHat'} />
      </Grid>
    )
  };
  return (
    <Grid container item flexWrap='nowrap' style={{ position: 'absolute', justifyContent: 'center', top: 23, left: 12 }} >
      <Image priority src={MaskHat} alt='gas mask' key={'MaskHat'} />
    </Grid>
  );
};

const MeAndMyEyes = props => {

  const {
    shades,
    eyes,
    hat
  } = props;

  return (
    <Grid container item style={{ maxWidth: 285, position: 'relative', justifyContent: 'center' }} >
      <Image priority src={MyPic} alt='max' />
      {eyes
        ? <MyEyes eyes={eyes} />
        : null
      }
      {shades
        ? <MySunglasses />
        : null
      }
      <WearHat hat={hat} />
    </Grid>
  )
};

export default MeAndMyEyes;
