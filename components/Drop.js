import Link from 'next/link'


const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-white-800" : "hidden"} onClick={toggle}>
          <Link href="/products" className="p-4 hover:text-white">
            Shop
          </Link>
          <Link href="/products" className="p-4 hover:text-white">
            About
          </Link>
          <Link href="/products" className="p-4 hover:text-white">
            About
          </Link>
          <Link href="/products" className="p-4 hover:text-white">
            About
          </Link>                    
        </div>
    )
}

export default Dropdown