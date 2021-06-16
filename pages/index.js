import Hero from "../components/Hero";
import Head from 'next/head'
import { createClient } from "contentful";
import image from "next/image";

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


export default function Home({images}) {
  console.log(images);

  return (
    <>
      {/* HEAD W METADATA */}
      <Head>
        <title>Sarah Schwartz Ceramics</title>
        <meta name="keywords" content="ceramics" />
      </Head>
      <div className="flex justify-center items-center w-screen h-screen">
        {/* HERO */}
        <div className="hero">
          {images.map((hero) => (
            <Hero key={hero.sys.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
}
