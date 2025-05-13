import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import InventoryInput from "../components/Inventory/InventoryInput";
import InventoryList from "../components/Inventory/InventoryList";

function Inventory() {
  const {
    inventoryItems,
    addInventoryItem,
    deleteInventoryItem,
    editInventoryItem,
  } = useContext(AppContext);

  return (
    <div className="container py-5">
      {/* back button + header */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className="btn btn-outline-secondary">
          &larr; Back to Home
        </Link>
        <h2 className="mb-0 text-end">Inventory Management</h2>
      </header>

      {/* inventory list */}
      <div className="border rounded p-4 mb-4">
        <InventoryList
          item={inventoryItems}
          deleteInventoryItem={deleteInventoryItem}
          editInventoryItem={editInventoryItem}
        />
      </div>

      {/* inventory input form */}
      <div className="border rounded p-4 mb-4">
        <InventoryInput onAddItem={addInventoryItem} />
      </div>

      {/* next button */}
      <div className="d-flex justify-content-end mt-5">
        <Link
          to="/overhead"
          className="btn btn-outline-dark px-4 py-2 mt-0 shadow"
        >
          Next: Overhead
        </Link>
      </div>
    </div>
  );
}

export default Inventory;
