import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ganho desconto se contratar para mais de um pet?",
    answer:
      "Sim! Oferecemos descontos progressivos para quem contrata planos para múltiplos pets. Quanto mais pets você cadastrar, maior será o desconto aplicado. Entre em contato com nossa equipe para saber mais sobre as condições especiais para múltiplos pets.",
  },
  {
    question: "Preciso pagar taxas de coparticipação toda vez que meu pet usar o plano?",
    answer:
      "Não, nossos planos não possuem coparticipação. Você paga apenas a mensalidade do plano escolhido e pode utilizar os serviços cobertos sem custos adicionais, respeitando os limites e coberturas contratadas. Isso garante mais previsibilidade nos seus gastos com a saúde do seu pet.",
  },
  {
    question: "E se meu pet passar mal de madrugada?",
    answer:
      "Nosso plano oferece cobertura 24 horas por dia, 7 dias por semana. Você pode levar seu pet para atendimento emergencial em qualquer uma das nossas clínicas credenciadas que funcionam 24h. Consulte a lista de clínicas disponíveis na sua região através do app ou site.",
  },
  {
    question: "Posso usar o plano no mesmo dia da contratação?",
    answer:
      "Alguns serviços possuem carência, que varia de acordo com o tipo de procedimento. Consultas simples geralmente têm carência menor, enquanto procedimentos mais complexos podem ter períodos de carência maiores. Você pode acompanhar todos os prazos através da Área do Tutor no nosso app.",
  },
  {
    question: "Preciso microchipar o meu gato para usar o plano de saúde da Catlife?",
    answer:
      "O microchip não é obrigatório para contratar o plano, mas é altamente recomendado para a segurança do seu pet. Alguns de nossos planos incluem o serviço de microchipagem sem custo adicional. O microchip ajuda na identificação do seu gato em caso de perda e facilita o atendimento nas clínicas credenciadas.",
  },
  {
    question: "Como funciona o pagamento por cartão de crédito?",
    answer:
      "O pagamento pode ser feito através de cartão de crédito com cobrança recorrente mensal automática. Aceitamos as principais bandeiras (Visa, Mastercard, Elo, American Express). Você também pode optar por outras formas de pagamento como boleto bancário ou débito automático em conta corrente.",
  },
  {
    question: "O plano cobra taxa de adesão?",
    answer:
      "Não cobramos taxa de adesão! Você paga apenas a mensalidade do plano escolhido desde o primeiro mês. Não há custos ocultos ou taxas extras para começar a cuidar da saúde do seu pet com a Catlife.",
  },
];

export const FAQSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-[#FFD4A3]">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <h2 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#1A1A1A] text-[56px] md:text-[64px] lg:text-[72px] leading-tight mb-8">
            Perguntas
            <br />
            frequentes
          </h2>

          <div className="relative w-full max-w-[500px] mt-8">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <ellipse
                cx="200"
                cy="400"
                rx="150"
                ry="80"
                fill="#E6E6E6"
                opacity="0.5"
              />
              <ellipse
                cx="350"
                cy="420"
                rx="100"
                ry="50"
                fill="#FFE5C2"
                opacity="0.6"
              />

              <circle cx="250" cy="250" r="120" fill="#1A1A1A" />
              <ellipse cx="210" cy="200" rx="35" ry="45" fill="#FF9830" />
              <ellipse cx="290" cy="200" rx="35" ry="45" fill="#FF9830" />

              <path
                d="M160 220 Q140 200 145 175 Q150 160 160 165 L180 190"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="3"
              />
              <path
                d="M340 220 Q360 200 355 175 Q350 160 340 165 L320 190"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="3"
              />

              <circle cx="220" cy="230" r="22" fill="white" />
              <circle cx="280" cy="230" r="22" fill="white" />
              <circle cx="220" cy="230" r="16" fill="#1A1A1A" />
              <circle cx="280" cy="230" r="16" fill="#1A1A1A" />
              <circle cx="215" cy="225" r="6" fill="white" />
              <circle cx="275" cy="225" r="6" fill="white" />

              <path
                d="M230 250 Q250 265 270 250"
                stroke="#1A1A1A"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx="250" cy="285" r="8" fill="white" />

              <path
                d="M180 340 L210 310 L240 340"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M320 340 L290 310 L260 340"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <ellipse
                cx="160"
                cy="250"
                rx="25"
                ry="35"
                fill="#E6E6E6"
                opacity="0.7"
              />
              <ellipse
                cx="340"
                cy="250"
                rx="25"
                ry="35"
                fill="#E6E6E6"
                opacity="0.7"
              />

              <path
                d="M120 100 Q110 110 100 100 Q90 90 95 80 L110 95"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <circle cx="115" cy="92" r="3" fill="#FF9830" />
              <path
                d="M100 125 L115 110 L125 125 Q120 135 110 135 Q100 135 100 125 Z"
                fill="#1A1A1A"
                stroke="#1A1A1A"
                strokeWidth="2"
              />

              <ellipse
                cx="380"
                cy="350"
                rx="40"
                ry="25"
                fill="#FF9830"
                opacity="0.8"
              />
              <ellipse cx="380" cy="355" rx="35" ry="20" fill="#FFB866" />
              <circle cx="370" cy="345" r="4" fill="#1A1A1A" />
              <circle cx="390" cy="345" r="4" fill="#1A1A1A" />
              <path
                d="M375 355 Q380 358 385 355"
                stroke="#1A1A1A"
                strokeWidth="2"
                fill="none"
              />

              <rect
                x="340"
                y="360"
                width="15"
                height="30"
                rx="7"
                fill="#FF9830"
              />
              <rect
                x="365"
                y="360"
                width="15"
                height="30"
                rx="7"
                fill="#FF9830"
              />

              <ellipse
                cx="200"
                cy="420"
                rx="120"
                ry="25"
                fill="#1A1A1A"
                opacity="0.15"
              />
              <ellipse
                cx="300"
                cy="430"
                rx="80"
                ry="20"
                fill="#1A1A1A"
                opacity="0.1"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border-2 border-[#1A1A1A] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FFF8F0] transition-colors"
              >
                <span className="[font-family:'Roc_Grotesk-Medium',Helvetica] font-medium text-[#1A1A1A] text-[18px] md:text-[20px] leading-[26px] pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF9830] flex items-center justify-center transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#1A1A1A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#1A1A1A]" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#1A1A1A] text-[16px] md:text-[18px] leading-[24px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
