import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas com nossa equipe especializada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fale Conosco
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600">0800 702 4088</p>
                  <p className="text-gray-600">(11) 4004-4088</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">vendas@lexmark.com.br</p>
                  <p className="text-gray-600">suporte@lexmark.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Av. Paulista, 1842 - 12º andar<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-945
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-900 to-red-900 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-semibold">8h às 18h</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-semibold">9h às 13h</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-semibold">Fechado</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-green-700">
                  Obrigado pelo contato. Nossa equipe responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none resize-none"
                    placeholder="Descreva suas necessidades..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
