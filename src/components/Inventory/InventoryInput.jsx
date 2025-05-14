import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";

function InventoryInput() {
  const {
    inventoryItems,
    addInventoryItem,
    editInventoryItem,
    editingIndex,
    setEditingIndex,
  } = useContext(AppContext);

  const [label, setLabel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [unitsPerPack, setUnitsPerPack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!label || !quantity || !unit || !totalCost) {
      alert("Please fill out all fields!");
      return;
    }

    const newItem = {
      label,
      quantity: parseFloat(quantity),
      unit,
      totalCost: parseFloat(totalCost),
      unitsPerPack: unit === "Pack(s)" ? parseFloat(unitsPerPack) : 1,
    };

    if (editingIndex !== null) {
      editInventoryItem(editingIndex, newItem);
    } else {
      addInventoryItem(newItem);
    }

    resetForm();
  };

  const resetForm = () => {
    setLabel("");
    setQuantity("");
    setUnit("");
    setTotalCost("");
    setUnitsPerPack("");
    setEditingIndex(null);
  };

  useEffect(() => {
    if (editingIndex !== null) {
      const item = inventoryItems[editingIndex];
      if (item) {
        setLabel(item.label);
        setQuantity(item.quantity.toString());
        setUnit(item.unit);
        setTotalCost(item.totalCost.toString());
        setUnitsPerPack(item.unitsPerPack.toString());
      }
    }
  }, [editingIndex, inventoryItems]);

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Item Label</label>
        <input
          type="text"
          className="form-control"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Quantity Purchased</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Unit of Measure</label>
          <select
            className="form-select"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="">Select Unit</option>
            <option value="Gallon(s)">Gallon(s)</option>
            <option value="Liter(s)">Liter(s)</option>
            <option value="Quart(s)">Quart(s)</option>
            <option value="Pint(s)">Pint(s)</option>
            <option value="Fluid Ounce(s)">Fluid Ounce(s)</option>
            <option value="Pack(s)">Pack(s)</option>
            <option value="Pound(s)">Pound(s)</option>
            <option value="Ounce(s)">Ounce(s)</option>
            <option value="Gram(s)">Gram(s)</option>
            <option value="Individual Unit">Individual Unit</option>
          </select>
        </div>
      </div>

      {unit === "Pack(s)" && (
        <div className="mb-3">
          <label className="form-label">Units Per Pack</label>
          <input
            type="number"
            className="form-control"
            value={unitsPerPack}
            onChange={(e) => setUnitsPerPack(e.target.value)}
          />
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Total Purchase Cost</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="0.00"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        {editingIndex !== null ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}

export default InventoryInput;
