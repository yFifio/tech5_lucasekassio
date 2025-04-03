import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Seu carrinho está vazio
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Continuar Comprando
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center py-4 border-b"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">
                R$ {item.product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  updateQuantity(
                    item.product.id,
                    Math.max(1, item.quantity - 1)
                  )
                }
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.product.id)}
              className="ml-4 p-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <div className="mt-8 flex justify-between items-center">
          <div className="text-xl font-bold">Total: R$ {total.toFixed(2)}</div>
          <button
            onClick={() => navigate("/checkout")}
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};
