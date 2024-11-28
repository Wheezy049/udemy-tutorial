import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./shop.scss";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../category/Category";
import { fetchCategoriesStart } from "../../store/categories/categoryAction";
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'
// import { fetchCategoriesAsync } from '../../store/categories/categoryAction'

function Shop() {
  const dispatch = useDispatch();

  // context
  // useEffect(()=>{
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments('categories');
  //     // console.log(categoriesArray)
  //     dispatch(setCategories(categoriesArray));
  //   }

  //   getCategoriesMap();
  // }, []);

  // redux thunk
  // useEffect(()=>{
  //    dispatch(fetchCategoriesAsync())
  // }, [])

  // redux saga
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
