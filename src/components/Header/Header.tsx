import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header" role="banner">
        <div className="header__container">
          <button
            className="header__hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} strokeWidth={2} />
          </button>

          <div className="header__logo">
            <a href="/" aria-label="CatLife Home">
              <span className="header__logo-text">CatLife</span>
            </a>
          </div>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              <li>
                <a href="#planos" className="header__nav-link">
                  Planos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="header__nav-link">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#rede-credenciada" className="header__nav-link">
                  Rede credenciada
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <Button
              variant="outline"
              className="header__button header__button--entrar"
            >
              Entrar
            </Button>
            <Button className="header__button header__button--simular">
              Simular plano
            </Button>
            <div className="header__avatar" aria-label="User profile">
              <img
                src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=80&h=80"
                alt="User avatar"
                className="header__avatar-image"
              />
            </div>
          </div>

          <button
            className="header__mobile-simular"
            onClick={() => window.location.href = '#simular'}
            aria-label="Simular plano"
          >
            <span>Simular plano</span>
          </button>

          <button
            className="header__mobile-hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </header>

      <div
        className={`header__overlay ${isMenuOpen ? "header__overlay--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="header__overlay-header">
          <button
            className="header__overlay-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={2} />
          </button>

          <div className="header__overlay-logo">
            <span className="header__logo-text">CatLife</span>
          </div>

          <nav className="header__overlay-nav-top" aria-label="Top navigation">
            <ul className="header__nav-list">
              <li>
                <a href="#planos" className="header__nav-link">
                  Planos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="header__nav-link">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#rede-credenciada" className="header__nav-link">
                  Rede credenciada
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__overlay-actions">
            <Button
              variant="outline"
              className="header__button header__button--entrar"
            >
              Entrar
            </Button>
            <Button className="header__button header__button--simular">
              Simular plano
            </Button>
            <div className="header__avatar">
              <img
                src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=80&h=80"
                alt="User avatar"
                className="header__avatar-image"
              />
            </div>
          </div>
        </div>

        <nav className="header__overlay-nav" aria-label="Mobile navigation">
          <ul className="header__overlay-list">
            <li>
              <a
                href="#planos"
                className="header__overlay-link"
                onClick={toggleMenu}
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#como-funciona"
                className="header__overlay-link"
                onClick={toggleMenu}
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#rede-credenciada"
                className="header__overlay-link"
                onClick={toggleMenu}
              >
                Rede credenciada
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="header__overlay-link"
                onClick={toggleMenu}
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <footer className="header__overlay-footer">
          <div className="header__overlay-footer-content">
            <span className="header__overlay-footer-label">Aparência</span>
            <select className="header__overlay-footer-select" aria-label="Theme selector">
              <option value="claro">Claro</option>
              <option value="escuro">Escuro</option>
              <option value="auto">Automático</option>
            </select>
          </div>
        </footer>
      </div>

      {isMenuOpen && (
        <div
          className="header__backdrop"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};
