import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="mb-4">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back
        </Link>
      </div>

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
        <Link to="/overhead">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-xl"
          >
            Next: Overhead Input
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Inventory;
