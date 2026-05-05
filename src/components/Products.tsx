import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../App';

interface ProductsProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const products = [
  {
    id: '1',
    name: 'Lexmark MB3442adw',
    category: 'Multifuncional Monocromática',
    price: 2499.00,
    image: '🖨️',
    specs: ['42 ppm', 'Wi-Fi', 'Duplex', '250 folhas'],
    description: 'Impressora multifuncional laser monocromática ideal para pequenos escritórios.'
  },
  {
    id: '2',
    name: 'Lexmark MC3326adwe',
    category: 'Multifuncional Colorida',
    price: 3799.00,
    image: '🖨️',
    specs: ['26 ppm', 'Wi-Fi', 'Duplex', 'LCD Touch'],
    description: 'Multifuncional colorida compacta com tecnologia de impressão a laser.'
  },
  {
    id: '3',
    name: 'Lexmark CX431adw',
    category: 'Multifuncional Colorida',
    price: 4999.00,
    image: '🖨️',
    specs: ['26 ppm', 'Wi-Fi', 'NFC', '250 folhas'],
    description: 'Solução completa de impressão colorida para ambientes corporativos.'
  },
  {
    id: '4',
    name: 'Lexmark MS431dn',
    category: 'Impressora Monocromática',
    price: 1899.00,
    image: '🖨️',
    specs: ['42 ppm', 'Rede', 'Duplex', '350 folhas'],
    description: 'Impressora laser monocromática de alta velocidade.'
  },
  {
    id: '5',
    name: 'Lexmark CS431dw',
    category: 'Impressora Colorida',
    price: 2999.00,
    image: '🖨️',
    specs: ['26 ppm', 'Wi-Fi', 'Duplex', 'LCD'],
    description: 'Impressora laser colorida com conectividade sem fio.'
  },
  {
    id: '6',
    name: 'Lexmark MX521de',
    category: 'Multifuncional Monocromática',
    price: 5499.00,
    image: '🖨️',
    specs: ['46 ppm', 'Rede', 'Duplex', '650 folhas'],
    description: 'Multifuncional profissional para alto volume de impressão.'
  },
  {
    id: '7',
    name: 'Lexmark CX622ade',
    category: 'Multifuncional Colorida',
    price: 7999.00,
    image: '🖨️',
    specs: ['38 ppm', 'Rede', 'LCD 7"', '650 folhas'],
    description: 'Multifuncional colorida de alto desempenho para empresas.'
  },
  {
    id: '8',
    name: 'Lexmark MS826de',
    category: 'Impressora Monocromática',
    price: 8999.00,
    image: '🖨️',
    specs: ['66 ppm', 'Rede', 'Duplex', '1200 folhas'],
    description: 'Impressora de alta capacidade para grandes volumes.'
  },
  {
    id: '9',
    name: 'Lexmark XC4150',
    category: 'Multifuncional Colorida',
    price: 12999.00,
    image: '🖨️',
    specs: ['50 ppm', 'LCD 10"', 'NFC', '1200 folhas'],
    description: 'Multifuncional colorida premium com recursos avançados.'
  }
];

const Products = ({ addToCart }: ProductsProps) => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Impressoras
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha completa de impressoras e multifuncionais Lexmark
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 flex items-center justify-center">
                <div className="text-8xl">{product.image}</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-red-600 font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {product.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image
                    })}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105"
                  >
                    <ShoppingCart size={20} />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
