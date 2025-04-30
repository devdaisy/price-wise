import { useState, useEffect } from "react";

function InventoryForm({ onAddItem, currentItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [totalCost, setTotalCost] = useState("");

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name || "");
      setQuantity(currentItem.quantity || "");
      setUnit(currentItem.unit || "");
      setTotalCost(currentItem.totalCost || "");
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity || !unit || !totalCost) {
      alert("Please make sure to fill out everything!");
      return;
    }

    const newItem = {
      name,
      quantity: parseFloat(quantity),
      unit,
      totalCost: parseFloat(totalCost),
    };

    onAddItem(newItem);

    // clear form after adding item to list
    setName("");
    setQuantity("");
    setUnit("");
    setTotalCost("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* item name */}
      <div>
        <label className="block text-sm font-medium">Item Name</label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* quantity purchased and unit of measure */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            Quantity Purchased
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Unit of Measure</label>
          <select
            className="mt-1 p-2 border rounded w-full"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="">Select Unit</option>
            <option value="Gallon(s)">Gallon(s)</option>
            <option value="Pound(s)">Pound(s)</option>
            <option value="Liter(s)">Liter(s)</option>
            <option value="Dozen(s)">Dozen(s)</option>
            <option value="Ounce(s)">Ounce(s)</option>
            <option value="Gram(s)">Gram(s)</option>
            <option value="Individual Item">Individual Item</option>
          </select>
        </div>
      </div>

      {/* total purchase cost */}
      <div className="relative">
        <label className="block text-sm font-medium">Total Purchase Cost</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <input
            type="number"
            step="0.01"
            className="pl-7 p-2 border rounded w-full"
            placeholder="0.00"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
        </div>
      </div>

      {/* add item button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
      >
        {currentItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}

export default InventoryForm;
