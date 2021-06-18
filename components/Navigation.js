import Link from "next/link";
import styles from "./styles/Navbar.module.scss";

export default function Navigation() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>Sarah Schwartz Ceramics</a>
          </Link>
        </h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="products">
          <a>Shop</a>
        </Link>
      </nav>
    </div>


  );
}
