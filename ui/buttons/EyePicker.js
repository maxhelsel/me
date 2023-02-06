import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import { BlockIcon, CheckIcon, EyeIcon } from '/ui/icons/Customs.js';

import { colors } from '/utils/colors.js';

const EyePicker = props => {

  const {
    mobile,
    dark,
    eyes,
    handleEyes
  } = props;

  const [ open, setOpen ] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    handleAfter()
  }, [ mobile, eyes ]);

  const handleAfter = () => {
    if (mobile && open) {
      setOpen(false)
    }
  };

  const handleClick = (event) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid item style={{ margin: 4 }} >
        <Paper style={{ borderRadius: '50%', padding: 2 }} >
          <Tooltip title='Crazy Eyes' >
            <IconButton
              ref={anchorRef}
              aria-label='toggle eyes and color'
              onClick={event => handleClick(event, 1)}
              style={{ padding: 4, background: Boolean(open || eyes) ? dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)' : undefined }}
            >
              <EyeIcon open />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
      <Popper
        open={Boolean(open)}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        role={undefined}
        transition
        modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: true,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: 'document',
              padding: 8,
            },
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350} >
            <Grid container item xs={12} style={{ width: 'auto', paddingTop: 24 }} >
              <ClickAwayListener onClickAway={handleClose} >
                <Paper elevation={4} style={{ display: 'flex', flexFlow: 'column', width: 'auto', padding: 4 }} >
                  <Typography variant='b1' style={{ padding: '12px 12px 4px' }} >
                    {`Set crazy eyes color`}
                  </Typography>
                  <Grid container item style={{ padding: 4 }} >
                    {colors.map((item, index) => (
                      <IconButton
                        key={item}
                        className='colorSphereContainer'
                        aria-label={item ? `Select color ${item}` : `Select color`}
                        onClick={event => handleEyes(event, item)}
                        style={{ padding: 4, margin: 2 }}
                      >
                        <div className='colorSphereInner' style={{ background: item, border: `4px solid ${item}` }} />
                        {Boolean(item === eyes)
                          ? <Paper elevation={0} className='colorSphereSelectedIcon' style={{ borderRadius: '50%' }} >
                               <CheckIcon size={20} color='#234' />
                            </Paper>
                          : null
                        }
                      </IconButton>
                    ))}
                    <IconButton
                      className='colorSphereContainer'
                      aria-label='Clear eyes'
                      onClick={event => handleEyes(event, null)}
                      style={{ padding: 4, margin: 2, transform: 'rotate(-45deg)', background: Boolean(!eyes) ? dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)' : undefined }}
                    >
                      <BlockIcon size={36} />
                    </IconButton>
                  </Grid>
                </Paper>
              </ClickAwayListener>
            </Grid>
          </Grow>
        )}
      </Popper>
    </>
  )
};

export default EyePicker;
