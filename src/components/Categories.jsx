import React from 'react'

const categories = ({categories, activeCategory, filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) =>{
        return(
          <button
          className={`${activeCategory === category ? "filter-btn active" : "filter-btn"}`}
            type='button'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default categories