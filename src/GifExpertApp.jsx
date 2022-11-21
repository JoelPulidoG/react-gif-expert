import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const handleAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return(
    <>
      <h1>GifExperteApp</h1>
      
      <AddCategory handleAddCategory={ handleAddCategory }/>
      
      {
        categories.map( category => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}