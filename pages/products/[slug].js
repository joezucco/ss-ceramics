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
    <div class=''>
      <div class='font-body min-h-screen flex flex-col sm:justify-self-auto lg:justify-center bg-white'>
        <div class='bg-white p-2 m-2 flex flex-wrap justify-center'>
          <div class='max-w-md'>         
              <Image
                src={"https:" + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
                class='flex flex grow'
              /> 
          </div>
          <div class='m-2'>
            <h2 class='text-3xl mb-2'>{title}</h2>
            <p class='text-2xl font-light mb-2'>${price}</p>
            <p class='mb-2'>{documentToReactComponents(description)}</p>
            <div>
              {purchase && (
                <button
                  class='bg-black hover:bg-gray-500  text-white py-2 px-4  transition ease-in duration-100 text-center text-base font-body shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded'
                  type='submit'
                  value='Purchase'
                >
                  <a href={purchase}>Purchase</a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
