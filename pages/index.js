import Head from 'next/head';
import LandingNavbar from '/ui/navigation/LandingNavbar.js';

function Index() {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Description of whatever" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smiley.png" />
      </Head>
      <LandingNavbar />
      <main className='main' >
        x
      </main>
    </>
  )
}

export default Index;
