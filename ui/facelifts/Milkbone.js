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
            title='Milkbone'
            titleLink='https://www.milkbone.com'
            icon={<Image src='/milkboneLogo.png' height={14} width={32} alt='sw' />}
            padding='0px'
            italic
            textLines={[
              `New landing area focused on real dog pics from happy customers`
            ]}
          />
          <Grid item >
            <FaceliftFooter newLink='https://facelift-milkbone.vercel.app/' />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ position: 'relative' }} >
          <ImageRatioBox ratio='62.5%' >
            {step === 1
              ? <Image src='/oldMilkbone.png' fill style={{ objectFit: 'cover' }} alt='old bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
              : <Image src='/newMilkbone.png' fill style={{ objectFit: 'cover' }} alt='new bravocare' sizes="(max-width: 768px) 100vw,(max-width: 1700px) 50vw" />
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
