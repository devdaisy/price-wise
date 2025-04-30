import { Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory';
import Overhead from './pages/Overhead';
import ProductBuilder from './pages/ProductBuilder';
import ServiceBuilder from './pages/ServiceBuilder';
import Pricing from './pages/Pricing';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/overhead" element={<Overhead />} />
      <Route path="/product-builder" element={<ProductBuilder />} />
      <Route path="/service-builder" element={<ServiceBuilder />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default AppRoutes;