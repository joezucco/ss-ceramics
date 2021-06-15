import styles from "../styles/Home.module.scss";
import { createClient } from "contentful";
import Image from "next/image";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "hero" });

  return {
    props: {
      image: res.items,
    },
    revalidate: 1,
  }
}

export default function Hero({ image }) {
  console.log(image)
  return (
    <>
      <div className="img-container">
        <Image
          src="/hero-test.png"
          layout="responsive"
          width={1200}
          height={900}
          quality={100}
          className="image"
        />
      </div>
    </>
  );
}
