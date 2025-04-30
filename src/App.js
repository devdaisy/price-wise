import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <div>
        <p class="bg-gradient-to-r from-blue-600 to-fuchsia-600 text-4xl font-bold text-white">
          PriceWise
        </p>
      </div>
      <AppRoutes />
    </Router>
  );
}

export default App;