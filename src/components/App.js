import { useState } from "react";
import Stats from "./Stats";
import AddItemForm from "./AddItemForm";
import GroceryList from "./GroceryList";
import Header from "./Header";

export default function App() {
  const [groceries, setGroceries] = useState([]);

  function handleToggle(id) {
    setGroceries(
      groceries.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setGroceries(groceries.filter((item) => item.id !== id));
  }

  function handleAddItem(item) {
    setGroceries([...groceries, item]);
  }

  return (
    <>
      <div className="App">
        <Header />
        <div className="grocery-area">
          <AddItemForm onAddItem={handleAddItem} />
          <GroceryList
            groceries={groceries}
            onToggle={handleToggle}
            onDeleteItem={handleDeleteItem}
          />
        </div>

        <Stats groceries={groceries} />
      </div>
    </>
  );
}
