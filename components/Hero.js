import styles from "../styles/Home.module.scss";
import Image from "next/image";



export default function Hero({ hero }) {

  const { mainImage } = hero.fields
  
  return (
    <>
      <div className="img-container">
        <Image
          src={"https:" + mainImage.fields.file.url}
          layout="responsive"
          width={mainImage.fields.file.details.image.width}
          height={mainImage.fields.file.details.image.height}
          quality={100}
          className="image"
        />
      </div>
    </>
  );
}
