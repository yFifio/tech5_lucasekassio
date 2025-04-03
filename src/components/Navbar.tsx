import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User as UserIcon } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const { cart, user } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Fashion Store
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            <Link to={user ? "/profile" : "/login"}>
              <UserIcon className="w-6 h-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};