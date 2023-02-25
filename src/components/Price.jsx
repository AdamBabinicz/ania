import React from "react";

function Price() {
  const header = {
    subHeading: "Moje hobby",
    text: "Preferencje",
  };
  const state = [
    {
      id: 1,
      heading: "Książki",
      price: "📖",
      msg1: "Tajemnica diabelskiego kręgu",
      msg2: "Trylogia Tolkiena",
      msg3: "Historia II wojny światowej",
      msg4: "Żołnierze Wyklęci",
      link: "https://www.prezydent.pl/aktualnosci/polityka-historyczna/zolnierze-wykleci/kim-byli-zolnierze-wykleci",
    },
    {
      id: 2,
      heading: "Gry komputerowe",
      price: "💻",
      msg1: "Neverwinter online",
      msg2: "Counter-Strike",
      msg3: "GTA: San Andreas",
      msg4: "Diablo, Gothic, Wiedźmin",
      link: "https://www.playneverwinter.com/en",
    },
    {
      id: 3,
      heading: "Wypieki",
      price: "🍰",
      msg1: "Torty",
      msg2: "Ciasta",
      msg3: "Ciastka",
      msg: "",
      link: "https://mojewypieki.com",
    },
  ];

  return (
    <div className="prices" id="hobby">
      <div className="container">
        <div className="common">
          <h2 className="mainHeader">{header.subHeading}</h2>
          <h6 className="mainContent">{header.text}</h6>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <span></span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
