import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Carousel from 'nuka-carousel';
import { TrendIcon } from '/ui/icons/Customs.js';

const StrikeInfo = ({ value }) => {

  let gained = Boolean(value && value.o && value.c && (value.o > value.c));
  let delta = value && value.o && value.c
    ? (((value.o - value.c) / value.o) * 100)
    : undefined;

  return (
    <>
      <Typography variant='b1' display='inline' style={{ color: 'white', paddingRight: 4 }} >
        {value?.c || ''}
      </Typography>
      <TrendIcon down={!gained} darkColor color={gained ? 'lime' : 'tomato'} size={20} />
    </>
  )
};

const StockFeed = props => {

  const {
    mobile,
    nvda,
    spy,
    uvxy,
    qqq,
    mdb
  } = props;

  const nvdaObj = nvda?.results || undefined;
  const spyObj = spy?.results || undefined;
  const uvxyObj = uvxy?.results || undefined;
  const qqqObj = qqq?.results || undefined;
  const mdbObj = mdb?.results || undefined;

  let tickerArr = [
    { ticker: 'nvda', value: (nvdaObj && nvdaObj[0]) || undefined },
    { ticker: 'spy', value: (spyObj && spyObj[0]) || undefined },
    { ticker: 'uvxy', value: (uvxyObj && uvxyObj[0]) || undefined },
    { ticker: 'qqq', value: (qqqObj && qqqObj[0]) || undefined },
    { ticker: 'mdb', value: (mdbObj && mdbObj[0]) || undefined }
  ];

  return (
    <Grid container item justifyContent='center' >
      <Grid container item justifyContent='center' style={{ background: '#000', maxWidth: 600, padding: 6, borderRadius: mobile ? 0 : 8 }} >
        <Carousel
          autoplay
          autoplayInterval={1500}
          withoutControls
          slidesToShow={props.mobile ? 3 : 5}
          wrapAround
          speed={500}
        >
          {tickerArr.map((item, index) => (
            <Grid container item key={index} justifyContent='center' alignItems='center' style={{ maxWidth: '120px', flexFlow: 'row' }} >
              <Typography variant='b1' display='inline' color='primary.white' style={{ padding: '0px 4px', textTransform: 'uppercase' }} >
                {item.ticker}
              </Typography>
              <StrikeInfo value={item.value} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  )
};

export default StockFeed;
