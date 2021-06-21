import Navbar from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="content">
          <Navbar />
          {children}
          <Footer />
    </div>
  );
}
