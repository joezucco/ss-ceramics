import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="img-container">
              <Image src="/hero-test.png" layout="responsive" width={1200} height={900} quality={100} className="image" />
      </div>
    </>
  );
}
