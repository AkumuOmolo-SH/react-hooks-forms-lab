import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
   const [search, setSearch] = useState("");
   const [itemsList, setItemsList] = useState(items);

function handleItemFormSubmit(newItem) {
  setItemsList([...itemsList, newItem]);
}


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;
  

  const matchesSearch = 
  item.name.toLowerCase().includes((search || "").toLowerCase());

    return matchesCategory && matchesSearch;

    });

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
