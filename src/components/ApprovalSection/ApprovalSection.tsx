import React from "react";
import { Button } from "../../design-system/components/Button";

const images = [
  "https://images.pexels.com/photos/1438088/pexels-photo-1438088.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
  "https://images.pexels.com/photos/4498184/pexels-photo-4498184.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/5029859/pexels-photo-5029859.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/6853515/pexels-photo-6853515.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
  "https://images.pexels.com/photos/5745165/pexels-photo-5745165.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
  "https://images.pexels.com/photos/7031613/pexels-photo-7031613.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
];

export const ApprovalSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-[#FFFAF3]">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-12">
        <h2 className="[font-family:'Roc_Grotesk-Bold',Helvetica] font-bold text-[#161616] text-[48px] md:text-[56px] lg:text-[64px] text-center leading-tight max-w-[1200px] px-4">
          Profissionais aprovados por 9 entre 10 gatos (o outro estava dormindo)
        </h2>

        <div className="w-full relative overflow-hidden">
          <div className="flex animate-scroll-infinite gap-4">
            {[...Array(3)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-4 shrink-0">
                <div className="flex flex-col gap-4">
                  <div className="w-[280px] h-[220px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[0]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[280px] h-[280px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[1]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-[280px] h-[320px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[2]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[280px] h-[180px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[3]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-[280px] h-[220px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[4]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[280px] h-[280px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[5]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-[280px] h-[320px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[6]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[280px] h-[180px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[7]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-[280px] h-[220px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[8]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[280px] h-[280px] rounded-[32px] overflow-hidden">
                    <img
                      src={images[0]}
                      alt="Pessoa com gato"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button variant="secondary" size="lg" className="mt-4">
          Ver rede credenciada
        </Button>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
