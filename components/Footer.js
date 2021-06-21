import Link from 'next/link'

export default function Footer() {
    return (
      <footer>
        <p>Copyright 2021 Sarah Schwartz Ceramics</p>
        <a href="https://www.instagram.com/sarah.schwartz.ceramics/">
          Instagram
        </a>
        <Link href="/contact">
          <a>Get In Touch</a>
        </Link>
      </footer>
    );
}
