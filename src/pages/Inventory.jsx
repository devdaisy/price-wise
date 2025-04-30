import { useState } from "react";
import InventoryInput from "../components/Inventory/InventoryInput";
import InventoryList from "../components/Inventory/InventoryList";

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // add inventory item to list, if not editing item, just add new item
  const addInventoryItem = (newItem) => {
    if (editingIndex !== null) {
      const updatedItems = [...inventoryItems];
      updatedItems[editingIndex] = newItem;
      setInventoryItems(updatedItems);
      setEditingIndex(null);
    } else {
      setInventoryItems([...inventoryItems, newItem]);
    }
  };

  // delete inventory item from list
  const deleteInventoryItem = (indexToDelete) => {
    const updatedItems = inventoryItems.filter(
      (_, index) => index !== indexToDelete
    );
    setInventoryItems(updatedItems);

    // stop editing if item has been deleted
    if (editingIndex !== null && editingIndex >= indexToDelete) {
      setEditingIndex(null);
    }
  };

  const editInventoryItem = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div>
        {/* output inventory list */}
        <InventoryList
          items={inventoryItems}
          deleteInventoryItem={deleteInventoryItem}
          editInventoryItem={editInventoryItem}
        />

        {/* output inventory input */}
        <InventoryInput
          onAddItem={addInventoryItem}
          currentItem={
            editingIndex !== null ? inventoryItems[editingIndex] : null
          }
        />
      </div>

      <div className="p-6 flex justify-end mt-12">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow-xl"
        >
          Next: Overhead Input
        </button>
      </div>
    </div>
  );
}

export default Inventory;
