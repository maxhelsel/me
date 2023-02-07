import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ExpandMoreButton } from '/styled/Buttons.js';
import { BoxBorderStyled, ChipBoxStyled } from '/styled/Boxes.js';
import {
  front0,
  front1,
  back0,
  back1,
  misc0,
  misc1
} from '/utils/skills.js';

const LandingTools = props => {

  const [ open, setOpen ] = useState(false);
  const toggleOpen = event => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <BoxBorderStyled
      container item flex='1'
      flexDirection='column'
      flexWrap='nowrap'
      justifyContent='flex-end'
      mobile={props.mobile}
      style={{ marginTop: 24 }}
    >
      <Grid container item flexDirection='column' flexWrap='nowrap' style={{ padding: 4 }} >
        <Typography variant='h4' style={{ padding: 4 }} >
          {`Favorite tools`}
        </Typography>

        <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
          {front0.map((item, index) => (
            <ChipBoxStyled
              key={index}
              label={item}
              mobile={true}
              bgColor='#e3f2fd'
              textColor='blue'
            />
          ))}
          {open
            ? front1.map((item, index) => (
                <ChipBoxStyled
                  key={`1-${index}`}
                  label={item}
                  mobile={true}
                  bgColor='#e3f2fd'
                  textColor='blue'
                />
              ))
            : null
          }
        </Grid>
        <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
          {back0.map((item, index) => (
            <ChipBoxStyled
              key={index}
              label={item}
              mobile={true}
              bgColor='#e0f2f1'
              textColor='#004d40'
            />
          ))}
          {open
            ? back1.map((item, index) => (
                <ChipBoxStyled
                  key={`2-${index}`}
                  label={item}
                  mobile={true}
                  bgColor='#e0f2f1'
                  textColor='#004d40'
                />
              ))
            : null
          }
        </Grid>
        <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
          {misc0.map((item, index) => (
            <ChipBoxStyled
              key={index}
              label={item}
              mobile={true}
              bgColor='#f3e5f5'
              textColor='#4a148c'
            />
          ))}
          {open
            ? misc1.map((item, index) => (
                <ChipBoxStyled
                  key={`3-${index}`}
                  label={item}
                  mobile={true}
                  bgColor='#f3e5f5'
                  textColor='#4a148c'
                />
              ))
            : null
          }
        </Grid>
        <Grid container item flex='0' alignItems='center' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
          <ExpandMoreButton expanded={Boolean(open)} onClick={event => toggleOpen(event)} />
          <Typography variant='b2' style={{ padding: 4 }} >
            {open ? `Show less` : `Show a few more`}
          </Typography>
        </Grid>
      </Grid>
    </BoxBorderStyled>
  )
};

export default LandingTools;
