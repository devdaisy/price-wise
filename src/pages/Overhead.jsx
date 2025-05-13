import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import OverheadInput from "../components/Overhead/OverheadInput";
import OverheadList from "../components/Overhead/OverheadList";

function Overhead() {
  const {
    overheadExpenses,
    addOverheadExpense,
    deleteOverheadExpense,
    editOverheadExpense,
  } = useContext(AppContext);

  return (
    <div className="container py-5">
      {/* back button + header */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/inventory" className="btn btn-outline-secondary">
          &larr; Back to Inventory
        </Link>
        <h2 className="mb-0 text-end">Overhead Expense Management</h2>
      </header>

      {/* overhead list */}
      <div className="border rounded p-4 mb-4">
        <OverheadList
          expense={overheadExpenses}
          deleteOverheadExpense={deleteOverheadExpense}
          editOverheadExpense={editOverheadExpense}
        />
      </div>

      {/* overhead input form */}
      <div className="border rounded p-4 mb-4">
        <OverheadInput onAddExpense={addOverheadExpense} />
      </div>

      {/* next button */}
      <div className="d-flex justify-content-end mt-5">
        <Link
          to="/builder"
          className="btn btn-outline-dark px-4 py-2 mt-0 shadow"
        >
          Next: Builder
        </Link>
      </div>
    </div>
  );
}

export default Overhead;
