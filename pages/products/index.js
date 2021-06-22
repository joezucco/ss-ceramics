import Link from "next/link";
import { createClient } from "contentful";
import ProductCard from "../../components/ProductCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "product" });

  return {
    props: {
      products: res.items,
    },
    revalidate: 1,
  };
}

export default function Products({ products }) {
  console.log(products);

  return (
    // <div class='flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-4 xl:-mx-6'>
    //   <div class='my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3'>
    //     {products.map((product) => (
    //       <ProductCard key={product.sys.id} product={product} />
    //     ))}
    //   </div>
    // </div>
    <div class='min-h-screen'>
      <div class='flex flex-wrap overflow-hidden '>
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
}
