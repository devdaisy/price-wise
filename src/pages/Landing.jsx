import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container text-center py-5">
      <h1>Welcome to PriceWise</h1>
      <p className="mt-3">
        Click "Get Started" to start setting up your inventory!
      </p>
      <Link to="/inventory" className="btn btn-dark mt-3">
        Get Started
      </Link>
    </div>
  );
}

export default Landing;
