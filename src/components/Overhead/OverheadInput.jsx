import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

function OverheadInput() {
  const {
    overheadExpenses,
    addOverheadExpense,
    editOverheadExpense,
    editingIndex,
    setEditingIndex,
  } = useContext(AppContext);

  const [label, setLabel] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!label || !totalCost || !frequency) {
      alert("Please fill out all fields!");
      return;
    }

    const newExpense = {
      label,
      totalCost: parseFloat(totalCost),
      frequency,
    };

    if (editingIndex !== null) {
      editOverheadExpense(editingIndex, newExpense);
    } else {
      addOverheadExpense(newExpense);
    }

    resetForm();
  };

  // reset form inputs
  const resetForm = () => {
    setLabel("");
    setTotalCost("");
    setFrequency("");
    setEditingIndex(null); // reset editing state
  };

  // populate the form when editing
  useEffect(() => {
    if (editingIndex !== null) {
      const editingExpense = overheadExpenses[editingIndex];
      if (editingExpense) {
        setLabel(editingExpense.label);
        setTotalCost(editingExpense.totalCost.toString());
        setFrequency(editingExpense.frequency);
      }
    }
  }, [editingIndex, overheadExpenses]);

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Expense Label</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., Rent, Software Subscription"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Total Cost</label>
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

        <div className="col-md-6">
          <label className="form-label">Expense Frequency</label>
          <select
            className="form-select"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="">Select Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        {editingIndex !== null ? "Update Expense" : "Add Expense"}{" "}
      </button>
    </form>
  );
}

export default OverheadInput;
