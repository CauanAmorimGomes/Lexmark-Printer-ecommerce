import { X, Minus, Plus, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

const Cart = ({ isOpen, onClose, items, updateQuantity, removeFromCart }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Função de checkout será implementada. Total: R$ ' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
              <button
                onClick={onClose}
                className="mt-4 text-red-600 hover:text-red-700 font-semibold"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 flex gap-4"
                >
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                    <span className="text-4xl">{item.image}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-red-600 font-bold mb-3">
                      R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-semibold"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-gray-700">Subtotal:</span>
              <span className="text-2xl font-bold text-gray-900">
                R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <CreditCard size={20} />
              Finalizar Compra
            </button>
            
            <button
              onClick={onClose}
              className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
