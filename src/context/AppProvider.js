import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [overheadExpenses, setOverheadExpenses] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  // inventory functions
  const addInventoryItem = (item) => setInventoryItems([...inventoryItems, item]);
  const deleteInventoryItem = (index) => setInventoryItems(inventoryItems.filter((_, i) => i !== index));
  const editInventoryItem = (index, updatedItem) => {
    const updated = [...inventoryItems];
    updated[index] = updatedItem;
    setInventoryItems(updated);
  };

  // overhead functions
  const addOverheadExpense = (expense) => setOverheadExpenses([...overheadExpenses, expense]);
  const deleteOverheadExpense = (index) => setOverheadExpenses(overheadExpenses.filter((_, i) => i !== index));
  const editOverheadExpense = (index, updatedExpense) => {
    const updated = [...overheadExpenses];
    updated[index] = updatedExpense;
    setOverheadExpenses(updated);
  };

  // product functions
  const addProduct = (product) => setProducts([...products, product]);
  const deleteProduct = (index) => setProducts(products.filter((_, i) => i !== index));
  const editProduct = (index, updatedProduct) => {
    const updated = [...products];
    updated[index] = updatedProduct;
    setProducts(updated);
  };

  // service functions
  const addService = (service) => setServices([...services, service]);
  const deleteService = (index) => setServices(services.filter((_, i) => i !== index));
  const editService = (index, updatedService) => {
    const updated = [...services];
    updated[index] = updatedService;
    setServices(updated);
  };

  return (
    <AppContext.Provider
      value={{
        inventoryItems,
        addInventoryItem,
        deleteInventoryItem,
        editInventoryItem,
        overheadExpenses,
        addOverheadExpense,
        deleteOverheadExpense,
        editOverheadExpense,
        products,
        addProduct,
        deleteProduct,
        editProduct,
        services,
        addService,
        deleteService,
        editService,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;