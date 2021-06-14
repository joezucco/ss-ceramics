import Hero from "../components/Hero";
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah Schwartz Ceramics</title>
        <meta name="keywords" content="ceramics" />
      </Head>

      <Hero />
    </>
  );
}
