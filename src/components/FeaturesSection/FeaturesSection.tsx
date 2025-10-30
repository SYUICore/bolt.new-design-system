import React from "react";
import { Button } from "../ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="features-section" aria-labelledby="features-heading">
      <div className="features-section__container">
        <header className="features-section__header">
          <h2 id="features-heading" className="features-section__title">
            Seu gato merece um plano de saúde feito{" "}
            <strong>exclusivamente</strong> para ele, e você sabe disso
          </h2>
          <p className="features-section__subtitle">
            A Catlife tem coberturas completas e um jeito descomplicado de cuidar do seu pet.
          </p>
        </header>

        <div className="features-section__grid">
          <article className="features-card features-card--specialist">
            <div className="features-card__icon-group">
              <img
                src="/section-1__asset-1.png"
                alt="Ícones de especialista e atendimento domiciliar"
                className="features-card__icon-image"
              />
            </div>
            <h3 className="features-card__title">
              Consultas com <strong>especialista</strong>
              <br />
              e <strong>à domicílio</strong> desde o plano
              <br />
              mais <strong>básico</strong>
            </h3>
          </article>

          <article className="features-card features-card--procedures">
            <div className="features-card__checklist">
              <img
                src="/section-1__asset-2.png"
                alt="Lista de procedimentos: Consultas, Teste rápido, Vacinas, Telemedicina"
                className="features-card__checklist-image"
              />
            </div>
            <h3 className="features-card__title">
              Procedimentos <strong>pré-aprovados</strong> e<br />
              <strong>sem coparticipação</strong>
            </h3>
          </article>

          <article className="features-card features-card--discounts">
            <div className="features-card__pets">
              <img
                src="/section-1__asset-4.png"
                alt="Lista de pets com descontos: Nina Maria 10%, Francisco 20%, Geraldinho 30%, Abobrinha 40%"
                className="features-card__pets-image"
              />
            </div>
            <h3 className="features-card__title">
              Adicione mais gatinhos e<br />
              <strong>ganhe até 40% de desconto</strong>
              <br />
              na mensalidade.
            </h3>
          </article>

          <article className="features-card features-card--coverage">
            <div className="features-card__content-wrapper">
              <h3 className="features-card__label">
                Tabela de<br />
                cobertura para<br />
                gatos <strong>mais<br />
                completa</strong> do<br />
                mercado
              </h3>
              <div className="features-card__table">
                <img
                  src="/section-1__asset-3.png"
                  alt="Tabela de cobertura incluindo: Consultas, Exames laboratoriais, Vacinas, Procedimentos Médico-veterinário, Testes rápidos, Cirurgias"
                  className="features-card__table-image"
                />
              </div>
            </div>
          </article>
        </div>

        <footer className="features-section__footer">
          <Button className="features-section__cta">
            Simular o plano ideal
          </Button>
        </footer>
      </div>
    </section>
  );
};
