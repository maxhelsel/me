import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import LimeLogo from '/public/maxLogoLime.png';
import DarkLogo from '/public/maxLogoDark.png';

import landingStyles from '/styles/landing.module.css';

const LandingNavbar = props => {

  return (
    <AppBar className={landingStyles.navAppbarNaked} position='static' >
      <Toolbar disableGutters >
        <Grid container justifyContent='center' alignItems='flex-start' style={{ flexFlow: 'row', padding: '32px 8px 16px', margin: '0 auto', maxWidth: '880px' }} >
          <Grid container item style={{ maxWidth: 128, position: 'relative' }} >
            <Link href='/' style={{ display: 'flex', flex: 1 }} >
              <Grid container item style={{ maxWidth: 128, paddingLeft: 12, position: 'relative' }} >
                {props.dark
                  ? <Image priority src={LimeLogo} alt="max" height={78} width={128} />
                  : <Image priority src={DarkLogo} alt="max" height={78} width={128} />
                }
              </Grid>
            </Link>
          </Grid>
          {props.children || null}
        </Grid>
      </Toolbar>
    </AppBar>
  )
};

export default LandingNavbar;
