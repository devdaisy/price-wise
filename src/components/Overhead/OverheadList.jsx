import React from "react";

function OutputList({ expense, deleteOverheadExpense, editOverheadExpense }) {
  if (!expense || expense.length === 0) {
    return (
      <div className="mb-6">
        <p className="text-gray-500 text-center">No overhead expenses yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="text-left p-2">Expense Label</th>
            <th className="text-left p-2">Total Cost</th>
            <th className="text-left p-2">Expense Frequency</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{expense.label}</td>
              <td className="p-2">${expense.totalCost.toFixed(2)}</td>
              <td className="p-2">{expense.frequency}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => editOverheadExpense(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteOverheadExpense(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OutputList;
