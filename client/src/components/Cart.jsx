import { useEffect, useState } from "react";
import { getCart } from "../api";
import axios from "axios"; 
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((res) => setCart(res.data));
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCart(cart.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={{ marginBottom: "10px" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "60px", verticalAlign: "middle", marginRight: "10px" }}
              />
              <span>{item.title}</span> - ₹{item.price}
              <button
                style={{ marginLeft: "10px", padding: "2px 8px", cursor: "pointer" }}
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
