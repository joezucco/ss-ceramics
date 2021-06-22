import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { title, slug, featuredImage, price } = product.fields;

  return (
    // <div class='w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-red-400 font-body '>
    //   <div class='p-6 '>
    //     <Link href={"/products/" + slug}>
    //       <div className='rounded-md overflow-hidden text-center shadow m-4 '>
    //         <a href='/'>
    //           <div class=''>
    //             <Image
    //               src={"https:" + featuredImage.fields.file.url}
    //               width={featuredImage.fields.file.details.image.width}
    //               height={featuredImage.fields.file.details.image.height}
    //               class='h-1/4 w-full object-cover hover:opacity-90 duration-200 ease-in-out'
    //             />
    //           </div>
    //           <div class='bg-white'>
    //             <p class='text-xl absolute '>{title}</p>
    //             <p class='text-lg text-gray-700 font-light absolute'>
    //               ${price}
    //             </p>
    //           </div>
    //         </a>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
<Link href={"/products/" + slug}>
    <div
      class='bg-white m-4  overflow-hidden  font-body p-1 w-full
md:w-1/3 lg:w-1/4 xl:w-1/4 '
    >
      {/* IMAGE CONTAINER */}
      
        <a href='/'>
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            class='object-cover'
          />

          <div class='p-6 text-center hover:underline'>
            <p class='font-semibold'>{title}</p>
            <p>${price}</p>
          </div>
        </a>
      
    </div>
    </Link>
  );
}
