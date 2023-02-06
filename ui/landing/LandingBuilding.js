import React from 'react';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import InfoBox from '/ui/boxes/InfoBox.js';
import { BoxBorderStyled } from '/styled/Boxes.js';
import { PrivacyIcon } from '/ui/icons/Customs.js';

import ConjureLogo from '/public/conjure.png';

const LandingBuilding = props => {
  return (
    <BoxBorderStyled
      container item flex='1'
      mobile={props.mobile}
      flexDirection='column'
      flexWrap='nowrap'
      justifyContent='flex-end'
      style={{ marginTop: 24 }}
    >
      <Grid container item flexDirection='column' flexWrap='nowrap' style={{ padding: 8 }} >
        <Typography variant='h4' style={{ paddingBottom: 8 }} >
          {`Building`}
        </Typography>
        <InfoBox
          title='Conjure'
          link='https://conjure.io'
          icon={<Image src={ConjureLogo} alt='conjure' height={30} width={30}  />}
          iconBg='rgba(25, 25, 220, .1)'
          textLines={[
            `Make any content, and monetize it. Multimedia social content platform.`,
            `Closed alpha now, open beta coming soon...`,
          ]}
          bulletLines={[
            `Create posts, images, videos, stories, and more`,
            `Multiple monetization methods for creators`,
            `Secure and performant backend infrastructure`,
            `Full creator/brand marketplace to execute deals`,
            `Direct and group messaging system`,
            `Robust analytics dashboard`
          ]}
          pendingLines={[
            `Refactoring to Next.js`,
            `Integrate ads and revenue sharing`,
            `Mobile optimization and native apps`
          ]}
        />
        <InfoBox
          title={`Untitled Project, "Sunlight"`}
          icon={<PrivacyIcon color='#234' />}
          iconBg='rgba(0, 0, 0, .1)'
          padding='16px 0px 0px'
          textLines={[
            `Dashboard that tracks politician trading activity, campaign spending, and donor cashflow. Uses APIs from both the US Government and third party transparency groups. Sunlight is the best disinfectant.`
          ]}
        />
      </Grid>
    </BoxBorderStyled>
  )
};

export default LandingBuilding;
