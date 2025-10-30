import React, { useState } from "react";
import { Button } from "../../design-system/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StepCard {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const steps: StepCard[] = [
  {
    title: "Veja como é simples usar a Catlife",
    description: "",
    icon: "mascot",
    bgColor: "bg-[#FF9830]",
  },
  {
    title: "Escolha a cobertura",
    description:
      "Selecione o plano de saúde que combina com o seu pet e com a sua rotina.",
    icon: "phone",
    bgColor: "bg-[#FFC896]",
  },
  {
    title: "Aguarde a carência",
    description:
      "Cada procedimento tem um prazo para ficar disponível. Você pode acompanhar pela Área do Tutor.",
    icon: "clock",
    bgColor: "bg-[#FF9830]",
  },
  {
    title: "Use quando estiver liberado",
    description:
      "Assim que a carência acabar, agende os procedimentos direto com os credenciados. Não precisa de aprovação prévia.",
    icon: "thumbs-up",
    bgColor: "bg-[#FFB866]",
  },
];

export const HowToUseSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "mascot":
        return (
          <div className="w-full h-full flex items-end justify-center pb-8">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" fill="#1A1A1A" />
              <ellipse cx="70" cy="60" rx="25" ry="30" fill="#FF9830" />
              <ellipse cx="130" cy="60" rx="25" ry="30" fill="#FF9830" />
              <path
                d="M50 80 Q30 60 40 40 L60 60"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <path
                d="M150 80 Q170 60 160 40 L140 60"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <circle cx="75" cy="90" r="15" fill="white" />
              <circle cx="125" cy="90" r="15" fill="white" />
              <circle cx="75" cy="90" r="10" fill="#1A1A1A" />
              <circle cx="125" cy="90" r="10" fill="#1A1A1A" />
              <path
                d="M85 105 Q100 115 115 105"
                stroke="#1A1A1A"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M60 140 L80 120 L100 140"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <path
                d="M140 140 L120 120 L100 140"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      case "phone":
        return (
          <div className="w-[180px] h-[180px] rounded-full bg-[#FF9830] flex items-center justify-center mx-auto">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="25"
                y="10"
                width="30"
                height="50"
                rx="4"
                fill="#1A1A1A"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M15 35 Q10 35 10 30 Q10 25 15 25"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <path
                d="M65 35 Q70 35 70 30 Q70 25 65 25"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      case "clock":
        return (
          <div className="w-[180px] h-[180px] rounded-full bg-[#FFB866] flex items-center justify-center mx-auto">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="35"
                cy="50"
                r="18"
                fill="#1A1A1A"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="50"
                x2="35"
                y2="40"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="50"
                x2="42"
                y2="50"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M55 30 Q75 25 80 35 Q85 45 75 55 Q65 65 55 60"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      case "thumbs-up":
        return (
          <div className="w-[180px] h-[180px] rounded-full bg-[#FFD4A3] flex items-center justify-center mx-auto">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 45 L30 65 L45 65 L45 45 Q45 35 40 25 L38 20 Q40 18 42 20 L45 30 Q50 35 50 45 L50 60 Q50 65 45 65 L25 65 Q20 65 20 60 L20 50 Q20 45 25 45 Z"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <path
                d="M48 35 L52 28 M52 38 L58 35 M50 42 L55 45"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-[#FFB866]">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
        <div className="w-full flex justify-end mb-4 gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#FFB866] border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-[#FFC896] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#FFB866] border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-[#FFC896] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-[#1A1A1A]" />
          </button>
        </div>

        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 1)}%)`,
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-4"
              >
                <div
                  className={`${step.bgColor} w-full max-w-[360px] h-[500px] rounded-[48px] border-3 border-[#1A1A1A] p-8 flex flex-col ${
                    index === 0 ? "justify-between" : "justify-start gap-6"
                  }`}
                >
                  {index === 0 ? (
                    <>
                      <h2 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#1A1A1A] text-[36px] leading-[40px] text-center">
                        {step.title}
                      </h2>
                      {renderIcon(step.icon)}
                    </>
                  ) : (
                    <>
                      <h3 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#1A1A1A] text-[32px] leading-[36px] text-center">
                        {step.title}
                      </h3>
                      <p className="[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#1A1A1A] text-[18px] leading-[24px] text-center">
                        {step.description}
                      </p>
                      {renderIcon(step.icon)}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#1A1A1A] w-8"
                  : "bg-[#FFC896] hover:bg-[#FFD4A3]"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          size="lg"
          className="mt-8 bg-[#FFB866] hover:bg-[#FFC896] border-2 border-[#1A1A1A] text-[#1A1A1A]"
        >
          Ver preços
        </Button>
      </div>
    </section>
  );
};
