import './App.css'
import logo from "../public/images/logo.JPG";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data";
import { useState } from 'react';

function App() {
  
  const allCategries = ["all", ...new Set(items.map((item) => item.category))]

  const [menuItem, setMenuItem] = useState(items)
  const [activeCategory, setActiveCategory] = useState("")
  const [categories, setCategories] = useState(allCategries)
  
  const filterItems = (category) => {
    setActiveCategory(category)
    if (category === "all") {
      setMenuItem(items)
      return;
    }

    const newItems = items.filter((item) => item.category === category)
    setMenuItem(newItems)
  }

  return (
    <>
      <main>
        <section className='menu section'>
          <div className="title">
            <img src={logo} alt="logo" className='logo' />
            <h2>Menu List</h2>
            <div className="underline"></div>
          </div>
          <Categories 
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItem}/>
        </section>
      </main>
    </>
  )
}

export default App
