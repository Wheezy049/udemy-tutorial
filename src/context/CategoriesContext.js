import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shopData";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocument,
} from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(()=>{
  //   addCollectionAndDocument('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
