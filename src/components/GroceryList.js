import GroceryItem from "./GroceryItem";

export default function GroceryList({ groceries, onToggle, onDeleteItem }) {
  return (
    <div className="grocery-list">
      <h2>Items List 📃</h2>
      <ul>
        {groceries.map((item) => (
          <GroceryItem
            item={item}
            key={item.id}
            onToggle={onToggle}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
