import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "about" });

  return {
    props: {
      info: res.items,
    },
    revalidate: 1,
  };
}

export default function About({ info }) {
  console.log(info);

    const {aboutImage, bio } = info[0].fields;
  return (
    <div class='h-screen'>
      {aboutImage && <Image
        src={"https:" + aboutImage.fields.file.url}
        width={aboutImage.fields.file.details.image.width}
        height={aboutImage.fields.file.details.image.height}
      />}
      <p>{documentToReactComponents(bio)}</p>
    </div>
  );
}
