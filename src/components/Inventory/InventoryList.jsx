import React from "react";

function InventoryList({ items, deleteInventoryItem, editInventoryItem }) {
  if (!items || items.length === 0) {
    return (
      <div className="mb-6">
        <p className="text-gray-500 text-center">No inventory yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="text-left p-2">Item Name</th>
            <th className="text-left p-2">Quantity</th>
            <th className="text-left p-2">Unit</th>
            <th className="text-left p-2">Total Cost</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unit}</td>
              <td className="p-2">${item.totalCost.toFixed(2)}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => editInventoryItem(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteInventoryItem(index)}
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

export default InventoryList;
