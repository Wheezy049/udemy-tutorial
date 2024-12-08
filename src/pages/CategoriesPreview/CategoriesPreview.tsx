import React from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../context/CategoriesContext";
import "./categoriesPreview.scss";
import CategoryPreview from "../../component/categoryPreview/CategoryPreview";
import { categoriesMapSelector } from "../../store/categories/categorySelector";

function CategoriesPreview() {
  const categoriesMap = useSelector(categoriesMapSelector);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
