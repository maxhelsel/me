import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import { HangerIcon, CheckCircleIcon, BlockIcon } from '/ui/icons/Customs.js';

const HatPicker = props => {

  const {
    mobile,
    dark,
    hat,
    handleHat
  } = props;

  const [ open, setOpen ] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    handleAfter()
  }, [ mobile, hat ]);

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

  const accArr = [
    { label: 'Explorer', value: 1 },
    { label: 'Wizard', value: 2 },
    { label: 'WW3', value: 3 },
    { label: 'None', value: 0 }
  ];

  return (
    <>
      <Grid item style={{ margin: 4 }} >
        <Paper style={{ borderRadius: '50%', padding: 2 }} >
          <Tooltip title='Add Accessories' >
            <IconButton
              ref={anchorRef}
              aria-label='toggle accessories'
              onClick={event => handleClick(event, 1)}
              style={{ padding: 4, background: Boolean(open || hat) ? dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)' : undefined }}
            >
              <HangerIcon />
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
                <Paper elevation={4} style={{ display: 'flex', flexFlow: 'column', width: 200, padding: 4 }} >
                  <Typography variant='b1' style={{ padding: '12px 12px 4px' }} >
                    {`Equip a sweet accessory`}
                  </Typography>
                  {accArr.map((item, index) => (
                    <Button
                      key={index}
                      fullWidth
                      aria-label={item.label ? `equip ${item.label} hat` : 'equip hat'}
                      onClick={event => handleHat(event, item.value)}
                      style={{ textTransform: 'none', padding: '0px' }}
                    >
                      <Grid container item flexWrap='nowrap' alignItems='center' >
                        <Avatar style={{ background: 'unset', transform: !item.value ? 'rotate(-45deg)' : undefined }} >
                          {item.value === 0
                            ? <BlockIcon />
                            : <CheckCircleIcon checked={Boolean(item.value === hat)} />
                          }
                        </Avatar>
                        <Typography variant='b2' style={{ paddingRight: 12 }} >
                          {item.label}
                        </Typography>
                      </Grid>
                    </Button>
                  ))}
                </Paper>
              </ClickAwayListener>
            </Grid>
          </Grow>
        )}
      </Popper>
    </>
  )
};

export default HatPicker;
