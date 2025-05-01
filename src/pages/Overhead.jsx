import { useState } from "react";
import { Link } from "react-router-dom";
import OverheadInput from "../components/Overhead/OverheadInput";
import OutputList from "../components/Overhead/OverheadList";

function Output() {
  const [overheadExpenses, setOverheadExpenses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // add overhead expense to list, if not editing expense, just add new expense
  const addOverheadExpense = (newExpense) => {
    if (editingIndex !== null) {
      const updatedExpenses = [...overheadExpenses];
      updatedExpenses[editingIndex] = newExpense;
      setOverheadExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      setOverheadExpenses([...overheadExpenses, newExpense]);
    }
  };

  // delete overhead expense from list
  const deleteOverheadExpense = (indexToDelete) => {
    const updatedExpenses = overheadExpenses.filter(
      (_, index) => index !== indexToDelete
    );
    setOverheadExpenses(updatedExpenses);

    // stop editing if expense has been deleted
    if (editingIndex !== null && editingIndex >= indexToDelete) {
      setEditingIndex(null);
    }
  };

  const editOverheadExpense = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="mb-4">
        <Link
          to="/inventory"
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
        {/* output overhead list */}
        <OutputList
          expense={overheadExpenses}
          deleteOverheadExpense={deleteOverheadExpense}
          editOverheadExpense={editOverheadExpense}
        />

        {/* output overhead input */}
        <OverheadInput
          onAddExpense={addOverheadExpense}
          currentExpense={
            editingIndex !== null ? overheadExpenses[editingIndex] : null
          }
        />
      </div>

      <div className="p-6 flex justify-end mt-12">
        <Link to="/product-builder">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-xl"
          >
            Next: Product Builder
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Output;
