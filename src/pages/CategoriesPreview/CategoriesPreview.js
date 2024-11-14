import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import './categoriesPreview.scss'
import CategoryPreview from "../../component/categoryPreview/CategoryPreview";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
          return (
          <CategoryPreview key={title} title={title} products={products} />
          );
      })}
    </>
  );
}

export default CategoriesPreview;
