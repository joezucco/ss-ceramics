import Image from "next/image";

export default function Hero({ hero }) {

  const { mainImage } = hero.fields;
  
  return (
  <>
    <div>
      <section className='mx-auto container pt-10 -m min-h-screen'>
        <div className='flex flex-col sm:flex-col-reverse md:flex-row lg:flex-row'>
          <div className='flex flex-col lg:w-5/12 md:w-6/12 px-4 lg:pr-3 justify-center md:mb-0 lg:mb-24 md:pt-0 lg:pt-24'>
            <p className='text-lg text-gray-600 font-body font-light leading-relaxed pt-8'>
              Sarah Schwartz Ceramics is a one woman pottery business based out
              of Rhode Island. All products are handmade. I am a primarily
              self-taught hobby potter with a love for functional pieces. Please
              feel free to reach out with any commissions or questions.
            </p>
          </div>
          <div className=' md:w-6/12 lg:w-7/12 relative mx-4 md:mx-4 lg:ml-20 lg:mr-0 pt-12 md:pt-0 lg:pt-0 '>
            <Image
              src={"https:" + mainImage.fields.file.url}
              layout='responsive'
              width={mainImage.fields.file.details.image.width}
              height={mainImage.fields.file.details.image.height}
              quality={100}
              className='rounded'
            />
          </div>
        </div>
      </section>
      </div>
      </>
  );
}