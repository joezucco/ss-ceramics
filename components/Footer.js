import { FaInstagram, FaEtsy } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-white dark:bg-gray-800 w-full py-8'>
      <div className='max-w-screen-xl mx-auto px-4 '>
        <ul className='max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-around'>
          <li className='my-2'>
            <a
              className='text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200'
              href='https://www.instagram.com/sarah.schwartz.ceramics/'
            >
              <FaInstagram size={30} />
            </a>
          </li>
          <li className='my-2'>
            <a
              className='text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200'
              href='https://www.etsy.com/shop/SarahSchwartzCeramic?ref=profile_header'
            >
              <FaEtsy size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
