import React, { useState } from "react";
import { Button } from "../../design-system/components/Button";
import { ChevronDown } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
}

const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: 39,
    description: "Cuidados de rotina com mais economia",
  },
  {
    id: "medio",
    name: "Médio",
    price: 79,
    description: "Cuidados de rotina com mais economia",
  },
  {
    id: "top",
    name: "Top",
    price: 139,
    description: "Cuidados de rotina com mais economia",
  },
];

export const PlansSection = (): JSX.Element => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  const [selectedCity, setSelectedCity] = useState("Belo Horizonte - MG");

  const handlePlanClick = (index: number) => {
    setSelectedPlanIndex(index);
  };

  const handlePrevious = () => {
    setSelectedPlanIndex((prev) => (prev > 0 ? prev - 1 : plans.length - 1));
  };

  const handleNext = () => {
    setSelectedPlanIndex((prev) => (prev < plans.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-[#F5E6D3]">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-12">
        <h2 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] text-[48px] md:text-[56px] lg:text-[64px] text-center leading-tight max-w-[1100px]">
          Se o seu gato tivesse cartão de crédito, já teria escolhido um desses
        </h2>

        <div className="relative flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full border-2 border-[#161616] cursor-pointer hover:bg-[#FFFAF3] transition-colors">
          <span className="[font-family:'Roc_Grotesk-Medium',Helvetica] font-medium text-[#161616] text-lg">
            {selectedCity}
          </span>
          <ChevronDown size={20} className="text-[#161616]" />
        </div>

        <div className="relative w-full max-w-[1200px] flex items-center justify-center gap-6 py-8">
          {plans.map((plan, index) => {
            const isSelected = index === selectedPlanIndex;
            const isLeft = index < selectedPlanIndex;
            const isRight = index > selectedPlanIndex;

            return (
              <div
                key={plan.id}
                onClick={() => handlePlanClick(index)}
                className={`
                  relative flex flex-col items-center justify-between p-8 rounded-[32px] border-4 cursor-pointer transition-all duration-500 ease-out
                  ${
                    isSelected
                      ? "bg-[#F9A858] border-[#161616] w-full max-w-[380px] min-h-[380px] scale-110 z-20 shadow-[4px_4px_0px_#161616]"
                      : "bg-[#F9C88D] border-[#E8C89E] w-full max-w-[320px] min-h-[320px] scale-90 opacity-60 hover:opacity-80 z-10"
                  }
                  ${isLeft ? "-mr-8" : ""}
                  ${isRight ? "-ml-8" : ""}
                `}
              >
                <div className="w-full flex flex-col items-start gap-4">
                  <h3
                    className={`[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] transition-all
                    ${isSelected ? "text-2xl" : "text-xl opacity-70"}
                  `}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] transition-all
                      ${isSelected ? "text-[72px] leading-none" : "text-[56px] leading-none opacity-70"}
                    `}
                    >
                      R${plan.price}
                    </span>
                    <span
                      className={`[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#161616] transition-all
                      ${isSelected ? "text-xl" : "text-lg opacity-70"}
                    `}
                    >
                      / mês
                    </span>
                  </div>

                  <p
                    className={`[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#161616] transition-all
                    ${isSelected ? "text-lg" : "text-base opacity-70"}
                  `}
                  >
                    {plan.description}
                  </p>
                </div>

                <Button
                  variant={isSelected ? "primary" : "outline"}
                  size={isSelected ? "md" : "sm"}
                  className={`w-full mt-6 transition-all ${
                    !isSelected ? "opacity-70" : ""
                  }`}
                >
                  Simular
                </Button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlanIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedPlanIndex
                  ? "bg-[#F99830] w-8"
                  : "bg-[#E8C89E]"
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="secondary" size="lg" className="mt-4">
          Ver tabela de cobertura
        </Button>
      </div>
    </section>
  );
};
