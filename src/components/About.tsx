import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Lexmark
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A <strong>Lexmark International</strong> é uma empresa líder global em soluções de imagem empresarial, 
                incluindo impressoras a laser, multifuncionais, suprimentos e serviços empresariais que ajudam 
                clientes a economizar tempo e dinheiro.
              </p>
              <p>
                Fundada em 1991 em Lexington, Kentucky (EUA), a Lexmark se tornou uma referência mundial em 
                tecnologia de impressão, atendendo empresas de todos os portes em mais de 150 países.
              </p>
              <p>
                Nosso compromisso é fornecer produtos inovadores, sustentáveis e seguros que aumentam a 
                produtividade e reduzem custos operacionais, sempre com foco na satisfação do cliente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-red-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-600">Anos de Excelência</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="text-red-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">150+</p>
                <p className="text-sm text-gray-600">Países Atendidos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="text-red-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">Funcionários</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="text-red-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">Top 5</p>
                <p className="text-sm text-gray-600">Mercado Mundial</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-700">
                Proporcionar soluções inovadoras de impressão e gestão de documentos que impulsionem 
                a eficiência e o sucesso dos nossos clientes, mantendo sempre o compromisso com a 
                sustentabilidade e a excelência tecnológica.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a empresa mais inovadora e confiável em soluções de impressão 
                corporativa, transformando a maneira como as empresas gerenciam seus documentos e 
                processos de trabalho.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossos Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Inovação contínua em tecnologia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Compromisso com a sustentabilidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Excelência no atendimento ao cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Integridade em todas as operações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
