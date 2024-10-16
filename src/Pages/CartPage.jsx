

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function CartPage() {
//   const location = useLocation();
//   const [cartItems, setCartItems] = useState(location.state?.cartItems || []);  // Initialize cart items from location state

//   // Function to remove item from cart
//   const removeFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);  // Update cart items state
//   };

//   return (
//     <div id="carted">
//       <h2>Your Cart</h2>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div className="cart-item" key={index}>
//             <img src={item.image} alt={item.title} />
//             <p>{item.title}</p>
//             <h6>Price: {item.price}</h6>
//             <button id='buy'>Buy Now</button>
//             <button onClick={() => removeFromCart(index)}>
//               Remove
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
  
// }



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []); // Initialize cart items from location state

  // Function to remove item from cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart); // Update cart items state
  };

  // Function to handle "Buy Now" action
  const buyNow = (item) => {
    // Simulate a purchase process
    alert(`Thank you for purchasing: ${item.title} for $${item.price}`);
    
    // Remove the purchased item from the cart
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);

    // Optionally, navigate to a success page after purchase
    if (updatedCart.length === 0) {
      navigate('/success'); // Navigate to a success page or a confirmation screen
    }
  };

  return (
    <div id="carted">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <p>{item.title}</p>
            <h6>Price: ${item.price}</h6>
            <button id='buy' onClick={() => buyNow(item)}>Buy Now</button>
            <button  onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}






