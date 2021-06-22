import Link from 'next/link'


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "font-body text-lg  grid grid-rows-3 text-center "
          : "hidden"
      }
      onClick={toggle}
      >
        <Link href='/products'>
          <a className='hover:text-gray-500 transition ease-in-out duration-200 m-1'>
            Shop
          </a>
        </Link>
        <Link href='/contact'>
          <a className='hover:text-gray-500 transition ease-in-out duration-200 m-1'>
            Contact
          </a>
        </Link>
      </div>
    );
}

export default Dropdown