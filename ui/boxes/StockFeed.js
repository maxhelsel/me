import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Carousel from 'nuka-carousel';
import { TrendIcon } from '/ui/icons/Customs.js';

const StrikeInfo = ({ ticker, value, fallback }) => {

  let gained = Boolean(value && value.o && value.c && (value.o > value.c));
  let delta = value && value.o && value.c
    ? (((value.o - value.c) / value.o) * 100)
    : undefined;

  return (
    <>
      <Typography variant='b1' display='inline' style={{ color: 'white', paddingRight: 4 }} >
        {value?.c || fallback}
      </Typography>
      <TrendIcon
        size={20}
        darkColor
        down={(!value && ticker !== 'uvxy') ? false : !gained}
        color={((!value && ticker !== 'uvxy') || gained) ? 'lime' : 'tomato'}
      />
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
    { ticker: 'nvda', value: (nvdaObj && nvdaObj[0]) || undefined, fallback: 209.11 },
    { ticker: 'spy', value: (spyObj && spyObj[0]) || undefined, fallback: 401.22 },
    { ticker: 'uvxy', value: (uvxyObj && uvxyObj[0]) || undefined, fallback: 5.3 },
    { ticker: 'qqq', value: (qqqObj && qqqObj[0]) || undefined, fallback: 304.88 },
    { ticker: 'mdb', value: (mdbObj && mdbObj[0]) || undefined, fallback: 221.4 }
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
              <StrikeInfo
                ticker={item.ticker}
                value={item.value}
                fallback={item.fallback}
              />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  )
};

export default StockFeed;
