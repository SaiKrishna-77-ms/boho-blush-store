import React, { useState } from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom';

function App(){
  const [cart, setCart] = useState([]);
  const sarees = [
    { id:1, name:'Kanchipuram Silk', price:2500, img:'https://images.unsplash.com/photo-1596461404969-9ae70b6f0d9b?auto=format&fit=crop&w=600&q=80' },
    { id:2, name:'Banarasi Saree', price:3200, img:'https://images.unsplash.com/photo-1587583770405-dbe5042ca09d?auto=format&fit=crop&w=600&q=80' },
    { id:3, name:'Pochampally Cotton', price:1800, img:'https://images.unsplash.com/photo-1622346200792-6d0e93b8a1b1?auto=format&fit=crop&w=600&q=80' },
    { id:4, name:'Designer Georgette', price:2800, img:'https://images.unsplash.com/photo-1601924994987-69e26d13c27d?auto=format&fit=crop&w=600&q=80' },
    { id:5, name:'Party Wear Net', price:3500, img:'https://images.unsplash.com/photo-1578932750294-f5075e85f44d?auto=format&fit=crop&w=600&q=80' },
    { id:6, name:'Linen Saree', price:2100, img:'https://images.unsplash.com/photo-1598858066214-39718d5b450a?auto=format&fit=crop&w=600&q=80' }
  ];

  const addToCart = (s) => setCart(prev => [...prev, s]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    alert("Please pay via UPI: your-upi@upi (Replace with your real UPI ID)");
  };

  return React.createElement('div', null,
    React.createElement('h1', {style:{textAlign:'center', color:'#ff4081'}}, 'Boho Blush Saree Store'),
    React.createElement('div', {className:'grid'},
      sarees.map(s => React.createElement('div', {key:s.id, className:'card'},
        React.createElement('img', {src:s.img, alt:s.name}),
        React.createElement('div', {className:'card-body'},
          React.createElement('h3', null, s.name),
          React.createElement('p', null, '₹' + s.price),
          React.createElement('button', {className:'btn', onClick:() => addToCart(s)}, 'Add to Cart')
        )
      ))
    ),
    React.createElement('div', {className:'cart'},
      React.createElement('h2', null, 'Cart (' + cart.length + ')' ),
      cart.length === 0 ? React.createElement('p', null, 'No items in cart') :
        React.createElement('ul', null, cart.map((it, i) => React.createElement('li', {key:i}, it.name + ' - ₹' + it.price))),
      cart.length > 0 && React.createElement('p', {style:{fontWeight:'bold'}}, 'Total: ₹' + total),
      cart.length > 0 && React.createElement('button', {className:'btn pay-btn', onClick:handlePayment}, 'Pay via UPI')
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
