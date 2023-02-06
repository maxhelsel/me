import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ExpandMoreButton } from '/styled/Buttons.js';
import { BoxBorderStyled, ChipBoxStyled } from '/styled/Boxes.js';
import { skills, skillsFront, skillsBack, skillsTools } from '/utils/skills.js';

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
        {open
          ? <>
              <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
                {skillsFront.map((item, index) => (
                  <ChipBoxStyled
                    key={index}
                    label={item}
                    mobile={true}
                    bgColor='#e3f2fd'
                    textColor='blue'
                  />
                ))}
              </Grid>
              <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
                {skillsBack.map((item, index) => (
                  <ChipBoxStyled
                    key={index}
                    label={item}
                    mobile={true}
                    bgColor='#e0f2f1'
                    textColor='#004d40'
                  />
                ))}
              </Grid>
              <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
                {skillsTools.map((item, index) => (
                  <ChipBoxStyled
                    key={index}
                    label={item}
                    mobile={true}
                    bgColor='#f3e5f5'
                    textColor='#4a148c'
                  />
                ))}
              </Grid>
            </>
          : <Grid container item flex='0' alignItems='flex-start' style={{ flexFlow: 'wrap row', paddingTop: 12 }} >
              {skills.map((item, index) => (
                <ChipBoxStyled
                  key={index}
                  label={item.label}
                  mobile={true}
                  bgColor={item.group === 1
                    ? '#e3f2fd'
                    : item.group === 2
                      ? '#e0f2f1'
                      : '#f3e5f5'
                  }
                  textColor={item.group === 1
                    ? 'blue'
                    : item.group === 2
                      ? '#004d40'
                      : '#4a148c'
                  }
                />
              ))}
            </Grid>
        }
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
