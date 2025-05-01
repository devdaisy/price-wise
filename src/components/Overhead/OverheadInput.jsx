import { useState, useEffect } from "react";

function OverheadInput({ onAddExpense, currentExpense }) {
  const [label, setLabel] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    if (currentExpense) {
      setLabel(currentExpense.label || "");
      setTotalCost(currentExpense.totalCost || "");
      setFrequency(currentExpense.frequency || "");
    }
  }, [currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!label || !totalCost || !frequency) {
      alert("Please make sure to fill out everything!");
      return;
    }

    const newExpense = {
      label,
      totalCost: parseFloat(totalCost),
      frequency,
    };

    onAddExpense(newExpense);
    // clear form after adding expense to list
    setLabel("");
    setTotalCost("");
    setFrequency("");
  };

  //TODO
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* expense label */}
      <div>
        <label className="block text-sm font-medium">Expense Label</label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      {/* total cost + frequency side-by-side */}
      <div className="flex space-x-4">
        {/* Total Cost */}
        <div className="flex-1 relative">
          <label className="block text-sm font-medium">Total Cost</label>
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

        {/* Frequency */}
        <div className="flex-1">
          <label className="block text-sm font-medium">Expense Frequency</label>
          <select
            className="mt-1 p-2 h-10 border rounded w-full"
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

      {/* add expense button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
      >
        {currentExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default OverheadInput;
