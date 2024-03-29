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
    <div className='min-h-screen'>
      <div className='flex flex-wrap overflow-hidden justify-around'>
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
}
