import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const FilledIcon = props => {

  const {
    size,
    color,
    strokeWidth,
    viewBox,
    children
  } = props;

  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={size ? `${size}px` : '24px'}
      height={size ? `${size}px` : '24px'}
      stroke='none'
      strokeWidth={strokeWidth || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox || "0 0 24 24"}
      sx={{
        display: 'inline-block',
        verticalAlign: 'middle',
        fill: (theme) => theme.palette.mode === 'dark' ? '#fff' : color ? color : '#678',
        width: size ? `${size}px` : '24px',
        height: size ? `${size}px` : '24px'
      }}
    >
      <path stroke="none" fill="none" d='M0 0h24v24H0z' />
      {children || null}
    </SvgIcon>
  )
};

const OutlinedIcon = props => {

  const {
    size,
    color,
    strokeWidth,
    viewBox,
    darkColor,
    children
  } = props;

  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={size ? `${size}px` : '24px'}
      height={size ? `${size}px` : '24px'}
      stroke={color || '#345'}
      strokeWidth={strokeWidth || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox || "0 0 24 24"}
      sx={{
        display: 'inline-block',
        verticalAlign: 'middle',
        fill: 'none',
        stroke: (theme) => theme.palette.mode === 'dark'
          ? (darkColor && color) ? color : '#fff'
          : color ? color : '#345',
        width: size ? `${size}px` : '24px',
        height: size ? `${size}px` : '24px'
      }}
    >
      <path stroke="none" fill="none" d='M0 0h24v24H0z' />
      {children || null}
    </SvgIcon>
  )
};

export const DollarIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d='M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2' />
      <path d='M12 3v3m0 12v3' />
    </OutlinedIcon>
  )
};

export const SunIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </OutlinedIcon>
  )
};

export const MoonIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </OutlinedIcon>
  )
};

export const BackIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <line x1='5' y1='12' x2='19' y2='12' />
      <line x1='5' y1='12' x2='11' y2='18' />
      <line x1='5' y1='12' x2='11' y2='6' />
    </OutlinedIcon>
  )
};

export const EyeIcon = props => {
  return (
    <OutlinedIcon {...props} >
      {props.open
        ? <>
            <circle cx="12" cy="12" r="2" />
            <path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7' />
          </>
        : <>
            <line x1='3' y1='3' x2='21' y2='21' />
            <path d='M10.584 10.587a2 2 0 0 0 2.828 2.83' />
            <path d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341' />
          </>
      }
    </OutlinedIcon>
  )
};

export const CodeIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <polyline points='7 8 3 12 7 16' />
      <polyline points='17 8 21 12 17 16' />
      <line x1='14' y1='4' x2='10' y2='20' />
    </OutlinedIcon>
  )
};

export const TrendIcon = props => {
  return (
    <OutlinedIcon {...props} >
      {props.down
        ? <>
            <polyline points="3 7 9 13 13 9 21 17" />
            <polyline points="21 10 21 17 14 17" />
          </>
        : <>
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </>
      }
    </OutlinedIcon>
  )
};

export const SunglassesIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M8 4h-2l-3 10" />
      <path d="M16 4h2l3 10" />
      <line x1="10" y1="16" x2="14" y2="16" />
      <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
      <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    </OutlinedIcon>
  )
};

export const FaceIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="10" x2="9.01" y2="10" />
      <line x1="15" y1="10" x2="15.01" y2="10" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </OutlinedIcon>
  )
};

export const PaletteIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
    </OutlinedIcon>
  )
};

export const CheckIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M5 12l5 5l10 -10" />
    </OutlinedIcon>
  )
};

export const ExternalIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
      <line x1="10" y1="14" x2="20" y2="4" />
      <polyline points="15 4 20 4 20 9" />
    </OutlinedIcon>
  )
};

export const CandleIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <rect x="4" y="6" width="4" height="5" rx="1" />
      <line x1="6" y1="4" x2="6" y2="6" />
      <line x1="6" y1="11" x2="6" y2="20" />
      <rect x="10" y="14" width="4" height="5" rx="1" />
      <line x1="12" y1="4" x2="12" y2="14" />
      <line x1="12" y1="19" x2="12" y2="20" />
      <rect x="16" y="5" width="4" height="6" rx="1" />
      <line x1="18" y1="4" x2="18" y2="5" />
      <line x1="18" y1="11" x2="18" y2="20" />
    </OutlinedIcon>
  )
};

export const KeyDownIcon = props => {
  return (
    <FilledIcon {...props} >
      <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
    </FilledIcon>
  )
};

export const GitHubIcon = props => {
  return (
    <FilledIcon {...props} >
      <path d='M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27' />
    </FilledIcon>
  )
};

export const LinkedInIcon = props => {
  return (
    <FilledIcon {...props} >
      <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
    </FilledIcon>
  )
};

export const MailIcon = props => {
  return (
    <FilledIcon {...props} >
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' />
    </FilledIcon>
  )
};

export const PartyIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d='M4 5h2' />
      <path d='M5 4v2' />
      <path d='M11.5 4l-.5 2' />
      <path d='M18 5h2' />
      <path d='M19 4v2' />
      <path d='M15 9l-1 1' />
      <path d='M18 13l2 -.5' />
      <path d='M18 19h2' />
      <path d='M19 18v2' />
      <path d='M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z' />
    </OutlinedIcon>
  )
};

export const HangerIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
    </OutlinedIcon>
  )
};

export const BlockIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
    </OutlinedIcon>
  )
};

export const CheckCircleIcon = props => {
  return (
    <OutlinedIcon {...props} >
      <circle cx='12' cy='12' r='9' />
      {props.checked ? <path d="M9 12l2 2l4 -4" /> : null}
    </OutlinedIcon>
  )
};

export const PrivacyIcon = props => {
  return (
    <FilledIcon {...props} >
      <path d='m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07 1.95-1.95 5.12-1.95 7.07 0 1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z' />
    </FilledIcon>
  )
};
