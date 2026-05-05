import { ArrowRight, Printer, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Soluções de Impressão
              <span className="block text-red-400">Lexmark</span>
            </h1>
            <p className="text-xl text-gray-300">
              Tecnologia de ponta em impressão profissional. Qualidade, velocidade e confiabilidade para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Ver Produtos
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Solicitar Orçamento
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <Printer className="mx-auto mb-2 text-red-400" size={32} />
                <p className="text-sm text-gray-300">Alta Performance</p>
              </div>
              <div className="text-center">
                <Zap className="mx-auto mb-2 text-red-400" size={32} />
                <p className="text-sm text-gray-300">Tecnologia Avançada</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-red-400" size={32} />
                <p className="text-sm text-gray-300">Segurança Total</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition">
              <div className="text-center space-y-4">
                <div className="text-8xl">🖨️</div>
                <h3 className="text-2xl font-bold">Impressoras Lexmark</h3>
                <p className="text-gray-100">Líderes em inovação e qualidade desde 1991</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <p className="text-3xl font-bold">30+</p>
                    <p className="text-sm">Anos de Mercado</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <p className="text-3xl font-bold">150+</p>
                    <p className="text-sm">Países</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
