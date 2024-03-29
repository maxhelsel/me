import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Me from '/ui/max/Me.js';
import Manipulate from '/ui/max/Manipulate.js';

import LandingNavbar from '/ui/navigation/LandingNavbar.js';

import StockFeed from '/ui/boxes/StockFeed.js';
import ShowEmail from '/ui/buttons/ShowEmail.js';
import InfoBox from '/ui/boxes/InfoBox.js';

import { BoxBorderStyled } from '/styled/Boxes.js';
import { CodeIcon, CandleIcon, GitHubIcon, LinkedInIcon, MailIcon } from '/ui/icons/Customs.js';

import landingStyles from '/styles/landing.module.css';

const Landing = props => {

  const [ openMail, setOpenMail ] = useState(false);

  const handleOpen = () => setOpenMail(true);
  const handleClose = () => setOpenMail(false);

  const [ eyes, setEyes ] = useState('lime');
  const [ shades, setShades ] = useState(false);
  const [ hat, setHat ] = useState(0);

  useEffect(() => {
    handleInitialState()
  }, [props.mobile]);

  useEffect(() => {
    console.info(
      'Made with %c♥%c in America',
      'color: #e25555', 'color: unset'
    );
  }, []);

  const handleInitialState = () => {
    if (props.mobile) {
      setShades(true)
      setEyes(null)
    } else {
      setShades(false)
      setEyes('lime')
    }
  };

  const handleHat = (event, value) => {
    setHat(value)
  };

  const handleEyes = (event, value) => {
    if (shades) {
      setShades(false)
      setEyes(value)
    } else {
      setEyes(value)
    }
  };

  const handleClear = (event) => {
    setEyes(null)
    setShades(false)
    setHat(0)
  };

  const handleShades = (event) => {
    if (eyes) {
      setEyes(null)
      setShades(true)
    } else {
      setShades((prevShades) => !prevShades)
    }
  };

  return (
    <>
      <LandingNavbar {...props} >
        <Grid container item flex='1' />
        <Manipulate
          mobile={props.mobile}
          dark={props.dark}
          cleared={Boolean(!eyes && !shades && !hat)}
          handleClear={handleClear}
          eyes={eyes}
          shades={shades}
          hat={hat}
          handleHat={handleHat}
          handleEyes={handleEyes}
          handleShades={handleShades}
        />
      </LandingNavbar>
      <Grid container item style={{ flexFlow: 'column', maxWidth: 880 }} >
        <Grid container item style={{ flexFlow: 'column', alignItems: 'center', paddingTop: 48 }} >
          <Me eyes={eyes} hat={hat} shades={shades} />
          <StockFeed {...props} />
        </Grid>
        <Grid container item style={{ flexFlow: 'column', padding: props.mobile ? '24px 8px 8px' : '0px 8px', margin: '0 auto' }} >
          <BoxBorderStyled container item flex='1' flexDirection='column' flexWrap='nowrap' justifyContent='flex-end' mobile={props.mobile} >
            <Grid container item alignItems='flex-start' style={{ flexFlow: 'row', padding: 8 }} >
              <Grid container item flex='1' style={{ flexFlow: 'column', padding: '0px 0px 8px' }} >
                <Typography variant='h4' style={{ lineHeight: '1.5rem' }} >
                  {`Max Helsel`}
                </Typography>
                <Typography variant='b1' >
                  {`USA, Earth`}
                </Typography>
                <Typography variant='b2' >
                  {`I like patterns, logic, and building things`}
                </Typography>
                <Grid container item flex='0' style={{ flexFlow: 'column', paddingTop: 24 }} >
                  <InfoBox
                    padding='0px'
                    title={`Software Developer`}
                    icon={<CodeIcon color='blue' />}
                    iconBg='rgba(25, 25, 220, .1)'
                    textLines={[
                      `Full stack`
                    ]}
                  />
                  <InfoBox
                    title={`Options Trader`}
                    icon={<CandleIcon color='green' />}
                    iconBg='rgba(0, 225, 50, .2)'
                    padding='16px 0px 0px'
                    textLines={[
                      `Volatility and high volume ETFs`
                    ]}
                  />
                </Grid>
              </Grid>
              <Grid container item flex='0' flexWrap='nowrap' style={{ flexFlow: props.mobile ? 'column' : 'row', alignItems: 'center' }} >
                <IconButton component={Link} aria-label='link to github' href='https://github.com/maxhelsel' target='_blank' rel='noopener' >
                  <GitHubIcon />
                </IconButton>
                <IconButton component={Link} aria-label='link to linkedin' href='https://linkedin.com/in/maxhelsel' target='_blank' rel='noopener' >
                  <LinkedInIcon />
                </IconButton>
                <IconButton onClick={handleOpen} aria-label='show contact email' >
                  <MailIcon />
                </IconButton>
              </Grid>
            </Grid>
          </BoxBorderStyled>
        </Grid>
      </Grid>
      <ShowEmail
        open={Boolean(openMail)}
        handleClose={handleClose}
      />
    </>
  )
};

export default Landing;
