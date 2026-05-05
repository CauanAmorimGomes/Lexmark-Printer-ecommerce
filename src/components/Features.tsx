import { Shield, Zap, Cloud, Wifi, Lock, BarChart3, Leaf, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Proteção de dados com criptografia, autenticação e recursos de segurança em múltiplas camadas.'
  },
  {
    icon: Zap,
    title: 'Alta Performance',
    description: 'Velocidades de impressão de até 66 ppm com qualidade profissional em cada página.'
  },
  {
    icon: Cloud,
    title: 'Impressão na Nuvem',
    description: 'Conectividade com serviços em nuvem para impressão de qualquer lugar, a qualquer momento.'
  },
  {
    icon: Wifi,
    title: 'Conectividade Total',
    description: 'Wi-Fi, Ethernet, NFC e compatibilidade com impressão móvel via AirPrint e Google Cloud Print.'
  },
  {
    icon: Lock,
    title: 'Gestão de Acesso',
    description: 'Controle total sobre quem imprime o quê, com autenticação de usuários e logs detalhados.'
  },
  {
    icon: BarChart3,
    title: 'Análise e Relatórios',
    description: 'Ferramentas de análise para monitorar uso, custos e otimizar sua operação de impressão.'
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Tecnologia eco-friendly com economia de energia e programas de reciclagem de toners.'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Suporte técnico especializado e garantia estendida para sua tranquilidade.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recursos e Tecnologias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra por que as impressoras Lexmark são a escolha de empresas ao redor do mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-4 group-hover:scale-110 transition">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">99.9%</p>
              <p className="text-gray-300">Tempo de Atividade</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">-30%</p>
              <p className="text-gray-300">Redução de Custos</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-gray-300">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
