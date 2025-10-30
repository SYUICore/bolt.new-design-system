import React from "react";
import { Button } from "../../design-system/components/Button";

export const TelemedicineSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-[#FFFAF3]">
      <div className="w-full max-w-[1440px] flex items-center justify-center">
        <div className="relative w-full max-w-[1360px] h-[560px] rounded-[48px] overflow-hidden bg-[#F9C88D] flex items-center">
          <div className="absolute inset-0 flex items-center justify-between">
            <div className="w-1/2 h-full flex flex-col items-start justify-center pl-16 pr-8 gap-8">
              <h2 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] text-[56px] leading-[60px] max-w-[520px]">
                Telemedicina ilimitada
              </h2>

              <p className="[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#161616] text-[23px] leading-[28px] max-w-[480px]">
                Receba orientação veterinária 24 horas por dia sem precisar tirar seu gato do sofá!
              </p>

              <Button
                variant="secondary"
                size="lg"
                className="mt-2 bg-[#F99830] hover:bg-[#FF9D42] border-[#161616] text-[#161616] shadow-none"
              >
                Contratar
              </Button>
            </div>

            <div className="w-1/2 h-full relative">
              <img
                src="https://images.pexels.com/photos/6899349/pexels-photo-6899349.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Pessoa relaxando com gato no sofá enquanto usa laptop"
                className="absolute right-0 top-0 w-full h-full object-cover rounded-r-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
