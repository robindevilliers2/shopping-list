import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !quantity || !price) {
      alert("Could not add item. Invalid inputs.");
      return;
    }
    const newItem = {
      description,
      quantity,
      price,
      packed: false,
      id: crypto.randomUUID(),
    };
    onAddItem(newItem);

    setDescription("");
    setPrice("");
    setQuantity("");
  }

  return (
    <div>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          min="1"
          step="1"
          value={price}
          onChange={(e) =>
            setPrice(Number(e.target.value) ? Number(e.target.value) : "")
          }
        />

        <label>Quantity</label>
        <input
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(Number(e.target.value) ? Number(e.target.value) : "")
          }
        />
        <button>Add Item</button>
      </form>
    </div>
  );
}
