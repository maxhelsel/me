import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import landingStyles from '/styles/landing.module.css';
import { OrangeButton, BlueButton } from '/styled/Buttons.js';

const LandingNavbar = props => {
  return (
    <AppBar className={landingStyles.navAppbarNaked} >
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
  )
};

export default LandingNavbar;
