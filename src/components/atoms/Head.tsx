import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' type='image/png' href='/favicon.png' sizes='any' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />

      <title>alexdev™ — Alex's Creative Portfolio In Multicolor</title>
      <meta
        name='title'
        content="alexdev™ — Alex's Creative Portfolio In Multicolor"
      />
      <meta
        name='description'
        content='Meet Alex, a full-stack developer crafting solid and responsive web solutions. Explore his portfolio — showcasing coding and creativity!'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://alexdev.se' />
      <meta
        property='og:title'
        content="alexdev™ — Alex's Creative Portfolio In Multicolor"
      />
      <meta
        property='og:description'
        content='Meet Alex, a full-stack developer crafting solid and responsive web solutions. Explore his portfolio — showcasing coding and creativity!'
      />
      <meta
        property='og:image'
        content='https://firebasestorage.googleapis.com/v0/b/alexdev-se.appspot.com/o/og-min.png?alt=media&token=3523a084-c844-4b78-a07c-60c1dbe8fa71'
      />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://alexdev.se' />
      <meta
        property='twitter:title'
        content="alexdev™ — Alex's Creative Portfolio In Multicolor"
      />
      <meta
        property='twitter:description'
        content='Meet Alex, a full-stack developer crafting solid and responsive web solutions. Explore his portfolio — showcasing coding and creativity!'
      />
      <meta
        property='twitter:image'
        content='https://firebasestorage.googleapis.com/v0/b/alexdev-se.appspot.com/o/og-min.png?alt=media&token=3523a084-c844-4b78-a07c-60c1dbe8fa71'
      />
    </NextHead>
  );
};

export default Head;
