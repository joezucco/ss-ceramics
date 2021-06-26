import Hero from "../components/Hero";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "hero" });

  return {
    props: {
      images: res.items,
    },
    revalidate: 1,
  };
}

export default function Home({ images }) {

  return (
    <div>
      {/* HEAD W METADATA */}
      <Head>
        <title>Sarah Schwartz Ceramics</title>
        <meta name='keywords' content='ceramics' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/public/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/public/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/public/favicon-16x16.png'
        />
        <link rel='manifest' href='/static/site.webmanifest' />
      </Head>

      {/* HERO */}
      <div className='hero'>
        {images.map((hero) => (
          <Hero key={hero.sys.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
