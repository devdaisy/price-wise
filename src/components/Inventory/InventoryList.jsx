import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Table, Button } from "react-bootstrap";

function InventoryList() {
  const { inventoryItems, deleteInventoryItem, setEditingIndex } =
    useContext(AppContext);

  if (!inventoryItems || inventoryItems.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center text-center text-secondary"
        style={{ height: "50px" }}
      >
        <p className="mb-0">No inventory yet.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive mb-4">
      <Table striped bordered hover>
        <thead className="table-light">
          <tr>
            <th>Item Label</th>
            <th>Quantity</th>
            <th>Unit of Measure</th>
            <th>Total Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item, index) => {
            const upp = item.unitsPerPack ?? 1;

            const isPackWithMultiple = item.unit === "Pack(s)" && upp > 1;
            const quantityDisplay = isPackWithMultiple
              ? `${item.quantity} (${upp} Units)`
              : item.quantity;

            return (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{quantityDisplay}</td>
                <td>{item.unit || "N/A"}</td>
                <td>${item.totalCost.toFixed(2)}</td>
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
                    onClick={() => deleteInventoryItem(index)}
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

export default InventoryList;
