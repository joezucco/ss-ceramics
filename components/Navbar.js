import '../styles/Home.module.scss'

import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>
        <Link href="/" className="logo">
          <a>Sarah Schwartz Ceramics</a>
        </Link>
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="products">
        <a>Shop</a>
      </Link>
    </div>
  );
}
