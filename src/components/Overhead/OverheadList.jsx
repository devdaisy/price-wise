import { Table, Button } from "react-bootstrap";

function OverheadList({ expense, deleteOverheadExpense, editOverheadExpense }) {
  if (!expense || expense.length === 0) {
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
      <Table striped bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>Expense Label</th>
            <th>Total Cost</th>
            <th>Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((exp, index) => (
            <tr key={index}>
              <td>{exp.label}</td>
              <td>${exp.totalCost.toFixed(2)}</td>
              <td>{exp.frequency}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => editOverheadExpense(index)}
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
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OverheadList;
