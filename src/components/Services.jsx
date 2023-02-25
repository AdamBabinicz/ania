import React from "react";
import img1 from "../assets/2.svg";
import img2 from "../assets/5.png";
import img3 from "../assets/2.png";
import img4 from "../assets/3.png";
import img5 from "../assets/4.png";
import img6 from "../assets/6.png";

function Services() {
  const header = {
    mainHeader: "Mój żywioł",
    subHeading: "Życiowa pasja",
  };
  const state = [
    {
      id: 1,
      icon: img1,
      heading: "🥧",
      text: "W walce między sercem a mózgiem zwycięża w końcu żołądek.",
    },
    {
      id: 2,
      icon: img2,
      heading: "🥓",
      text: "Kiedy w brzuchu pusto, w głowie groch z kapustą...",
    },
    {
      id: 3,
      icon: img3,
      heading: "🍖",
      text: "Głos sumienia i głos honoru brzmią cichutko, gdy kiszki marsza grają.",
    },
    {
      id: 4,
      icon: img4,
      heading: "🥞",
      text: "Twoje pożywienie powinno być lekarstwem, a twoje lekarstwo powinno być pożywieniem.",
    },
    {
      id: 5,
      icon: img5,
      heading: "🥗",
      text: "Problemem nie są okazjonalne skrajności i smakołyki, problemem jest codzienne jedzenie.",
    },
    {
      id: 6,
      icon: img6,
      heading: "🧅",
      text: "Polski schabowy to jest to, co lubię najbardziej. Żadna kuchnia grecka czy włoska naszej nie przebije.",
    },
  ];

  return (
    <div className="services" id="pasja">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h6 className="heading">{header.mainHeader}</h6>
            <h2 className="subheading">{header.subHeading}</h2>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  <img src={info.icon} alt="..." className="commonIcons" />
                  <h4 className="services__box-header">{info.heading}</h4>
                  <p className="services__box-0">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
