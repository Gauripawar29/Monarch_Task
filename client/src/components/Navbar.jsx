import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid justify-content-center">

      
        <div className="d-flex align-items-center me-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="ShopSmart Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span className="navbar-brand fw-bold mb-0 h1">ShopSmart</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
