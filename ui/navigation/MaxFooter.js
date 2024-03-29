import React from 'react';
import Image from 'next/image';

import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { ImageWrapperStyled } from '/styled/Images.js';
import { FooterContainerStyled, FooterBoxStyled } from '/styled/Boxes.js';
import { GitHubIcon } from '/ui/icons/Customs.js';

import LimeLogo from '/public/maxLogoLime.png';
import DarkLogo from '/public/maxLogoDark.png';

const MaxFooter = ({ dark }) => {

  const aspectRatio = ((272/446) * 100);

  return (
    <FooterContainerStyled >
      <FooterBoxStyled >
        <Grid container item style={{ flexFlow: 'row', paddingBottom: 24 }} >
          <div style={{ width: '100%', height: '100%', maxWidth: '100px', position: 'relative' }} >
            <ImageWrapperStyled ratio={`${aspectRatio}%`} >
              {dark
                ? <Image src={LimeLogo} alt="max" fill style={{ objectFit: 'cover' }} sizes="50vw" />
                : <Image src={DarkLogo} alt="max" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              }
            </ImageWrapperStyled>
          </div>
          <Grid container item justifyContent='flex-end' alignItems='center' style={{ flexFlow: 'row' }} >
            <Typography display='inline' variant='b1' textAlign='right' style={{ paddingRight: 8 }} >
              {`Made with`}
              <span style={{ color:'red'}} >
                {` ♥`}
              </span>
            </Typography>
            <Tooltip title='Site code' >
              <IconButton component={Link} href='https://github.com/maxhelsel/me' target='_blank' rel='noopener' >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Typography component='p' variant='fine' style={{ paddingTop: 12 }} >
          {`Copyright © Max Helsel. All Rights Reserved.`}
        </Typography>
        <Typography component='p' variant='fine' style={{ paddingTop: 12 }} >
          {`Any financial data on this site is delayed. You should not construe any such information or other material as investment, financial, or other advice. Nothing contained on this website constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities or other financial instruments.`}
        </Typography>
      </FooterBoxStyled>
    </FooterContainerStyled>
  )
};

export default MaxFooter;
