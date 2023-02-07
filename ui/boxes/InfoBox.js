import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { CheckIcon } from '/ui/icons/Customs.js';

const IconHolderStyled = styled(Avatar, {
  shouldForwardProp: (prop) => (prop !== "bgColor")
})(({ theme, bgColor }) => ({
  display: 'flex',
  position: 'relative',
  padding: 8,
  borderRadius: 4,
  maxWidth: 40,
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .12)' : bgColor ? bgColor : 'unset'
}));

const InfoBox = props => {

  const {
    padding,
    italic,
    children,
    icon,
    iconBg,
    title,
    link,
    titleLink,
    textLines,
    bulletLines,
    pendingLines
  } = props;

  return (
    <Grid container item flexWrap='nowrap' alignItems='flex-start' style={{ padding: padding ? padding : '12px 0px 0px' }} >
      <IconHolderStyled bgColor={iconBg} >
        {icon}
      </IconHolderStyled>
      <Grid container item flexDirection='column' justifyContent='center' alignItems='flex-start' style={{ paddingLeft: 12 }} >
        {titleLink
          ? <a href={titleLink} target='_blank' rel='nofollow noopener' >
              <Typography variant='titleLink' >
                {title || ''}
              </Typography>
            </a>
          : <Typography variant='b1' >
              {title || ''}
            </Typography>
        }
        {link
          ? <Typography variant='link' style={{ paddingBottom: 4 }} >
              <a href={link} target='_blank' rel='nofollow noopener' >
                {link}
              </a>
            </Typography>
          : null
        }
        {textLines && textLines.length
          ? textLines.map((item, index) => (
              <Typography key={index} variant='b2' display='inline' style={{ fontStyle: italic ? 'italic' : undefined }} >
                {item}
              </Typography>
            ))
          : null
        }
        {bulletLines && bulletLines.length
          ? <Grid container item style={{ flexFlow: 'column', justifyContent: 'center', padding: '8px 0px 12px 0px' }} >
              {bulletLines.map((item, index) => (
                <Grid container item key={index} style={{ flexFlow: 'row', alignItems: 'center' }} >
                  <span style={{ display: 'flex', paddingRight: '12px' }} >
                    <CheckIcon size={16} />
                  </span>
                  <Typography variant='b2' display='inline' >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          : null
        }
        {pendingLines && pendingLines.length
          ? <Grid container item style={{ flexFlow: 'column', justifyContent: 'center', padding: '8px 0px 12px 0px' }} >
              {pendingLines.map((item, index) => (
                <Grid container item key={index} style={{ flexFlow: 'row', alignItems: 'center' }} >
                  <span style={{ display: 'flex', paddingRight: '12px' }} >
                    <CircularProgress thickness={4} value={100} size={16} color='primary' />
                  </span>
                  <Typography variant='b2' display='inline' >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          : null
        }
        {children || null}
      </Grid>
    </Grid>
  )
};

export default InfoBox;
