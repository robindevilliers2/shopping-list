export default function GroceryItem({ item, onToggle, onDeleteItem }) {
  return (
    <li className={item.packed ? "packed" : ""}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
