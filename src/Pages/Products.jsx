import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [api, setApi] = useState({ product: [] });
  const [search, setTit] = useState('');
  const [cartItems, setCartItems] = useState([]);  // Local cart state
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setApi({ product: data });
      });
  }, []);

  const valueSearch = (e) => {
    setTit(e.target.value);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);  // Add the selected product to the cart
  };

  const goToCartPage = () => {
    navigate('/cart', { state: { cartItems } });  // Navigate to the cart page and pass the cart items
  };

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }} id="srch">
        <input
          type="text"
          onChange={valueSearch}
          placeholder="Search by category"
          style={{
            height: '50px',
            width: '50%',
            marginLeft: '25%',
            border: '2px solid',
            borderRadius: '10px',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        />
        <span style={{ position: 'absolute', left: '72%', top: '35%' }}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <button id='veiw' onClick={goToCartPage}>View Cart ({cartItems.length})</button>  {/* Navigate to Cart Page */}
      </div>
      <div id="main">
        {api.product
          .filter((x) => x.category.toLowerCase().includes(search))
          .map((x) => (
            <div key={x.id} id="inner">
              <img
                src={x.image}
                alt="img"
                style={{ height: '200px', width: '200px', marginTop: '5px' }}
              />
              <p>{x.title}</p>
              <h4>Price: {x.price}</h4> <br /> <br />
              <button id="btn1" onClick={() => navigate('/detail', { state: { x } })}>
                More Details
              </button>
              <button id="btn2" onClick={() => addToCart(x)}>
                Add to Cart
              </button>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}


