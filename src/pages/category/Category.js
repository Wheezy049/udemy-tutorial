import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./category.scss";
// import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from "../../component/productCard/ProductCard";
import Spinner  from "../../component/spinner/spinner"
import {
  categoriesMapSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categorySelector";

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      {
        isLoading ? <Spinner /> : (
          <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        )
      }
    </Fragment>
  );
}

export default Category;
