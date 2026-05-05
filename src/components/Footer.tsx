// Footer component

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold">Lexmark</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções de impressão profissional para empresas de todos os portes.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Impressoras Laser</a></li>
              <li><a href="#" className="hover:text-white transition">Multifuncionais</a></li>
              <li><a href="#" className="hover:text-white transition">Impressoras Coloridas</a></li>
              <li><a href="#" className="hover:text-white transition">Suprimentos</a></li>
              <li><a href="#" className="hover:text-white transition">Acessórios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition">Drivers</a></li>
              <li><a href="#" className="hover:text-white transition">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Garantia</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Parceiros</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; 2024 Lexmark International, Inc. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
