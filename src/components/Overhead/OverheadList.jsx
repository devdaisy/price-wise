import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Table, Button } from "react-bootstrap";

function OverheadList() {
  const { overheadExpenses, deleteOverheadExpense, setEditingIndex } =
    useContext(AppContext);

  if (!overheadExpenses || overheadExpenses.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center text-center text-secondary"
        style={{ height: "50px" }}
      >
        <p className="mb-0">No overhead yet.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive mb-4">
      <Table striped bordered hover>
        <thead className="table-light">
          <tr>
            <th>Expense Label</th>
            <th>Total Cost</th>
            <th>Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {overheadExpenses.map((exp, index) => {
            if (!exp) return null;

            return (
              <tr key={index}>
                <td>{exp.label}</td>
                <td>${exp.totalCost.toFixed(2)}</td>
                <td>{exp.frequency}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => setEditingIndex(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => deleteOverheadExpense(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OverheadList;
