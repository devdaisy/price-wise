import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  /** =======================
   *  State Management
   *  =======================
   */
  const [inventoryItems, setInventoryItems] = useState([]);
  const [overheadExpenses, setOverheadExpenses] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Handles editing state globally

  /** =======================
   *  Inventory Functions
   *  =======================
   */
  const addInventoryItem = (item) => {
    setInventoryItems([...inventoryItems, item]);
  };

  const editInventoryItem = (index, updatedItem) => {
    const updated = [...inventoryItems];
    if (updated[index]) {
      updated[index] = { ...updated[index], ...updatedItem };
      setInventoryItems(updated);
    }
    setEditingIndex(null); // Reset editing index after update
  };

  const deleteInventoryItem = (index) => {
    setInventoryItems(inventoryItems.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  /** =======================
   *  Overhead Functions
   *  =======================
   */
  const addOverheadExpense = (expense) => {
    setOverheadExpenses([...overheadExpenses, expense]);
  };

  const editOverheadExpense = (index, updatedExpense) => {
    const updated = [...overheadExpenses];
    if (updated[index]) {
      updated[index] = { ...updated[index], ...updatedExpense };
      setOverheadExpenses(updated);
    }
    setEditingIndex(null); // Reset editing index after update
  };

  const deleteOverheadExpense = (index) => {
    setOverheadExpenses(overheadExpenses.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  /** =======================
   *  Product Functions
   *  =======================
   */
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (index, updatedProduct) => {
    const updated = [...products];
    if (updated[index]) {
      updated[index] = { ...updated[index], ...updatedProduct };
      setProducts(updated);
    }
    setEditingIndex(null);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  /** =======================
   *  Service Functions
   *  =======================
   */
  const addService = (service) => {
    setServices([...services, service]);
  };

  const editService = (index, updatedService) => {
    const updated = [...services];
    if (updated[index]) {
      updated[index] = { ...updated[index], ...updatedService };
      setServices(updated);
    }
    setEditingIndex(null);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  /** =======================
   *  Context Value
   *  =======================
   */
  const contextValue = {
    // Inventory
    inventoryItems,
    addInventoryItem,
    editInventoryItem,
    deleteInventoryItem,

    // Overhead
    overheadExpenses,
    addOverheadExpense,
    editOverheadExpense,
    deleteOverheadExpense,

    // Products
    products,
    addProduct,
    editProduct,
    deleteProduct,

    // Services
    services,
    addService,
    editService,
    deleteService,

    // Editing
    editingIndex,
    setEditingIndex,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;