import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppNavbar from './components/Navbar';

function App() {
  const { pathname } = useLocation();

  // only hide navbar on "/" landing page, for now at least
  const showNavbar = pathname !== '/';

  return (
    <>
      {showNavbar && <AppNavbar />}
      <AppRoutes />
    </>
  );
}

export default App;