import Link from 'next/link'


const Dropdown = ({isOpen, toggle}) => {
    return (
      <div
        className={
          isOpen
            ? "font-logo m-1 grid grid-rows-3 text-center bg-white-800 bg-opacity-5 "
            : "hidden"
        }
        onClick={toggle}
      >
        <Link href='/products'>
          <a className='hover:text-gray-500 transition ease-in-out duration-200'>
            Shop
          </a>
        </Link>
        <Link href='/about'>
          <a className='hover:text-gray-500 transition ease-in-out duration-200'>
            About
          </a>
        </Link>
        <Link href='/contact'>
          <a className='hover:text-gray-500 transition ease-in-out duration-200'>
            Contact
          </a>
        </Link>
      </div>
    );
}

export default Dropdown