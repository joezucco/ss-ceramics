import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { title, slug, featuredImage } = product.fields;

  return (
    <Link href={'/products/' + slug} class=''>
      <div className='bg-white m-4 overflow-hidden font-body p-1 w-full md:w-1/3 lg:w-1/4 xl:w-1/4 hover:underline hover:opacity-90 duration-200 ease-in-out cursor-pointer'>
        <Image
          src={'https:' + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          className='object-cover  '
        />
        <div className='p-5 text-center text-sm'>
          <p className='font-semibold tracking-widest'>{title}</p>
        </div>
      </div>
    </Link>
  );
}
