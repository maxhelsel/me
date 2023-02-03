import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';

import landingStyles from '/styles/landing.module.css';
import { OrangeButton, BlueButton } from '/styled/Buttons.js';

const ScrollNavbarCore = props => {
  return (
    <Collapse in={Boolean(props.trigger)} collapsedSize='0px' >
      <AppBar className={landingStyles.navAppbar} style={{ opacity: props.trigger ? 1 : 0 }}>
        <Toolbar>
          <Grid container sx={{ flexFlow: 'row', maxWidth: 1200, padding: '8px 8px', margin: '0 auto' }} >
            <Grid container item sx={{ maxWidth: 128, position: 'relative' }} >
              <Link href='/' style={{ display: 'flex', flex:1 }} >
                <Grid container item sx={{ maxWidth: 128, position: 'relative' }} >
                  <Image src="/smiley.png" alt="bc" fill style={{ objectFit: 'contain' }} />
                </Grid>
              </Link>
            </Grid>
            <Grid container item sx={{ flex: 1, flexFlow: 'row', alignItems: 'center', justifyContent: 'flex-end' }} >
              <div className='flex' style={{ padding: '16px 0px' }} >
                <OrangeButton variant='outlined' color='secondary' sx={{ marginRight: 2, textTransform: 'none' }} >
                  {`Sign up`}
                </OrangeButton>
                <BlueButton variant='outlined' >
                  {`Login`}
                </BlueButton>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Collapse>
  )
};

const ScrollNavbar = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 220
  });

  return (
    <ScrollNavbarCore trigger={trigger} />
  )
};

export default ScrollNavbar;
