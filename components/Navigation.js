import Link from "next/link";
// import styles from "./styles/Navbar.module.css";

export default function Navigation({toggle}) {



  return (
    <>
      {/* <div>
      <nav className="flex">
        <h1 className="flex justify-items-stretch">
          <Link href='/'>
            <a className='text-2xl text-transform: uppercase text-left'>
              Sarah Schwartz Ceramics
            </a>
          </Link>
        </h1>
        <ul className="text-transform: uppercase flex flex-row space-x-4">
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='products'>
            <a>Shop</a>
          </Link>
        </ul>
      </nav>
      </div> */}

      <nav
        className='flex justify-between items-center h-20 bg-white
     text-black relative shadow-sm uppercase font-logo font-regular'
        role='navigation'
      >
        <Link href='/'>
          <a
            href='/'
            className='lg:text-3xl md:text-3xl sm:text-1xl m-2 font-thin hover:text-red-300 transition ease-in-out duration-200'
          >
            Sarah Schwartz Ceramics
          </a>
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-6 h-6 hover:text-gray-500 transition ease-in-out duration-200'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>

        <div className='pr-8  md:block normal-case hidden space-x-2'>
          <Link href='/products'>
            <a className='hover:text-gray-500 transition ease-in-out duration-200'>
              Shop
            </a>
          </Link>
          <Link href='/contact'>
            <a className='hover:text-gray-500 transition ease-in-out duration-200'>
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
