import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './shop.scss'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../category/Category'

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop