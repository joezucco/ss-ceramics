import { createClient } from "contentful";
import Skeleton from "../../components/Skeleton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "product",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
    
    return {
        props: { product: items[0] },
        revalidate: 1
    }
};

export default function SingleProduct({ product }) {
    if (!product) return <Skeleton />

    const {featuredImage, title, price, description, purchase} = product.fields

    return (
      <div>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
        <p>${price}</p>
        <p>{documentToReactComponents(description)}</p>
            <a href={purchase}>
          <button type="submit" value="Purchase">
            {purchase}
          </button>
        </a>
      </div>
    );
}
