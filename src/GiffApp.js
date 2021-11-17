import React,  { useState } from 'react'
import { AddCategoryButton } from './components/AddCategoryButton'
import { GiffGrid } from './components/GiffGrid'

export const GiffApp = ({ defaultCategories=[]}) => {

  const [categories, setCategories] = useState(defaultCategories)

  const addNewCategory = (value) => {
    setCategories([value, ...categories])
  }

  return (
    <>
      <h2>Giff Expert App</h2>
      <AddCategoryButton addCategory={ addNewCategory } />
      <hr/>
      <ol>
      {
        categories.map( (category ) => (
          <GiffGrid key={ category } category={ category } />
        ))
      }
      </ol>
    </>
  )
}
