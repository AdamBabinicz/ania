import React, { useState } from "react";
import img from "../assets/1.png";

function Header() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <header className="header" id="/">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header-section">
                <h1>Ania,</h1>
                <h2>nie z Zielonego Wzgórza</h2>
                <span>
                  "Sprawia mi frajdę wyszukiwanie ciekawych ubrań w sklepach
                  typu Second-Hand."
                </span>
                <div className="header__buttons">
                  <a
                    href="#header"
                    className="btn btn-outline"
                    onClick={() => toggleTab(1)}
                  >
                    Czytaj
                  </a>
                </div>

                <div
                  className={
                    toggleState === 1
                      ? "services__modal active-modal"
                      : "services__modal"
                  }
                >
                  <div className="services__modal-content">
                    <i
                      onClick={() => toggleTab(0)}
                      className="uil uil-times services__modal-close"
                    ></i>
                    <h3 className="services__modal-title">
                      Ochrona planety i kieszeni
                    </h3>
                    <p className="services__modal-description">
                      Gotuję przeważnie jakieś potrawy, które wymyślam, mając do
                      wykorzystania jakiś produkt przeważnie, żeby zapobiec jego
                      wyrzuceniu lub zepsuciu. Metoda "zero waste", ponieważ nie
                      lubię wyrzucać jedzenia i&nbsp;jestem w stanie przerobić
                      praktycznie wszystko.
                    </p>
                    <div className="services__modal-services">
                      <img src={img} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="./image/4.png" alt="..." className="image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
