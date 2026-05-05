import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Lexmark</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition">
              Início
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition">
              Produtos
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-red-600 transition">
              Recursos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">
              Contato
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-red-600 transition"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-red-600 transition"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
