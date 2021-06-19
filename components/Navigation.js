import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import React, {useState} from 'react'

export default function Navigation({ toggle }) {



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
      className="flex justify-between items-center h-16 bg-white
     text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link href="/">
        Sarah Schwartz Ceramics
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6 hover:text-red-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:text-red-800" href="/">
          Home
        </Link>
        <Link className="p-4 hover:text-red-800" href="/about">
          About
        </Link>
        <Link className="p-4 hover:text-red-800" href="/contact">
          Contact
        </Link>
      </div>
    </nav>

</>
  );
}
