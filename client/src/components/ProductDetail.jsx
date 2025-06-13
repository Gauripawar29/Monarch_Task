import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../api";
import "bootstrap/dist/css/bootstrap.min.css"; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  const handleAdd = () => {
    addToCart(product);
    alert("Added to cart!");
  };

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg" style={{ maxWidth: "700px", width: "100%", borderRadius: "12px" }}>
        <div className="row g-0">
          <div className="col-md-5 d-flex align-items-center">
            <img
              src={product.image}
              className="img-fluid p-4"
              alt={product.title}
              style={{ objectFit: "contain", height: "300px", width: "100%" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title fw-bold mb-3">{product.title}</h4>
              <h5 className="text-success mb-3">₹{product.price}</h5>
              <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                {product.description}
              </p>
              <button className="btn btn-primary mt-3 px-4" onClick={handleAdd}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
