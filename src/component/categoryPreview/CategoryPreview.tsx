import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./categoryPreview.scss";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type CategoryPreviewProps = {
  title: string;
  products: Product[];
};

function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
