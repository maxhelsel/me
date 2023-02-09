import React, { useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import InfoBox from '/ui/boxes/InfoBox.js';
import { FaceliftTabs, FaceliftFooter } from '/styled/Facelifts.js';
import { ImageRatioBox } from '/styled/Images.js';
import { BoxBorderStyled } from '/styled/Boxes.js';

const Southwest = props => {

  const [ step, setStep ] = useState(2);
  const handleStep = (event, value) => {
    setStep(value)
  };

  return (
    <Grid container item xs={12} style={{ position: 'relative', marginBottom: 48 }} >
      <BoxBorderStyled container item flex='1' flexDirection='column' flexWrap='nowrap' justifyContent='flex-end' style={{ padding: 0, marginTop: 24 }} >
        <Grid container item flexWrap='nowrap' style={{ padding: props.mobile ? '12px 8px 12px' : 12 }} >
          <InfoBox
            title='Southwest Airlines'
            titleLink='https://southwest.com'
            icon={<Image src='/swLogo.png' height={32} width={32} alt='sw' />}
            padding='0px'
            italic
            textLines={[
              `The animation is fun, but it turned out too "cartoony" I think`
            ]}
          />
          <Grid item >
            <FaceliftFooter newLink='https://facelift-sw.vercel.app/' />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ position: 'relative' }} >
          <ImageRatioBox ratio='62.5%' >
            {step === 1
              ? <Image src='/swOld.png' fill style={{ objectFit: 'cover' }} alt='old bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
              : <Image src='/swNew.png' fill style={{ objectFit: 'cover' }} alt='new bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
            }
          </ImageRatioBox>
        </Grid>
      </BoxBorderStyled>
      <FaceliftTabs
        step={step}
        handleStep={handleStep}
      />
    </Grid>
  )
};

export default Southwest;
