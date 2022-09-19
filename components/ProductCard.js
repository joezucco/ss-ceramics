import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  
  const { title, slug, featuredImage } = product.fields;

  return (
    <Link href={"/products/" + slug} class=''>
      <div class='bg-white m-4  overflow-hidden  font-body p-1 w-full md:w-1/3 lg:w-1/4 xl:w-1/4 hover:underline hover:opacity-90 duration-200 ease-in-out cursor-pointer'>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          class='object-cover  '
        />
        <div class='p-6 text-center '>
          <p class='font-semibold'>{title}</p>
        </div>
      </div>
    </Link>
  );
}
