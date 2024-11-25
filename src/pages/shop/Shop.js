import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './shop.scss'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../category/Category'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'
import { setCategoriesMap } from '../../store/categories/categoryAction'

function Shop() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    }
    
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop