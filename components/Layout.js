import Navbar from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="content">
          <Navbar />
          {children}
          <Footer />
    </div>
  );
}
