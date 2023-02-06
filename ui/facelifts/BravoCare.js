import React, { useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import InfoBox from '/ui/boxes/InfoBox.js';
import { FaceliftTabs, FaceliftFooter } from '/styled/Facelifts.js';
import { ImageRatioBox } from '/styled/Images.js';
import { BoxBorderStyled } from '/styled/Boxes.js';

import BcLogo from '/public/bravocareLogo.png';
import OldBravocare from '/public/oldBravocare.png';
import NewBravocare from '/public/newBravocare.png';

const BravoCare = props => {

  const [ step, setStep ] = useState(2);
  const handleStep = (event, value) => {
    setStep(value)
  };

  return (
    <BoxBorderStyled container item flex='1' flexDirection='column' flexWrap='nowrap' justifyContent='flex-end' style={{ padding: 0, marginTop: 24 }} >
      <Grid container item flexWrap='nowrap' style={{ padding: props.mobile ? '12px 8px 12px' : 12 }} >
        <InfoBox
          title='BravoCare'
          link='https://bravocare.com'
          icon={<Image src={BcLogo} alt='bravocare' width={32} height={32} />}
          padding='0px'
          italic
          textLines={[
            `The "Uber" for nursing`
          ]}
        />
        <Grid container item flex='0' flexWrap='nowrap' alignItems='center' >
          <FaceliftTabs
            step={step}
            handleStep={handleStep}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} style={{ position: 'relative' }} >
        <ImageRatioBox ratio='62.5%' >
          {step === 1
            ? <Image src={OldBravocare} fill style={{ objectFit: 'cover' }} alt='old bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
            : <Image src={NewBravocare} fill style={{ objectFit: 'cover' }} alt='new bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
          }
        </ImageRatioBox>
        <FaceliftFooter newLink='https://demo-bravocare.vercel.app/' />
      </Grid>
    </BoxBorderStyled>
  )
};

export default BravoCare;
