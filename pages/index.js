import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Landing from '/ui/landing/Landing.js';
import LandingBuilding from '/ui/landing/LandingBuilding.js';
import LandingTools from '/ui/landing/LandingTools.js';
import LandingFacelifts from '/ui/landing/LandingFacelifts.js';
import MaxFooter from '/ui/navigation/MaxFooter.js';

export async function getStaticProps() {

  const res1 = await fetch(`https://api.polygon.io/v2/aggs/ticker/NVDA/prev?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`);
  const res2 = await fetch(`https://api.polygon.io/v2/aggs/ticker/SPY/prev?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`);
  const res3 = await fetch(`https://api.polygon.io/v2/aggs/ticker/UVXY/prev?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`);
  const res4 = await fetch(`https://api.polygon.io/v2/aggs/ticker/QQQ/prev?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`);
  const res5 = await fetch(`https://api.polygon.io/v2/aggs/ticker/MDB/prev?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`);

  const nvda = await res1.json();
  const spy = await res2.json();
  const uvxy = await res3.json();
  const qqq = await res4.json();
  const mdb = await res5.json();

  return {
    props: {
      nvda: nvda,
      spy: spy,
      uvxy: uvxy,
      qqq: qqq,
      mdb: mdb
    },
    revalidate: 600
  }
}

function Index(props) {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const theme = useTheme();
  const dark = Boolean(theme?.palette?.mode === 'dark');

  return (
    <>
      <Head>

        <title>Max</title>
        <meta name="description" content="The personal website of Max Helsel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:site_name" content="Max Helsel" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://maxhelsel.com/" />
        <meta property="og:title" content="Max Helsel" />
        <meta property="og:description" content="Developer and Trader" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maxhelsel.com/maxOG.png" />
        <meta property="og:image:alt" content="Max Helsel" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maxhelsel" />
        <meta name="twitter:creator" content="@maxhelsel" />

      </Head>
      <main className='main' >
        <Grid container flexDirection='column' flexWrap='nowrap' alignItems='center' style={{ paddingBottom: 140 }} >
          <Landing {...props} mobile={mobile} dark={dark} />
          <Grid container flexDirection='column' flexWrap='nowrap' style={{ maxWidth: 880, padding: '0px 8px', margin: '0 auto' }} >
            <LandingBuilding mobile={mobile} dark={dark} />
            <LandingTools mobile={mobile} dark={dark} />
            <Grid container flexDirection='column' flexWrap='nowrap' style={{ padding: '16px 12px' }} >
              <Typography variant='h4' style={{ padding: '48px 0px 0px' }} >
                {`Facelifts`}
              </Typography>
              <Typography variant='h5' style={{ padding: '4px 0px 0px' }} >
                {`Sometimes, I take a website and try to improve its look.`}
              </Typography>
            </Grid>
          </Grid>
          <Grid container flexDirection='column' flexWrap='nowrap' style={{ maxWidth: mobile ? 888 : 880, padding: mobile ? '0px 12px' : '0px 8px', margin: '0 auto' }} >
            <LandingFacelifts mobile={mobile} dark={dark} />
          </Grid>
        </Grid>
        <MaxFooter dark={dark} />
      </main>
    </>
  )
}

export default Index;
