import React, { useState } from "react";
import img from "../assets/2.jpg";
import img1 from "../assets/3.jpg";

function About() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="about" id="o_sobie">
      <div className="container">
        <div className="common">
          <h2 className="about-title">O&nbsp;sobie</h2>
          <div className="underline-border"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={img} alt="..." />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h2>Zajęcia</h2>
              <div className="about__ifo">
                <p>"Interesuję się gotowaniem i&nbsp;historią.</p>
                <p>
                  Aktywnie spędzam czas z przyjaciółmi zwiedzając różne miasta w
                  Polsce lub jeżdżąc na rolkach. Regularnie chodzę na siłownię.
                </p>
                <p>
                  W kinematografii i literaturze lubię magiczne światy i inną
                  perspektywę wymiaru świata.
                </p>
                <p>
                  Po pracy zazwyczaj wykonuje jakieś zadania dotyczące
                  naprawienia czegoś lub posprzątania."
                </p>
                <div className="about__buttons">
                  <a
                    href="#about"
                    className="btn about-btn-outline"
                    onClick={() => toggleTab(1)}
                  >
                    Więcej
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
                    <h3 className="services__modal-title">Opinie</h3>
                    <p className="services__modal-description">
                      Pracowita, kocha zwierzęta, zawsze pomocna, lubi gotować i
                      próbować różne nowe potrawy, oszczędna, lubi ryzyko,
                      sporty, siłownię, nie poddaje się. Lubi dzieci i ma do
                      nich podejście. Skromna w ubiorze, nie lubi się malować,
                      woli naturę.&nbsp;
                      <b>
                        <em>[Beata]</em>
                      </b>
                    </p>
                    <p className="services__modal-description">
                      Bardzo dobrze gotuje. Jest miła, pracowita i skromna.
                      <b>
                        <em>[V.]</em>
                      </b>
                    </p>

                    <div className="services__modal-services">
                      <img src={img1} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
