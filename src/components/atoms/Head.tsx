import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>alexdev.se</title>
      <meta
        name='description'
        content='A portfolio site in multicolor- by Alexander Forrest.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' type='image/png' href='/favicon.png' sizes='any' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
    </NextHead>
  );
};

export default Head;
