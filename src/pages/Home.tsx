import React from 'react';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export const Home = () => {
  const { addToCart } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Novidades</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  R$ {product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};