import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { title, slug, featuredImage, price } = product.fields;

    return (
      <>
        <Link href={"/products/" + slug}>
          <a>
            <div className="card">
              <div className="featured">
                <Image
                  src={"https:" + featuredImage.fields.file.url}
                  width={featuredImage.fields.file.details.image.width}
                  height={featuredImage.fields.file.details.image.height}
                />
              </div>
              <div className="content">
                <div className="info">
                  <h4>{title}</h4>
                  <p>${price}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </>
    );
}
