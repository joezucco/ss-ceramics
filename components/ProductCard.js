import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { title, slug, featuredImage, price } = product.fields;

  return (
    <div class='w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 '>
      <Link href={"/products/" + slug}>
        <div className='rounded-md overflow-hidden font-body text-center shadow m-4 '>
          <a href='/'>

            <div class='object-contain h-48'>
              <Image
                src={"https:" + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
                class='h-1/4 w-full object-cover hover:opacity-90 duration-200 ease-in-out'
              />
            </div>
            <p class='text-xl '>{title}</p>
            <p class='text-lg text-gray-700 font-light'>${price}</p>
          </a>
        </div>
      </Link>
    </div>
  );
}
