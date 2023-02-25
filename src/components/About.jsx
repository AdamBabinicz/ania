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
                    <h3 className="services__modal-title">Robert Makłowicz</h3>
                    <p className="services__modal-description">
                      To, że dany region akurat w tym momencie dziejowym
                      przynależy do jakiegoś państwa, nie przekreśla wiekowego
                      formowania własnej, odrębnej kultury kulinarnej. Kuchnia
                      narodowa to jest pomysł XX-wieczny. Może to niektórych
                      zdziwić, ale po raz pierwszy terminu kuchnia włoska użył
                      Benito Mussolini. Wtedy taka uniformizacja była związana z
                      dążeniem autorytarnych reżimów do tego, żeby coś było
                      narodowe, a tym samym lepsze od innych.
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
