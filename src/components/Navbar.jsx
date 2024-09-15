import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Badge } from 'antd'
import { CartContext } from '../context/CartContext';
const Navbar = () => {
  const {products} = useContext(CartContext)
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between p-4 shadow-md z-50">
   
      <div className="text-4xl font-bold">React Store</div>
      
      
      <div className="text-2xl cursor-pointer">
      <Link to={'/cart'}><Badge count={products.length}>  <FaShoppingCart style={{ color: 'white', fontSize: '30' }} /></Badge></Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
