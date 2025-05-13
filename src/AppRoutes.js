import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Inventory from './pages/Inventory';
import Overhead from './pages/Overhead';
import Builder from './pages/Builder';
import Pricing from './pages/Pricing';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/overhead" element={<Overhead />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* redirect all unknown URLs back to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;