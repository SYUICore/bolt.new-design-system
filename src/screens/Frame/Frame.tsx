import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-[649px] items-center justify-center gap-8 pt-[220px] pb-[100px] px-14 bg-[#ffd094]">
      <div className="flex w-full max-w-[1512px] items-center justify-between gap-8">
      <section className="flex flex-col w-full max-w-[497px] items-start gap-8">
        <h1 className="w-full max-w-[510px] [font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] text-[80px] tracking-[0] leading-[80px]">
          O plano
          <br />
          de saúde pet para gatos
          <br />
          exigentes.
        </h1>

        <p className="w-full max-w-[435px] [font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#161616] text-[23px] tracking-[0] leading-[25.3px]">
          O primeiro (e único) plano pet só para gatos com abrangência nacional.
        </p>
      </section>

      <img
        className="w-full max-w-[523px] h-auto"
        alt="Image"
        src="/image-28.png"
      />

      <Card className="w-full max-w-[288px] bg-[#fffaf333] rounded-[32px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] border-0">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="w-full [font-family:'Roc_Grotesk-Medium',Helvetica] font-medium text-[#161616] text-xl text-center tracking-[0] leading-[24.0px]">
              Encontre a opção ideal
            </h2>

            <div className="flex items-center gap-2 px-4 py-1 w-full h-12 bg-[#fffaf333] rounded-[1000px] border border-solid border-[#fffaf3]">
              <Input
                placeholder="Nome do seu pet"
                className="w-full bg-transparent border-0 [font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-stone-500 text-lg text-center tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
              />
            </div>
          </div>

          <Button className="flex h-12 items-center justify-center gap-2 px-8 py-5 w-full bg-[#161616] rounded-[1000px] border border-solid border-[#f99830] shadow-[2px_2px_0px_#f99830] hover:bg-[#161616] hover:opacity-90">
            <span className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#fffaf3] text-xl text-center tracking-[0] leading-[normal]">
              Vamos lá
            </span>
          </Button>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
